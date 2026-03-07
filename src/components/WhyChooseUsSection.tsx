"use client";

import { useEffect, useRef, useState } from "react";
import { Shield, Gem, Wrench, BadgeDollarSign, Palette, Clock, ArrowRight } from "lucide-react";

const features = [
    {
        number: "01",
        icon: Shield,
        title: "Quality Craftsmanship",
        description:
            "Sourced from trusted manufacturers, meeting the highest standards of durability and finish.",
    },
    {
        number: "02",
        icon: Palette,
        title: "Custom Solutions",
        description:
            "Tailored design concepts and curated palettes to match your unique vision and space.",
    },
    {
        number: "03",
        icon: Wrench,
        title: "Expert Installation",
        description:
            "Flawless execution by our skilled crew, with precision and attention to every detail.",
    },
    {
        number: "04",
        icon: BadgeDollarSign,
        title: "Competitive Pricing",
        description:
            "Premium quality at fair prices — exceptional value without compromise.",
    },
    {
        number: "05",
        icon: Gem,
        title: "Premium Materials",
        description:
            "Only the finest broadloom and modular fibers for lasting beauty and performance.",
    },
    {
        number: "06",
        icon: Clock,
        title: "Timely Delivery",
        description:
            "Streamlined processes that ensure on-time project completion, every time.",
    },
];

export default function WhyChooseUsSection() {
    const [visible, setVisible] = useState(false);
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) setVisible(true); },
            { threshold: 0.08 }
        );
        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <section
            id="why-us"
            ref={sectionRef}
            className="relative overflow-hidden"
        >
            <div
                className="relative text-white"
                style={{ background: "linear-gradient(165deg, #1a1410 0%, #231a14 40%, #1e1612 100%)" }}
            >
                {/* Subtle decorative corner accent */}
                <div
                    className="pointer-events-none absolute top-0 right-0 w-72 h-72 opacity-[0.03]"
                    style={{
                        background: "radial-gradient(circle at top right, #9c6f4a 0%, transparent 70%)",
                    }}
                />

                <div className="mx-auto max-w-7xl px-8 lg:px-16 py-20 lg:py-24">

                    {/* ── Two-column header ── */}
                    <div
                        className={`grid lg:grid-cols-[1fr_1fr] gap-8 lg:gap-16 items-end mb-14 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
                    >
                        {/* Left — heading */}
                        <div>
                            <div className="mb-4 flex items-center gap-3">
                                <span className="h-px w-8 bg-[#9c6f4a]" />
                                <span className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#9c6f4a]">
                                    Why Choose Us
                                </span>
                            </div>

                            <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-bold leading-[1.15] tracking-tight lg:text-[2.5rem]">
                                Crafting Spaces with{" "}
                                <span
                                    style={{
                                        background: "linear-gradient(110deg, #dfccbd 0%, #9c6f4a 100%)",
                                        WebkitBackgroundClip: "text",
                                        WebkitTextFillColor: "transparent",
                                        backgroundClip: "text",
                                    }}
                                >
                                    Purpose & Precision
                                </span>
                            </h2>
                        </div>

                        {/* Right — subtext */}
                        <div className="lg:text-right">
                            <p className="max-w-sm lg:ml-auto text-[14px] leading-[1.8] text-white/45">
                                We blend quality materials, expert craftsmanship, and thoughtful design to create interiors that are as functional as they are beautiful.
                            </p>
                        </div>
                    </div>

                    {/* ── Thin accent divider ── */}
                    <div className="relative mb-14">
                        <div className="h-px w-full bg-white/[0.06]" />
                        <div className="absolute left-0 top-0 h-px w-24 bg-gradient-to-r from-[#9c6f4a] to-transparent" />
                    </div>

                    {/* ── Feature Grid ── */}
                    <div
                        className={`grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/[0.04] rounded-2xl overflow-hidden transition-all duration-700 delay-200 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
                    >
                        {features.map((feature, i) => (
                            <div
                                key={feature.title}
                                className="group relative bg-[#1a1410] p-8 lg:p-9 transition-all duration-500 hover:bg-[#211a14]"
                                style={{ transitionDelay: `${i * 70}ms` }}
                            >
                                {/* Accent top border on hover */}
                                <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-[#9c6f4a] to-[#dfccbd] scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100" />

                                {/* Number + Icon row */}
                                <div className="flex items-center justify-between mb-6">
                                    <div className="flex h-11 w-11 items-center justify-center rounded-lg border border-white/[0.06] bg-white/[0.02] transition-all duration-400 group-hover:border-[#9c6f4a]/25 group-hover:bg-[#9c6f4a]/[0.08]">
                                        <feature.icon className="h-5 w-5 text-[#9c6f4a]/70 transition-colors duration-300 group-hover:text-[#dfccbd]" strokeWidth={1.5} />
                                    </div>
                                    <span className="font-[family-name:var(--font-playfair)] text-[32px] font-bold leading-none text-white/[0.04] transition-colors duration-400 group-hover:text-[#9c6f4a]/[0.1] select-none">
                                        {feature.number}
                                    </span>
                                </div>

                                {/* Title */}
                                <h3 className="mb-2.5 text-[15px] font-semibold tracking-wide text-white/85 transition-colors duration-300 group-hover:text-white">
                                    {feature.title}
                                </h3>

                                {/* Description */}
                                <p className="text-[13px] leading-[1.75] text-white/35 transition-colors duration-300 group-hover:text-white/50">
                                    {feature.description}
                                </p>
                            </div>
                        ))}
                    </div>

                    {/* ── CTA ── */}
                    <div
                        className={`mt-14 flex justify-center transition-all duration-700 delay-400 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
                    >
                        <a
                            href="#contact"
                            className="group inline-flex items-center gap-2.5 border border-[#9c6f4a]/25 px-9 py-3.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#dfccbd] transition-all duration-300 hover:border-[#9c6f4a]/50 hover:bg-[#9c6f4a]/[0.06] hover:gap-3.5"
                        >
                            Get in Touch
                            <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
