"use client";

import Image from "next/image";
import { ArrowRight, ChevronDown } from "lucide-react";

const stats = [
    { value: "10+", label: "Years of Excellence" },
    { value: "500+", label: "Projects Completed" },
    { value: "200+", label: "Happy Clients" },
    { value: "100%", label: "Quality Assured" },
];

export default function HeroSection() {
    return (
        <section
            id="home"
            className="relative flex h-screen items-end overflow-hidden"
        >
            {/* Background Image */}
            <Image
                src="/images/hero.png"
                alt="JTCICARPET Gallery Showroom"
                fill
                className="object-cover object-center"
                priority
                quality={90}
            />

            {/* Layered overlay — heavier on the left for text legibility */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-black/10" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20" />

            {/* Subtle brand-tinted accent glow */}
            <div className="absolute bottom-0 left-0 h-[40%] w-[50%] bg-[#9c6f4a]/10 blur-3xl pointer-events-none" />

            {/* Main Content */}
            <div className="relative z-10 w-full pb-0">
                <div className="mx-auto max-w-7xl px-8 lg:px-16 pb-6 pt-24">

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
                        className="mb-6 max-w-3xl font-[family-name:var(--font-playfair)] text-5xl font-bold leading-[1.1] tracking-tight text-white sm:text-6xl lg:text-7xl animate-fade-in-up"
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
                        className="mb-8 max-w-xl text-base leading-relaxed text-white/65 sm:text-lg animate-fade-in-up"
                        style={{ animationDelay: "220ms", animationFillMode: "both" }}
                    >
                        JTCICARPET Gallery Corporation delivers premium broadloom carpets,
                        modular carpet tiles, window treatments, and bespoke bathroom
                        aesthetics — tailored to transform every environment.
                    </p>

                    {/* CTA Buttons */}
                    <div
                        className="flex flex-wrap items-center gap-4 animate-fade-in-up"
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
                        className="mt-10 flex flex-wrap gap-x-0 gap-y-4 border-t border-white/10 pt-6 animate-fade-in-up"
                        style={{ animationDelay: "500ms", animationFillMode: "both" }}
                    >
                        {stats.map((stat, i) => (
                            <div
                                key={stat.label}
                                className="flex items-stretch pr-10 mr-10 last:pr-0 last:mr-0"
                                style={{
                                    borderRight: i < stats.length - 1 ? "1px solid rgba(255,255,255,0.12)" : "none",
                                }}
                            >
                                <div>
                                    <p className="text-3xl font-bold text-white font-[family-name:var(--font-playfair)] leading-none">
                                        {stat.value}
                                    </p>
                                    <p className="mt-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#a69183]">
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
