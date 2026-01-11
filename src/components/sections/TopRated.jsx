import React from 'react';
import data from '../../data/topRated.json';
import clutchImg from '../../assets/clutch.png';

export default function TopRated() {
    return (
        <section className="bg-white py-24 px-6 font-sans">
            <div className="max-w-6xl mx-auto">

                {/* GRID LAYOUT: Left Text | Right Image */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">

                    {/* LEFT COLUMN: TEXT */}
                    <div className="flex flex-col items-start text-left">

                        {/* LABEL */}
                        <span className="text-[11px] font-bold text-gray-400 tracking-[0.2em] uppercase mb-4">
                            {data.header.label}
                        </span>

                        {/* HEADLINE */}
                        <h2 className="text-3xl sm:text-[40px] font-bold text-primary mb-6 leading-[1.2]">

                            {/* Line 1: "Here's the result -" (With Yellow Smile) */}
                            <span className="relative inline-block">
                                {data.header.line1}
                                {/* Yellow Smile Underline */}
                                <svg className="absolute -bottom-2 left-0 w-full" height="12" viewBox="0 0 100 12" preserveAspectRatio="none">
                                    <path d="M0 2 Q 50 12 100 2" stroke="#f4b400" strokeWidth="4" fill="none" />
                                </svg>
                            </span>

                            <br />

                            {/* Line 2: "5 star-rated on Clutch" */}
                            <span>{data.header.line2}</span>
                        </h2>

                        {/* DESCRIPTION */}
                        <p className="text-gray-500 text-[16px] leading-relaxed max-w-md">
                            {data.header.description}
                        </p>
                    </div>

                    {/* RIGHT COLUMN: CLUTCH BADGE */}
                    <div className="flex justify-center lg:justify-end">

                        <img
                            src={clutchImg}
                            alt="5 Star Clutch Rated"
                            className="w-48 h-auto object-contain drop-shadow-md"
                        />
                    </div>

                </div>
            </div>
        </section>
    );
}