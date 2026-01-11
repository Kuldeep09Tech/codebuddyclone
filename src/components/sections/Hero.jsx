import React from 'react';
import { ArrowRight, Calculator } from 'lucide-react';
import heroData from '../../data/hero.json';

export default function Hero() {
    return (
        <section className="bg-white pt-32 pb-20 px-6 font-sans">
            <div className="max-w-5xl mx-auto text-center flex flex-col items-center">

                {/* HEADLINE */}
                <h1 className="text-[28px] sm:text-[30px] font-bold text-primary leading-[1.0] mb-6 tracking-tight">
                    {heroData.headline}
                </h1>

                {/* SUBHEADLINE */}
                <p className="text-lg sm:text-xl text-gray-600 mb-8 font-medium">
                    {heroData.subheadline}{' '}
                    <span className="text-primary font-bold">{heroData.backer}</span>
                </p>

                {/* RATING */}
                <div className="flex items-center gap-2 mb-12">
                    <div className="flex gap-1">
                        {[...Array(5)].map((_, i) => (
                            <svg key={i} className="w-5 h-5 text-[#ff3d2e] fill-current" viewBox="0 0 24 24">
                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                            </svg>
                        ))}
                    </div>
                    <span className="text-primary font-bold text-sm mt-0.5">
                        on {heroData.rating.platform}
                    </span>
                </div>

                {/* BUTTONS */}
                <div className="flex items-center gap-6 sm:gap-10">

                    {/* Secondary Button (Let's Talk) */}
                    <a
                        href={heroData.cta.secondary.path}
                        className="flex items-center gap-2 text-primary font-bold text-lg hover:text-brand hover:gap-3 transition-all"
                    >
                        {heroData.cta.secondary.label}
                        {/* Fixed color-yellow (which isn't valid) to text-brand */}
                        <ArrowRight className="w-5 h-5 text-brand" />
                    </a>

                    {/* Primary Button (Get Estimate) */}
                    <a
                        href={heroData.cta.primary.path}
                        className="group relative bg-[#3b4b61] hover:bg-black text-white px-8 py-4 rounded-full font-bold text-lg flex items-center gap-3 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
                    >
                        <div className="bg-white/10 rounded-full p-1.5 group-hover:bg-white/20 transition-colors">
                            <Calculator className="w-5 h-5" />
                        </div>
                        {heroData.cta.primary.label}
                    </a>
                </div>

            </div>
        </section>
    );
}