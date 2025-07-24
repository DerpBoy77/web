"use client";
import Link from 'next/link';
import { useState } from 'react';

interface HeaderProps {
    currentPage?: string;
}

export default function Header({ currentPage = "" }: HeaderProps) {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    };

    return (
        <>
            <header className="w-full py-4 px-4 sm:px-8 flex justify-between items-center shadow-md bg-white sticky top-0 z-50 font-sans">
                {/* Logo */}
                <div className="text-xl sm:text-2xl font-bold tracking-wide text-gray-900">Kavi Hangbro</div>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center space-x-4 text-base font-medium">
                    <Link
                        href="/"
                        className={currentPage === "home" ? "text-pink-500 font-semibold" : "text-gray-700 hover:text-pink-500"}
                    >
                        Home
                    </Link>
                    <a
                        href="/about"
                        className={currentPage === "about" ? "text-pink-500 font-semibold" : "text-gray-700 hover:text-pink-500"}
                    >
                        About
                    </a>
                    <a
                        href="/catalogue"
                        className={currentPage === "catalogue" ? "text-pink-500 font-semibold" : "text-gray-700 hover:text-pink-500"}
                    >
                        Catalogue
                    </a>
                    <a
                        href="/enquiry"
                        className={currentPage === "enquiry" ? "text-pink-500 font-semibold" : "text-gray-700 hover:text-pink-500"}
                    >
                        Enquiry
                    </a>
                    <a
                        href="/contact"
                        className="bg-pink-500 text-white font-semibold rounded-full px-5 py-2 shadow-md hover:bg-pink-600 transition"
                    >
                        CONTACT
                    </a>
                </nav>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1"
                    onClick={toggleMobileMenu}
                    aria-label="Toggle mobile menu"
                >
                    <span className={`w-6 h-0.5 bg-gray-700 transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
                    <span className={`w-6 h-0.5 bg-gray-700 transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
                    <span className={`w-6 h-0.5 bg-gray-700 transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
                </button>
            </header>

            {/* Mobile Menu Overlay - Outside header for better z-index control */}
            {isMobileMenuOpen && (
                <>
                    {/* Backdrop */}
                    <div
                        className="md:hidden fixed inset-0 bg-black bg-opacity-30 z-[60]"
                        onClick={closeMobileMenu}
                        style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)' }}
                    ></div>

                    {/* Menu */}
                    <nav
                        className="md:hidden fixed top-20 right-4 left-4 rounded-lg shadow-2xl z-[70] border border-gray-200 overflow-hidden"
                        style={{ backgroundColor: 'white' }}
                    >
                        <div className="flex flex-col" style={{ backgroundColor: 'white' }}>
                            <Link
                                href="/"
                                className={`px-6 py-4 text-base font-medium transition-colors ${currentPage === "home" ? "text-pink-500 font-semibold bg-pink-50" : "text-gray-700 hover:text-pink-500 hover:bg-gray-50"}`}
                                onClick={closeMobileMenu}
                            >
                                Home
                            </Link>
                            <a
                                href="/about"
                                className={`px-6 py-4 text-base font-medium transition-colors ${currentPage === "about" ? "text-pink-500 font-semibold bg-pink-50" : "text-gray-700 hover:text-pink-500 hover:bg-gray-50"}`}
                                onClick={closeMobileMenu}
                            >
                                About
                            </a>
                            <a
                                href="/catalogue"
                                className={`px-6 py-4 text-base font-medium transition-colors ${currentPage === "catalogue" ? "text-pink-500 font-semibold bg-pink-50" : "text-gray-700 hover:text-pink-500 hover:bg-gray-50"}`}
                                onClick={closeMobileMenu}
                            >
                                Catalogue
                            </a>
                            <a
                                href="/enquiry"
                                className={`px-6 py-4 text-base font-medium transition-colors ${currentPage === "enquiry" ? "text-pink-500 font-semibold bg-pink-50" : "text-gray-700 hover:text-pink-500 hover:bg-gray-50"}`}
                                onClick={closeMobileMenu}
                            >
                                Enquiry
                            </a>
                            <div className="px-6 py-4" style={{ backgroundColor: 'white' }}>
                                <a
                                    href="/contact"
                                    className="bg-pink-500 text-white font-semibold rounded-full px-6 py-3 shadow-md hover:bg-pink-600 transition-colors block text-center"
                                    onClick={closeMobileMenu}
                                >
                                    CONTACT
                                </a>
                            </div>
                        </div>
                    </nav>
                </>
            )}
        </>
    );
}
