import Navbar from './components/layout/Navbar'
import Hero from './components/sections/Hero.jsx'
import FeaturedWork from './components/sections/FeaturedWork.jsx'
import Services from './components/sections/Services.jsx'
import CaseStudies from './components/sections/CaseStudies.jsx'
import Testimonials from './components/sections/Testimonials.jsx'
import TopRated from './components/sections/TopRated.jsx'
import Clients from './components/sections/Clients.jsx'
import Blog from './components/sections/Blog.jsx'
import Footer from './components/layout/Footer.jsx'
import TechStack from './components/sections/TechStack.jsx'

function App() {
  return (
    <div className="min-h-screen bg-white text-[#1e2330] font-sans">
      <Navbar />
      <main>
        <Hero />
        <FeaturedWork />
        <Services />
        <CaseStudies />
        <Testimonials />
        <TechStack />
        <TopRated />
        <Clients />
        <Blog />
      </main>
      <Footer />
    </div>
  )
}

export default App