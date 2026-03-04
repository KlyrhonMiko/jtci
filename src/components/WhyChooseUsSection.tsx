"use client";

import { useEffect, useRef, useState } from "react";
import { Shield, Gem, Wrench, BadgeDollarSign, Palette, Clock } from "lucide-react";
import { ArrowRight } from "lucide-react";

const features = [
    {
        number: "01",
        icon: Shield,
        title: "Quality Craftsmanship",
        description:
            "Every product is sourced from trusted manufacturers and meets the highest standards of durability and finish.",
    },
    {
        number: "02",
        icon: Palette,
        title: "Custom Solutions",
        description:
            "Tailored design concepts and curated palettes developed to match your unique vision and space requirements.",
    },
    {
        number: "03",
        icon: Wrench,
        title: "Expert Installation",
        description:
            "Our skilled installation crew ensures flawless execution with precision and attention to every detail.",
    },
    {
        number: "04",
        icon: BadgeDollarSign,
        title: "Competitive Pricing",
        description:
            "Premium quality at fair prices — exceptional value without compromising on materials or service.",
    },
    {
        number: "05",
        icon: Gem,
        title: "Premium Materials",
        description:
            "We use only the finest broadloom and modular fibers, ensuring lasting beauty and long-term performance.",
    },
    {
        number: "06",
        icon: Clock,
        title: "Timely Delivery",
        description:
            "We respect your schedule. Our streamlined process ensures on-time project completion, every time.",
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
            {/* Full-width dark panel */}
            <div className="bg-[#2a1f19] text-white">
                <div className="mx-auto max-w-7xl px-8 lg:px-16 py-24 lg:py-32">
                    <div className="grid lg:grid-cols-[1fr_1.6fr] gap-16 xl:gap-24">

                        {/* ── LEFT: Anchor column ── */}
                        <div
                            className={`flex flex-col justify-between transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
                        >
                            <div>
                                {/* Label */}
                                <div className="mb-6 flex items-center gap-3">
                                    <span className="h-px w-8 bg-[#9c6f4a]" />
                                    <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#9c6f4a]">
                                        Why Choose Us
                                    </span>
                                </div>

                                {/* Heading */}
                                <h2 className="mb-6 font-[family-name:var(--font-playfair)] text-4xl font-bold leading-[1.15] tracking-tight lg:text-5xl">
                                    The JTCICARPET{" "}
                                    <span
                                        style={{
                                            background: "linear-gradient(110deg, #dfccbd 0%, #9c6f4a 100%)",
                                            WebkitBackgroundClip: "text",
                                            WebkitTextFillColor: "transparent",
                                            backgroundClip: "text",
                                        }}
                                    >
                                        Advantage
                                    </span>
                                </h2>

                                {/* Divider */}
                                <div className="mb-8 h-px w-16 bg-[#9c6f4a]" />

                                {/* Body */}
                                <p className="text-[15px] leading-relaxed text-white/55">
                                    We combine quality, expertise, and dedication to deliver interior
                                    solutions that stand the test of time — and reflect the character
                                    of every space we touch.
                                </p>
                            </div>

                            {/* Bottom CTA */}
                            <a
                                href="#contact"
                                className="group mt-12 inline-flex w-fit items-center gap-2 border border-[#9c6f4a]/40 px-8 py-4 text-xs font-bold uppercase tracking-[0.18em] text-[#dfccbd] transition-all duration-300 hover:border-[#9c6f4a] hover:bg-[#9c6f4a]/10 hover:gap-3"
                            >
                                Get in Touch
                                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                            </a>
                        </div>

                        {/* ── RIGHT: Feature list ── */}
                        <div
                            className={`transition-all duration-700 delay-200 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
                        >
                            <div className="divide-y divide-white/8">
                                {features.map((feature, i) => (
                                    <div
                                        key={feature.title}
                                        className="group flex items-start gap-6 py-7 transition-all duration-300 hover:bg-white/[0.03] px-4 -mx-4"
                                        style={{ transitionDelay: `${i * 60}ms` }}
                                    >
                                        {/* Number */}
                                        <span className="mt-0.5 shrink-0 text-xs font-bold text-[#9c6f4a]/50 tracking-widest font-[family-name:var(--font-playfair)] w-6">
                                            {feature.number}
                                        </span>

                                        {/* Icon */}
                                        <div className="shrink-0 mt-0.5">
                                            <feature.icon className="h-5 w-5 text-[#9c6f4a] transition-colors duration-300 group-hover:text-[#dfccbd]" />
                                        </div>

                                        {/* Text */}
                                        <div className="flex-1 min-w-0">
                                            <h3 className="mb-2 text-[15px] font-bold text-white/90 leading-tight transition-colors duration-300 group-hover:text-white">
                                                {feature.title}
                                            </h3>
                                            <p className="text-[13px] leading-relaxed text-white/45 transition-colors duration-300 group-hover:text-white/60">
                                                {feature.description}
                                            </p>
                                        </div>

                                        {/* Hover arrow */}
                                        <ArrowRight className="h-4 w-4 shrink-0 text-[#9c6f4a]/0 mt-0.5 transition-all duration-300 group-hover:text-[#9c6f4a]/60 group-hover:translate-x-0" />
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}
