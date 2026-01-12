import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import express from 'express'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const isProduction = process.env.NODE_ENV === 'production'
const port = process.env.PORT || 5173

async function createServer() {
    const app = express()

    let vite
    if (!isProduction) {
        // Development Mode: Use Vite Server
        vite = await (await import('vite')).createServer({
            server: { middlewareMode: true },
            appType: 'custom',
        })
        app.use(vite.middlewares)
    } else {
        // Production Mode: Serve built files
        // 1. Serve static assets (CSS, JS, Images)
        app.use((await import('compression')).default())
        app.use(
            '/',
            (await import('serve-static')).default(path.resolve(__dirname, 'dist/client'), {
                index: false, // Don't serve index.html automatically, we handle it below
            })
        )
    }

    app.use('*', async (req, res, next) => {
        try {
            const url = req.originalUrl
            let template, render

            if (!isProduction) {
                // Dev: Read raw index.html and use Vite to render
                template = fs.readFileSync(path.resolve(__dirname, 'index.html'), 'utf-8')
                template = await vite.transformIndexHtml(url, template)
                render = (await vite.ssrLoadModule('/src/entry-server.jsx')).render
            } else {
                // Prod: Read built index.html and use built server entry
                template = fs.readFileSync(path.resolve(__dirname, 'dist/client/index.html'), 'utf-8')
                render = (await import('./dist/server/entry-server.js')).render
            }

            const { html } = render(url)
            const appHtml = template.replace(`<!--ssr-outlet-->`, html)

            res.status(200).set({ 'Content-Type': 'text/html' }).end(appHtml)
        } catch (e) {
            !isProduction && vite.ssrFixStacktrace(e)
            console.log(e.stack)
            res.status(500).end(e.stack)
        }
    })

    app.listen(port, () => {
        console.log(`Server started at http://localhost:${port}`)
    })
}

createServer()