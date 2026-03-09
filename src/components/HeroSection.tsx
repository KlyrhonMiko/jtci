"use client";

import Image from "next/image";
import { ArrowRight, ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";

const stats = [
    { value: "10+", label: "Years of Excellence" },
    { value: "500+", label: "Projects Completed" },
    { value: "200+", label: "Happy Clients" },
    { value: "100%", label: "Quality Assured" },
];

const backgroundImages = [
    "/images/hero.png",
    "/images/gallery-conference.png",
    "/images/gallery-hotel.png",
    "/images/gallery-office.png",
    "/images/gallery-residential.png",
];

export default function HeroSection() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [prevImageIndex, setPrevImageIndex] = useState(-1);

    useEffect(() => {
        const interval = setInterval(() => {
            setPrevImageIndex(currentImageIndex);
            setCurrentImageIndex((prev) => (prev + 1) % backgroundImages.length);
        }, 5000); // Change image every 5 seconds

        return () => clearInterval(interval);
    }, [currentImageIndex]);

    return (
        <section
            id="home"
            className="relative flex min-h-[100dvh] items-end overflow-hidden"
        >
            {/* Background Image Slideshow */}
            {backgroundImages.map((src, index) => {
                const isActive = index === currentImageIndex;
                const isPrevious = index === prevImageIndex;

                return (
                    <div
                        key={src}
                        className={`absolute inset-0 transition-opacity duration-2000 ease-in-out ${isActive ? "opacity-100 z-[1]" : "opacity-0 z-0"
                            }`}
                    >
                        <Image
                            src={src}
                            alt={`Interior Design ${index + 1}`}
                            fill
                            className={`object-cover object-center ${isActive || isPrevious ? "animate-ken-burns" : ""
                                }`}
                            priority={index === 0}
                            quality={90}
                        />
                    </div>
                );
            })}

            {/* Layered overlay — heavier on the left for text legibility */}
            <div className="absolute inset-0 z-[1] bg-gradient-to-r from-black/85 via-black/55 to-black/10" />
            <div className="absolute inset-0 z-[1] bg-gradient-to-t from-black/70 via-transparent to-black/20" />

            {/* Subtle brand-tinted accent glow */}
            <div className="absolute bottom-0 left-0 z-[1] h-[40%] w-[50%] bg-[#9c6f4a]/10 blur-3xl pointer-events-none" />

            {/* Main Content */}
            <div className="relative z-10 w-full pb-0 mt-24 lg:mt-0">
                <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-16 pb-6 pt-24 lg:pt-32">

                    {/* Pre-heading label */}
                    <div
                        className="mb-6 inline-flex items-center gap-3 animate-fade-in-up"
                        style={{ animationFillMode: "both" }}
                    >
                        <span className="h-px w-8 bg-[#9c6f4a]" />
                        <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#a69183]">
                            Premium Flooring & Interiors
                        </span>
                    </div>

                    {/* Main Heading */}
                    <h1
                        className="mb-4 sm:mb-6 max-w-3xl font-[family-name:var(--font-playfair)] text-4xl font-bold leading-[1.15] tracking-tight text-white sm:text-5xl lg:text-7xl animate-fade-in-up"
                        style={{ animationDelay: "100ms", animationFillMode: "both" }}
                    >
                        Elevating Spaces
                        <br />
                        with{" "}
                        <span
                            style={{
                                background: "linear-gradient(110deg, #ffffff 0%, #dfccbd 50%, #a69183 100%)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                                backgroundClip: "text",
                            }}
                        >
                            Timeless Craft
                        </span>
                    </h1>

                    {/* Subheading */}
                    <p
                        className="mb-6 sm:mb-8 max-w-xl text-sm leading-relaxed text-white/70 sm:text-lg animate-fade-in-up"
                        style={{ animationDelay: "220ms", animationFillMode: "both" }}
                    >
                        JTCICARPET Gallery Corporation delivers premium broadloom carpets,
                        modular carpet tiles, window treatments, and bespoke bathroom
                        aesthetics — tailored to transform every environment.
                    </p>

                    {/* CTA Buttons */}
                    <div
                        className="flex flex-col sm:flex-row flex-wrap items-start sm:items-center gap-3 sm:gap-4 animate-fade-in-up"
                        style={{ animationDelay: "340ms", animationFillMode: "both" }}
                    >
                        <a
                            href="#products"
                            className="group inline-flex items-center gap-2 rounded-none bg-[#9c6f4a] px-8 py-4 text-xs font-bold uppercase tracking-[0.18em] text-white transition-all duration-300 hover:bg-[#654128] hover:gap-3 hover:shadow-2xl hover:shadow-[#9c6f4a]/30"
                        >
                            Explore Our Products
                            <ArrowRight className="h-4 w-4 transition-all duration-300 group-hover:translate-x-1" />
                        </a>
                        <a
                            href="#about"
                            className="inline-flex items-center gap-2 rounded-none border border-white/25 px-8 py-4 text-xs font-bold uppercase tracking-[0.18em] text-white/80 transition-all duration-300 hover:border-[#9c6f4a] hover:text-white hover:bg-white/5"
                        >
                            Learn More
                        </a>
                    </div>

                    {/* Stats Bar */}
                    <div
                        className="mt-8 lg:mt-10 grid grid-cols-2 md:grid-cols-4 gap-y-6 gap-x-4 sm:gap-x-0 border-t border-white/10 pt-6 animate-fade-in-up"
                        style={{ animationDelay: "500ms", animationFillMode: "both" }}
                    >
                        {stats.map((stat, i) => (
                            <div
                                key={stat.label}
                                className="flex flex-col items-start pr-2 sm:pr-8 lg:pr-10 sm:mr-8 lg:mr-10 md:last:pr-0 md:last:mr-0 last:pr-0 last:mr-0"
                                style={{
                                    borderRight: i !== 1 && i !== stats.length - 1 
                                        ? "1px solid rgba(255,255,255,0.12)" 
                                        : undefined,
                                }}
                            >
                                <div>
                                    <p className="text-2xl sm:text-3xl font-bold text-white font-[family-name:var(--font-playfair)] leading-none">
                                        {stat.value}
                                    </p>
                                    <p className="mt-1 sm:mt-2 text-[9px] sm:text-[10px] font-semibold uppercase tracking-[0.15em] sm:tracking-[0.2em] text-[#a69183]">
                                        {stat.label}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="border-t border-white/8 bg-black/25 backdrop-blur-sm">
                    <div className="mx-auto max-w-7xl px-8 lg:px-16 py-4 flex items-center justify-between gap-4">
                        <p className="text-[10px] uppercase tracking-[0.2em] text-white/35 font-medium">
                            Trusted by businesses across the region
                        </p>
                        <button
                            onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
                            className="flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-white/40 hover:text-[#a69183] transition-colors duration-200"
                        >
                            Scroll to explore
                            <ChevronDown className="h-3.5 w-3.5 animate-float" />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
