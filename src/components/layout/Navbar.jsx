import React, { useState, useEffect } from 'react';
import { Menu, ArrowRight, X } from 'lucide-react';
import navData from '../../data/navbar.json';
import myLogo from '../../assets/link_only.png';

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [visible, setVisible] = useState(true);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            // LOGIC FOR BUTTON & COLOR
            if (scrollPosition > 100) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
            // LOGIC FOR SLIDING UP/DOWN
            if (scrollPosition < 50) {
                setVisible(true);
            }
            // HIDE NAVBAR (Slide Up)
            else if (scrollPosition >= 50 && scrollPosition < 350) {
                setVisible(false);
            }
            // SHOW NAVBAR (Sticky Mode)
            else {
                setVisible(true);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // when mobile menu is open
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isMobileMenuOpen]);

    return (
        <>
            <nav
                className={`fixed top-0 w-full z-40 transition-all duration-500 transform font-sans ${visible ? 'translate-y-0' : '-translate-y-full'
                    } ${scrolled ? 'bg-gray-50 shadow-md py-2' : 'bg-[#F5F5F3] py-2'}`}
            >
                <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
                    <div className="flex justify-between items-center h-12">

                        {/* LOGO */}
                        <a href="/" className="flex-shrink-0 flex items-center cursor-pointer">
                            <img
                                src={myLogo}
                                alt="Logo"
                                className="h-20 w-auto object-contain"
                            />
                        </a>

                        {/* DESKTOP LINKS */}
                        <div className="hidden md:flex items-center space-x-10">
                            {navData.links.map((link) => (
                                <a
                                    key={link.id}
                                    href={link.path}
                                    className="text-[16px] font-bold text-[#1e2330] hover:text-[#f4b400] transition-colors duration-200"
                                >
                                    {link.label}
                                </a>
                            ))}
                        </div>

                        {/* BUTTON - WITH SCROLL REVEAL ANIMATION */}
                        <div className={`hidden md:flex items-center transition-all duration-700 ease-out ${scrolled
                            ? 'opacity-100 translate-x-0'
                            : 'opacity-0 translate-x-12 pointer-events-none'
                            }`}>
                            <a
                                href={navData.cta.path}
                                className="bg-[#1e2330] hover:bg-black text-white text-[15px] font-bold px-6 py-2.5 rounded-full flex items-center gap-2"
                            >
                                {navData.cta.label}
                                <ArrowRight className="w-4 h-4" />
                            </a>
                        </div>

                        {/* MOBILE TOGGLE */}
                        <div className="md:hidden flex items-center">
                            <button
                                onClick={() => setIsMobileMenuOpen(true)}
                                className="text-[#1e2330] hover:text-[#f4b400] transition-colors"
                            >
                                <Menu className="w-8 h-8" />
                            </button>
                        </div>

                    </div>
                </div>
            </nav>

            {/* MOBILE MENU DRAWER */}
            <div
                className={`fixed inset-0 z-50 bg-[#F5F5F3] transition-transform duration-300 ease-in-out font-sans ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
                    }`}
            >
                <div className="flex flex-col h-full">
                    {/* Header */}
                    <div className="flex justify-between items-center px-6 py-5 border-b border-gray-200">
                        <img src={myLogo} alt="Logo" className="h-10 w-auto object-contain" />
                        <button
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="p-2 bg-white rounded-full shadow-sm text-[#1e2330] hover:text-red-500 transition-colors"
                        >
                            <X className="w-6 h-6" />
                        </button>
                    </div>

                    {/* Links */}
                    <div className="flex flex-col px-6 mt-4">
                        {navData.links.map((link) => (
                            <a
                                key={link.id}
                                href={link.path}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="text-[18px] font-bold text-[#1e2330] py-5 border-b border-dashed border-gray-300 hover:text-[#f4b400] transition-colors capitalize"
                            >
                                {link.label}
                            </a>
                        ))}

                        <a
                            href={navData.cta.path}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="mt-8 bg-[#1e2330] text-white text-[16px] font-bold px-6 py-4 rounded-full flex justify-center items-center gap-2"
                        >
                            {navData.cta.label}
                            <ArrowRight className="w-5 h-5" />
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}