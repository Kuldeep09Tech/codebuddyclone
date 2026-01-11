import React from 'react';
import { Check, ChevronRight } from 'lucide-react';
import servicesData from '../../data/services.json';

// Animation
const ServiceIcon = ({ id }) => {
    switch (id) {
        case 'design':
            return (
                <div className="relative w-20 h-20">
                    <div className="absolute top-0 left-0 w-8 h-8 bg-[#ff5252] rounded-full z-10 transition-transform duration-500 ease-out group-hover:translate-y-[28px]"></div>
                    <div className="absolute bottom-2 left-0 w-0 h-0 border-l-[16px] border-l-transparent border-r-[16px] border-r-transparent border-b-[28px] border-b-[#f4b400] z-20"></div>
                    <div className="absolute top-0 right-0 w-8 h-16 bg-[#448aff] rounded-full z-0 transition-transform duration-500 ease-out group-hover:-translate-x-[36px]"></div>
                </div>
            );

        case 'development':
            return (
                <div className="relative w-20 h-20">
                    <div className="flex gap-2 absolute top-0 left-0 w-full z-10">
                        <div className="w-9 h-9 bg-[#fdd835] rounded-sm"></div>
                        <div className="w-9 h-9 bg-[#90a4ae] rounded-sm"></div>
                    </div>
                    <div className="absolute top-[50px] left-0 w-[80px] h-9 bg-[#ff7043] rounded-sm transition-transform duration-500 ease-out group-hover:-translate-y-[38px] z-20"></div>
                </div>
            );

        case 'maintenance':
            return (
                <div className="relative w-20 h-16 flex items-center">
                    <div className="absolute left-0 top-4 w-8 h-8 rounded-full bg-[#78909c] flex items-center justify-center z-20 transition-transform duration-500 ease-out group-hover:translate-x-[26px]">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <div className="absolute left-10 top-2 w-12 h-12 rounded-full bg-[#fbc02d] flex items-center justify-center z-10">
                        <div className="w-3 h-3 bg-white rounded-full"></div>
                    </div>
                </div>
            );
        default:
            return null;
    }
};

export default function Services() {
    return (
        <section className="bg-white py-20 relative font-sans">
            <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20">

                {/* HEADER */}
                <div className="mb-16">
                    <p className="text-[#8b9099] uppercase tracking-widest text-[11px] font-bold mb-3">
                        {servicesData.header.topLabel}
                    </p>
                    <h2 className="text-4xl sm:text-[42px] font-bold text-primary max-w-lg leading-[1.1]">
                        {servicesData.header.title}{' '}
                        <div className="relative inline-block">
                            {servicesData.header.highlight}
                            <svg className="absolute -bottom-2 left-0 w-full" height="12" viewBox="0 0 100 12" preserveAspectRatio="none">
                                <path d="M0 6 Q 50 12 100 6" stroke="#f4b400" strokeWidth="4" fill="none" />
                            </svg>
                        </div>
                    </h2>
                </div>

                {/* LIST */}
                <div className="space-y-6">
                    {servicesData.list.map((service) => (

                        <div
                            key={service.id}
                            className="group border border-gray-200 rounded-sm p-8 sm:p-10 flex flex-col md:grid md:grid-cols-12 gap-8 hover:shadow-xl transition-all duration-300 bg-white "
                        >

                            {/* ICON SECTION */}
                            <div className="md:col-span-2 flex justify-center md:justify-start pt-2">
                                <ServiceIcon id={service.id} />
                            </div>

                            {/* TITLE & BUTTON */}
                            <div className="md:col-span-3 flex flex-col items-start">
                                <h3 className="text-xl font-bold text-primary mb-4 group-hover:text-brand transition-colors">
                                    {service.title}
                                </h3>
                                <a href="#" className="inline-flex items-center gap-1 text-xs font-bold text-primary bg-[#fffdf5] px-3 py-1.5 rounded-full border border-yellow-100 group-hover:bg-brand ">
                                    learn more <span className="text-brand ">›</span>
                                </a>
                            </div>

                            {/* DESCRIPTION & CONTENT */}
                            <div className="md:col-span-7">
                                <p className="text-gray-500 text-[15px] leading-relaxed mb-6">
                                    {service.description}
                                </p>

                                <div className="space-y-2 mb-8">
                                    {service.features.map((feature, idx) => (
                                        <div key={idx} className="flex items-center gap-3">
                                            <div className="w-4 h-4 rounded-full bg-[#22c55e] flex items-center justify-center flex-shrink-0">
                                                <Check className="w-2.5 h-2.5 text-white" strokeWidth={4} />
                                            </div>
                                            <span className="text-primary font-bold text-sm">{feature}</span>
                                        </div>
                                    ))}
                                </div>

                                {/* Tech Stack */}
                                <div className="flex flex-wrap gap-4 items-center">
                                    {service.techStack.map((tech, i) => (
                                        <img
                                            key={i}
                                            src={tech.icon}
                                            alt={tech.name}
                                            className="w-6 h-6 object-contain opacity-60 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
                                        />
                                    ))}
                                </div>
                            </div>

                        </div>
                    ))}
                </div>

                {/* FOOTER BUTTON */}
                <div className="flex justify-end mt-12">
                    <a href="#" className="relative inline-flex items-center gap-2 group cursor-pointer">
                        <div className="absolute -left-3 w-10 h-10 bg-[#fef0c7] rounded-full -z-10 group-hover:scale-125 transition-transform duration-300">

                        </div>
                        <span className="text-primary font-bold text-lg">
                            browse services
                        </span>
                        <ChevronRight className="w-5 h-5 text-brand stroke-[3] group-hover:translate-x-1 transition-transform" />
                    </a>
                </div>

            </div>
        </section>
    );
}