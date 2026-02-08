"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 right-0 bg-white border-b border-gray-200 z-50">
            <div className="container-custom">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <Link href="/" className="flex items-center space-x-3">
                        <Image
                            src="/assets/images/logos/parimm.jpg"
                            alt="Parim Sportswear"
                            width={45}
                            height={45}
                            className="object-contain"
                        />
                        <span className="text-lg font-light text-gray-900 tracking-tight" style={{ letterSpacing: '-0.01em' }}>Parim Sportswear</span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-12">
                        <Link href="#about" className="text-xs uppercase tracking-[0.15em] text-gray-600 hover:text-gray-900 font-medium transition-colors">
                            About
                        </Link>
                        <Link href="#products" className="text-xs uppercase tracking-[0.15em] text-gray-600 hover:text-gray-900 font-medium transition-colors">
                            Products
                        </Link>
                        <Link href="#services" className="text-xs uppercase tracking-[0.15em] text-gray-600 hover:text-gray-900 font-medium transition-colors">
                            Services
                        </Link>
                        <Link href="#contact" className="px-8 py-3 bg-gray-900 text-white text-xs uppercase tracking-[0.15em] font-medium hover:bg-black transition-all duration-300">
                            Contact
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden p-2 text-gray-900"
                        aria-label="Toggle menu"
                    >
                        <svg
                            className="w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                        >
                            {isOpen ? (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            ) : (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            )}
                        </svg>
                    </button>
                </div>

                {/* Mobile Menu */}
                {isOpen && (
                    <div className="md:hidden py-6 border-t border-gray-200">
                        <div className="flex flex-col space-y-6">
                            <Link
                                href="#about"
                                className="text-xs uppercase tracking-[0.15em] text-gray-600 hover:text-gray-900 font-medium transition-colors"
                                onClick={() => setIsOpen(false)}
                            >
                                About
                            </Link>
                            <Link
                                href="#products"
                                className="text-xs uppercase tracking-[0.15em] text-gray-600 hover:text-gray-900 font-medium transition-colors"
                                onClick={() => setIsOpen(false)}
                            >
                                Products
                            </Link>
                            <Link
                                href="#services"
                                className="text-xs uppercase tracking-[0.15em] text-gray-600 hover:text-gray-900 font-medium transition-colors"
                                onClick={() => setIsOpen(false)}
                            >
                                Services
                            </Link>
                            <Link
                                href="#contact"
                                className="px-8 py-3 bg-gray-900 text-white text-xs uppercase tracking-[0.15em] font-medium hover:bg-black transition-all duration-300 inline-block text-center w-fit"
                                onClick={() => setIsOpen(false)}
                            >
                                Contact
                            </Link>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
}
