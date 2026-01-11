import React from 'react';
import data from '../../data/footer.json';

// IMPORT SOCIAL IMAGES 
import xImg from '../../assets/social/xlogo.png';
import linkedinImg from '../../assets/social/in.png';
import fbImg from '../../assets/social/face.png';
import instaImg from '../../assets/social/instagram.png';
import globeImg from '../../assets/social/globe.png';
import behanceImg from '../../assets/social/be.png';

export default function Footer() {
    return (
        <footer className="bg-gray-100 pt-24 pb-12 px-6 font-sans border-t border-gray-100">
            <div className="max-w-7xl mx-auto">

                {/* MAIN GRID (3 Columns) */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 lg:gap-8 mb-24">

                    {/* SERVICES */}
                    <div>
                        <h4 className="text-[11px] font-bold text-primary tracking-[0.15em] uppercase mb-6">
                            {data.columns[0].title}
                        </h4>
                        <ul className="space-y-3">
                            {data.columns[0].links.map((link, i) => (
                                <li key={i}>
                                    <a href="#" className="text-[15px] font-medium text-gray-500 hover:text-primary transition-colors">
                                        {link}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* COMPANY */}
                    <div>
                        <h4 className="text-[11px] font-bold text-primary tracking-[0.15em] uppercase mb-6">
                            {data.columns[1].title}
                        </h4>
                        <ul className="space-y-3">
                            {data.columns[1].links.map((link, i) => (
                                <li key={i}>
                                    <a href="#" className="text-[15px] font-medium text-gray-500 hover:text-primary transition-colors">
                                        {link}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* COLUMN 3: CONTACT US VALA hissa */}
                    <div className="md:col-span-2 md:pl-16">
                        <h4 className="text-[11px] font-bold text-primary tracking-[0.15em] uppercase mb-6">
                            {data.contact.title}
                        </h4>

                        {/* Email */}
                        <div className="mb-8">
                            <span className="text-[15px] font-bold text-primary block mb-1">Email Address</span>
                            <a href={`mailto:${data.contact.email}`} className="text-[15px] font-medium text-gray-500 hover:text-primary transition-colors">
                                {data.contact.email}
                            </a>
                        </div>

                        {/* India Office */}
                        <div className="mb-8">
                            <span className="text-[15px] font-bold text-primary block mb-2">{data.contact.indiaTitle}</span>
                            <div className="space-y-4">
                                {data.contact.indiaAddresses.map((addr, i) => (
                                    <p key={i} className="text-[15px] font-medium text-gray-500 leading-relaxed max-w-md">
                                        {addr}
                                    </p>
                                ))}
                            </div>
                        </div>

                        {/* US Office */}
                        <div>
                            <span className="text-[15px] font-bold text-primary block mb-2">{data.contact.usTitle}</span>
                            <p className="text-[15px] font-medium text-gray-500 leading-relaxed max-w-md">
                                {data.contact.usAddress}
                            </p>
                        </div>
                    </div>

                </div>

                {/* --- BOTTOM SECTION --- */}
                <div className="border-t border-gray-200 pt-10">

                    {/* SOCIAL LINKS ROW */}
                    <div className="flex justify-center items-center gap-6 mb-10">
                        <span className="text-[14px] text-gray-600 font-medium">Follow us:</span>

                        <div className="flex gap-6 items-center">
                            {/* Image Icons */}
                            <a href="#" className="hover:opacity-70 transition-opacity">
                                <img src={xImg} alt="X" className="w-5 h-5 object-contain" />
                            </a>
                            <a href="#" className="hover:opacity-70 transition-opacity">
                                <img src={linkedinImg} alt="LinkedIn" className="w-5 h-5 object-contain" />
                            </a>
                            <a href="#" className="hover:opacity-70 transition-opacity">
                                <img src={fbImg} alt="Facebook" className="w-5 h-5 object-contain" />
                            </a>
                            <a href="#" className="hover:opacity-70 transition-opacity">
                                <img src={instaImg} alt="Instagram" className="w-5 h-5 object-contain" />
                            </a>
                            <a href="#" className="hover:opacity-70 transition-opacity">
                                <img src={globeImg} alt="Website" className="w-5 h-5 object-contain" />
                            </a>
                            <a href="#" className="hover:opacity-70 transition-opacity">
                                <img src={behanceImg} alt="Behance" className="w-5 h-5 object-contain" />
                            </a>
                        </div>
                    </div>

                    {/* COPYRIGHT */}
                    <div className="text-center bg-gray-50 -mx-6 py-6 border-t border-gray-100 mt-4 sm:mx-0 sm:bg-transparent sm:py-0 sm:border-0">
                        <p className="text-gray-500 text-[14px] font-medium">
                            {data.copyright}
                        </p>
                    </div>

                </div>

            </div>
        </footer>
    );
}