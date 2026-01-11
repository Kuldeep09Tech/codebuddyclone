import React, { useState } from 'react';
import { ChevronRight } from 'lucide-react';
import data from '../../data/techStack.json';

// TECHNOLOGY
import php from '../../assets/tech/php.png';
import wordpress from '../../assets/tech/wordpress.png';
import laravel from '../../assets/tech/leravel.png';
import node from '../../assets/tech/nodejs.png';
import react from '../../assets/tech/reactjs.png';
import reactnative from '../../assets/tech/reactjs.png';
import vue from '../../assets/tech/vuejs.png';
import sails from '../../assets/tech/sailsjs.png';
import next from '../../assets/tech/nextA.png';
import nest from '../../assets/tech/nextjs.png';
import tailwind from '../../assets/tech/tailwind.png';
import aem from '../../assets/tech/AEB1.png';
import nuxt from '../../assets/tech/nust.png';
import ts from '../../assets/tech/type.png';
import svelte from '../../assets/tech/swelte.png';

// DATABASES
import mysql from '../../assets/tech/mysql.png';
import postgres from '../../assets/tech/postgresql.png';
import sqlite from '../../assets/tech/sqlite.png';
import mongo from '../../assets/tech/mongodb.png';
import firebase from '../../assets/tech/firebase.png';
import dynamo from '../../assets/tech/dynamo.png';
import mariadb from '../../assets/tech/maria.png';
import elastic from '../../assets/tech/elestic.png';
import redis from '../../assets/tech/redis.png';

// DESIGN
import figma from '../../assets/tech/figma.png';
import photoshop from '../../assets/tech/photoshop.png';
import illustrator from '../../assets/tech/illustrator.png';
import adobexd from '../../assets/tech/adobexd.png';
import sketch from '../../assets/tech/sketch.png';
import balsamiq from '../../assets/tech/balsamiq.png';
import zeplin from '../../assets/tech/zeplin.webp';
import invision from '../../assets/tech/invision.png';

// DEVOPS
import aws from '../../assets/tech/aws.png';
import gcp from '../../assets/tech/GCP.png';
import digitalocean from '../../assets/tech/digitalocean.png';
import docker from '../../assets/tech/docker.png';
import kubernetes from '../../assets/tech/kubernetes.png';
import jenkins from '../../assets/tech/jenkins.png';
import azure from '../../assets/tech/Azure.png';
import vercel from '../../assets/tech/vercel.png';
import heroku from '../../assets/tech/heroku.png';
import netlify from '../../assets/tech/netlify.png';
import gitlab from '../../assets/tech/gitlab.png';

//  MAP JSON KEYS TO IMAGES ---
const iconMap = {
    php, wordpress, laravel, node, react, reactnative, vue, sails, next, nest, tailwind, aem, nuxt, ts, svelte,
    mysql, postgres, sqlite, mongo, firebase, dynamo, mariadb, elastic, redis,
    figma, photoshop, illustrator, adobexd, sketch, balsamiq, zeplin, invision,
    aws, gcp, digitalocean, docker, kubernetes, jenkins, azure, vercel, heroku, netlify, gitlab
};

export default function TechStack() {
    const [activeTab, setActiveTab] = useState("Technology");
    const activeCategory = data.tabs.find(tab => tab.name === activeTab);

    return (
        <section className="bg-gray-100 py-24 px-6 font-sans">
            <div className="max-w-7xl mx-auto">

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

                    {/* LEFT: TEXT */}
                    <div className="flex flex-col items-start">
                        <span className="text-[11px] font-bold text-gray-400 tracking-[0.2em] uppercase mb-4">
                            {data.header.label}
                        </span>

                        <h2 className="text-4xl font-bold text-primary mb-6 relative inline-block">
                            {data.header.title}
                            <svg className="absolute -bottom-2 left-0 w-[40px]" height="10" viewBox="0 0 40 10" preserveAspectRatio="none">
                                <path d="M0 0 Q 20 10 40 0" stroke="#f4b400" strokeWidth="4" fill="none" />
                            </svg>
                        </h2>

                        <p className="text-gray-500 text-[16px] leading-relaxed mb-10 max-w-lg">
                            {data.header.description}
                        </p>

                        <a href="#" className="bg-primary bg-black text-white text-[14px] font-bold px-8 py-3.5 rounded-full flex items-center gap-2 transition-all">
                            {data.header.cta}
                            <ChevronRight className="w-4 h-4 text-brand" strokeWidth={3} />
                        </a>
                    </div>

                    {/* RIGHT: TABS & ICONS */}
                    <div>

                        {/* TABS */}
                        <div className="flex flex-wrap gap-8 border-b border-gray-100 mb-10">
                            {data.tabs.map((tab) => (
                                <button
                                    key={tab.name}
                                    onClick={() => setActiveTab(tab.name)}
                                    className={`text-[16px] font-bold pb-4 relative transition-colors ${activeTab === tab.name
                                        ? 'text-primary'
                                        : 'text-gray-300 hover:text-gray-400'
                                        }`}
                                >
                                    {tab.name}
                                    {activeTab === tab.name && (
                                        <div className="absolute bottom-0 left-0 w-full h-[3px] bg-primary rounded-t-md"></div>
                                    )}
                                </button>
                            ))}
                        </div>

                        {/* ICONS GRID (4 Cols) */}
                        <div className="grid grid-cols-3 sm:grid-cols-4 gap-x-6 gap-y-12">
                            {activeCategory?.items.map((item) => (
                                <div key={item.key} className="flex flex-col items-center gap-3 group cursor-default">
                                    <div className="w-12 h-12 flex items-center justify-center transition-transform duration-300 group-hover:-translate-y-1">
                                        <img
                                            src={iconMap[item.key]}
                                            alt={item.name}
                                            className="w-full h-full object-contain"
                                        />
                                    </div>
                                    <span className="text-[13px] font-medium text-gray-400 group-hover:text-primary transition-colors text-center">
                                        {item.name}
                                    </span>
                                </div>
                            ))}
                        </div>

                    </div>

                </div>
            </div>
        </section>
    );
}