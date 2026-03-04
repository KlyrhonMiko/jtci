"use client";

import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";

const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#products", label: "Products" },
    { href: "#why-us", label: "Why Us" },
    { href: "#gallery", label: "Gallery" },
    { href: "#contact", label: "Contact" },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            id="navbar"
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
                ? "bg-white/95 backdrop-blur-md border-b border-[#dfccbd] py-3 shadow-md"
                : "bg-transparent py-5"
                }`}
        >
            <div className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-8">
                {/* Logo */}
                <a href="#home" className="flex items-center gap-3 group">
                    <div className="flex h-10 w-10 items-center justify-center rounded-none bg-[#9c6f4a] transition-colors group-hover:bg-[#654128]">
                        <span className="text-lg font-[family-name:var(--font-playfair)] font-bold text-white">JG</span>
                    </div>
                    <div className="flex flex-col">
                        <span className={`text-sm font-bold tracking-[0.18em] uppercase transition-colors ${scrolled ? 'text-[#3d2e28] group-hover:text-[#9c6f4a]' : 'text-white'}`}>
                            JTCICARPET
                        </span>
                        <span className={`text-[10px] tracking-[0.2em] font-medium uppercase transition-colors ${scrolled ? 'text-[#9c6f4a]' : 'text-white/70'}`}>
                            Gallery Corporation
                        </span>
                    </div>
                </a>

                {/* Desktop Links */}
                <div className="hidden items-center gap-2 lg:flex">
                    {navLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            className={`relative px-4 py-2 text-xs font-bold uppercase tracking-[0.1em] transition-colors group ${scrolled ? 'text-[#3d2e28] hover:text-[#9c6f4a]' : 'text-white/80 hover:text-white'}`}
                        >
                            {link.label}
                            <span className={`absolute bottom-0 left-1/2 h-0.5 w-0 transition-all duration-300 -translate-x-1/2 group-hover:w-full ${scrolled ? 'bg-[#9c6f4a]' : 'bg-white'}`} />
                        </a>
                    ))}
                </div>

                {/* CTA */}
                <a
                    href="#contact"
                    className="hidden items-center gap-2 rounded-none bg-[#9c6f4a] px-6 py-3 text-xs font-bold uppercase tracking-[0.18em] text-white transition-all duration-300 hover:bg-[#654128] hover:gap-3 hover:shadow-xl hover:shadow-[#9c6f4a]/20 lg:flex group"
                >
                    <Phone className="h-4 w-4 transition-transform duration-300 group-hover:rotate-12" />
                    Get a Quote
                </a>

                {/* Mobile Toggle */}
                <button
                    id="mobile-menu-toggle"
                    className={`lg:hidden p-2 ${scrolled ? 'text-gray-800' : 'text-white'}`}
                    onClick={() => setMobileOpen(!mobileOpen)}
                    aria-label="Toggle menu"
                >
                    {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </button>
            </div>

            {/* Mobile Menu */}
            <div
                className={`lg:hidden transition-all duration-300 overflow-hidden ${mobileOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                    }`}
            >
                <div className="bg-white/95 backdrop-blur-md border border-[#dfccbd] mx-4 mt-3 rounded-none p-6 space-y-1 shadow-lg">
                    {navLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            className="block px-4 py-3 text-sm font-bold uppercase tracking-[0.1em] text-[#3d2e28] transition-all hover:bg-[#9c6f4a]/5 hover:text-[#9c6f4a]"
                            onClick={() => setMobileOpen(false)}
                        >
                            {link.label}
                        </a>
                    ))}
                    <a
                        href="#contact"
                        className="mt-6 flex items-center justify-center gap-2 rounded-none bg-[#9c6f4a] px-5 py-4 text-xs font-bold uppercase tracking-[0.18em] text-white transition-all hover:bg-[#654128]"
                        onClick={() => setMobileOpen(false)}
                    >
                        <Phone className="h-4 w-4" />
                        Get a Quote
                    </a>
                </div>
            </div>
        </nav>
    );
}
