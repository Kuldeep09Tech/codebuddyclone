import React from 'react';
import { ArrowRight } from 'lucide-react';
import data from '../../data/caseStudies.json';

// IMPORT IMAGES 
import img1 from '../../assets/cases/codebuddy1.png';
import img2 from '../../assets/cases/codebuddy2.png';
import img3 from '../../assets/cases/codebuddy5.png';
import img4 from '../../assets/cases/codebuddy4.png';

// IMAGE MAPPING 
const imageMap = {
    case1: img1,
    case2: img2,
    case3: img3,
    case4: img4,
};

export default function CaseStudies() {
    return (
        <section className="bg-white py-20 px-6 font-sans">
            <div className="max-w-7xl mx-auto">

                {/* HEADER */}
                <div className="mb-16">
                    <p className="text-[#8b9099] uppercase tracking-widest text-[11px] font-bold mb-3">
                        {data.header.label}
                    </p>
                    <h2 className="text-4xl sm:text-[42px] font-bold text-primary max-w-2xl leading-[1.1]">
                        {data.header.title}
                        {/* Simple Yellow Underline Dot */}
                        <span className="text-brand">.</span>
                    </h2>
                </div>

                {/* GRID LIST */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-16">
                    {data.list.map((item) => (
                        <div key={item.id} className="group cursor-pointer flex flex-col h-full">

                            {/* IMAGE CARD */}
                            <div className="relative overflow-hidden rounded-md mb-6 shadow-sm border border-gray-100">
                                {/* Image Scale Effect on Hover */}
                                <img
                                    src={imageMap[item.imageKey]}
                                    alt={item.title}
                                    className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105"
                                />

                                {/* "Read Full Story" */}
                                <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                    <span className="text-white font-bold text-lg flex items-center gap-2">
                                        Read full story <ArrowRight className="w-5 h-5 text-brand" />
                                    </span>
                                </div>
                            </div>

                            {/* CONTENT */}
                            <div className="flex flex-col flex-grow">
                                {/* Category Label */}
                                <span className="text-[11px] font-bold text-gray-400 tracking-widest uppercase mb-3">
                                    {item.category}
                                </span>

                                {/* Title */}
                                <h3 className="text-2xl font-bold text-primary mb-4 leading-tight group-hover:text-brand transition-colors">
                                    {item.title}
                                </h3>

                                {/* Description */}
                                <p className="text-gray-500 text-[15px] leading-relaxed mb-6 flex-grow">
                                    {item.description}
                                </p>

                                {/* Bottom Link */}
                                <div className="mt-auto">
                                    <span className="inline-flex items-center gap-2 text-[13px] font-bold text-primary border-b-2 border-brand/30 pb-0.5 group-hover:border-brand transition-all">
                                        View Case Study
                                    </span>
                                </div>
                            </div>

                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}