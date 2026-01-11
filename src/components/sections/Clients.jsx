import React, { useState } from 'react';
import data from '../../data/clients.json';
import c1 from '../../assets/clients/client001.png';
import c2 from '../../assets/clients/client2.png';
import c3 from '../../assets/clients/ExpiTrack.png';
import c4 from '../../assets/clients/client4.png';
import c5 from '../../assets/clients/theno.png';
import c6 from '../../assets/clients/client6.png';
import c7 from '../../assets/clients/client7.png';
import c8 from '../../assets/clients/client8.png';
import c9 from '../../assets/clients/client9.png';
import c10 from '../../assets/clients/client10.png';
import c11 from '../../assets/clients/client11.png';

// Map keys to images
const logoMap = { c1, c2, c3, c4, c5, c6, c7, c8, c9, c10, c11 };

export default function Clients() {
    const [pageIndex, setPageIndex] = useState(0);

    // LOGIC: Show 5 page dikhani h
    const itemsPerPage = 5;
    const totalPages = Math.ceil(data.list.length / itemsPerPage);

    // Get the logos for the current page
    const visibleLogos = data.list.slice(
        pageIndex * itemsPerPage,
        (pageIndex + 1) * itemsPerPage
    );

    return (
        <section className="bg-gray-100 py-24 px-6 font-sans">
            <div className="max-w-6xl mx-auto text-center">

                {/* HEADER */}
                <div className="mb-16">
                    <p className="text-[#8b9099] uppercase tracking-widest text-[11px] font-bold mb-3">
                        {data.header.label}
                    </p>
                    <h2 className="text-4xl sm:text-[42px] font-bold text-primary mb-4">
                        {data.header.titleStart}{' '}
                        <div className="relative inline-block">
                            {data.header.highlight}
                            {/* Yellow Smile Underline */}
                            <svg className="absolute -bottom-2 left-0 w-full" height="12" viewBox="0 0 100 12" preserveAspectRatio="none">
                                <path d="M0 0 Q 50 12 100 0" stroke="#f4b400" strokeWidth="4" fill="none" />
                            </svg>
                        </div>
                        {data.header.titleEnd}
                    </h2>
                    <p className="text-gray-500 text-lg">
                        {data.header.subtitle}
                    </p>
                </div>

                {/* LOGO GRID (The Slider) */}
                <div className="min-h-[100px] flex items-center justify-center mb-12">
                    <div className="flex flex-wrap justify-center gap-10 lg:gap-16 items-center">
                        {visibleLogos.map((client) => (
                            <div
                                key={client.id}
                                className="group cursor-pointer transition-all duration-300"
                            >
                                {/* 
                   Logos are Grayscale by default. On Hover: Color returns + slightly larger.*/}
                                <img
                                    src={logoMap[client.imgKey]}
                                    alt={client.name}
                                    className="h-8 sm:h-10 w-auto object-contain opacity-40 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
                                />
                            </div>
                        ))}
                    </div>
                </div>

                {/* DOTS NAVIGATION */}
                <div className="flex justify-center gap-3">
                    {[...Array(totalPages)].map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setPageIndex(i)}
                            className={`w-3 h-3 rounded-full transition-all duration-300 ${pageIndex === i
                                ? 'bg-gray-500'
                                : 'bg-gray-200 hover:bg-gray-300'
                                }`}
                        />
                    ))}
                </div>

            </div>
        </section>
    );
}