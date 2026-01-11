import React from 'react';
import { ChevronRight } from 'lucide-react';
import data from '../../data/blog.json';
// IMPORT IMAGES
import b1 from '../../assets/blog/Blog1.png';
import b2 from '../../assets/blog/Blog2.png';

const imgMap = { b1, b2 };

export default function Blog() {
    return (
        <section className="bg-yellow-50 py-24 px-6 font-sans border-t border-gray-100">
            <div className="max-w-6xl mx-auto">

                {/* HEADER */}
                <div className="mb-16">
                    <p className="text-[#8b9099] uppercase tracking-widest text-[11px] font-bold mb-3">
                        {data.header.label}
                    </p>
                    <h2 className="text-4xl sm:text-[42px] font-bold text-primary">
                        {data.header.title}{' '}
                        <div className="relative inline-block">
                            {data.header.highlight}

                            {/* Yellow Smile Underline */}
                            <svg className="absolute -bottom-2 left-0 w-full" height="12" viewBox="0 0 100 12" preserveAspectRatio="none">
                                <path d="M0 6 Q 50 12 100 6" stroke="#f4b400" strokeWidth="4" fill="none" />
                            </svg>
                        </div>
                    </h2>
                </div>

                {/* BLOG GRID (2 Columns) */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16">
                    {data.posts.map((post) => (
                        <div key={post.id} className="group cursor-pointer flex flex-col">

                            {/* IMAGE CARD */}
                            <div className="relative overflow-hidden rounded-2xl mb-6 shadow-sm border border-gray-100 aspect-[16/9]">
                                <img
                                    src={imgMap[post.imgKey]}
                                    alt={post.title}
                                    className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
                                />
                            </div>

                            {/* CONTENT */}
                            <div className="flex flex-col">
                                {/* Date */}
                                <span className="text-[11px] font-bold text-gray-400 tracking-widest uppercase mb-3">
                                    {post.date}
                                </span>

                                {/* Title */}
                                <h3 className="text-2xl font-bold text-primary leading-tight group-hover:text-brand transition-colors">
                                    {post.title}
                                </h3>
                            </div>

                        </div>
                    ))}
                </div>

                {/* CENTER BUTTON */}
                <div className="flex justify-center mt-16">
                    <a href="#" className="relative inline-flex items-center gap-2 group cursor-pointer">

                        {/* Yellow Circle */}
                        <div className="absolute -left-3 w-10 h-10 bg-[#fef0c7] rounded-full -z-10 group-hover:scale-125 transition-transform duration-300"></div>

                        <span className="text-primary font-bold text-lg">
                            {data.header.cta}
                        </span>
                        <ChevronRight className="w-5 h-5 text-brand stroke-[3] group-hover:translate-x-1 transition-transform" />
                    </a>
                </div>

            </div>
        </section>
    );
}