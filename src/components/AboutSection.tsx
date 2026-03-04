"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { ArrowRight, CheckCircle } from "lucide-react";

const stats = [
    { value: 10, suffix: "+", label: "Years of Excellence" },
    { value: 500, suffix: "+", label: "Projects Delivered" },
    { value: 200, suffix: "+", label: "Satisfied Clients" },
];

const pillars = [
    "Premium broadloom & carpet tiles",
    "Custom window treatments",
    "Bathroom aesthetics & fittings",
    "End-to-end project management",
];

function AnimatedCounter({ target, suffix }: { target: number; suffix: string }) {
    const [count, setCount] = useState(0);
    const ref = useRef<HTMLSpanElement>(null);
    const hasAnimated = useRef(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasAnimated.current) {
                    hasAnimated.current = true;
                    const duration = 2000;
                    const startTime = performance.now();
                    const animate = (currentTime: number) => {
                        const elapsed = currentTime - startTime;
                        const progress = Math.min(elapsed / duration, 1);
                        const eased = 1 - Math.pow(1 - progress, 3);
                        setCount(Math.floor(eased * target));
                        if (progress < 1) requestAnimationFrame(animate);
                    };
                    requestAnimationFrame(animate);
                }
            },
            { threshold: 0.5 }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, [target]);

    return (
        <span ref={ref}>
            {count}
            {suffix}
        </span>
    );
}

export default function AboutSection() {
    const [visible, setVisible] = useState(false);
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) setVisible(true); },
            { threshold: 0.1 }
        );
        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <section
            id="about"
            ref={sectionRef}
            className="relative bg-[#fff9f6] overflow-hidden"
        >
            {/* Top rule */}
            <div className="h-px w-full bg-gradient-to-r from-transparent via-[#c4aa96] to-transparent" />

            <div className="mx-auto max-w-7xl px-8 lg:px-16 py-24 lg:py-32">
                <div className="grid lg:grid-cols-2 gap-16 xl:gap-24 items-stretch">

                    {/* ── LEFT: Image column ── */}
                    <div
                        className={`relative transition-all duration-1000 ${visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}
                    >
                        {/* Main image */}
                        <div className="relative h-[540px] w-full overflow-hidden">
                            <Image
                                src="/images/about.png"
                                alt="JTCICARPET Workshop"
                                fill
                                className="object-cover"
                            />
                            {/* Subtle vignette */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />

                            {/* Corner bracket — top left */}
                            <div className="absolute top-0 left-0">
                                <div className="h-10 w-px bg-[#9c6f4a]" />
                                <div className="h-px w-10 bg-[#9c6f4a]" />
                            </div>
                            {/* Corner bracket — bottom right */}
                            <div className="absolute bottom-0 right-0 flex flex-col items-end">
                                <div className="h-px w-10 bg-[#9c6f4a]" />
                                <div className="h-10 w-px bg-[#9c6f4a]" />
                            </div>
                        </div>

                        {/* Stats bar — pinned below image */}
                        <div className="grid grid-cols-3 mt-0 border border-t-0 border-[#dfccbd]">
                            {stats.map((stat, i) => (
                                <div
                                    key={stat.label}
                                    className={`py-6 px-5 text-center bg-white ${i < stats.length - 1 ? "border-r border-[#dfccbd]" : ""}`}
                                >
                                    <p className="text-3xl font-bold text-[#654128] font-[family-name:var(--font-playfair)] leading-none">
                                        <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                                    </p>
                                    <p className="mt-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#9c6f4a]">
                                        {stat.label}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* ── RIGHT: Text column ── */}
                    <div
                        className={`flex flex-col justify-center transition-all duration-1000 delay-200 ${visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}
                    >
                        {/* Pre-label */}
                        <div className="mb-6 flex items-center gap-3">
                            <span className="h-px w-8 bg-[#9c6f4a]" />
                            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#9c6f4a]">
                                About Us
                            </span>
                        </div>

                        {/* Heading */}
                        <h2 className="mb-6 font-[family-name:var(--font-playfair)] text-4xl font-bold leading-[1.15] tracking-tight text-[#3d2e28] lg:text-5xl">
                            A Decade of Crafting{" "}
                            <span
                                style={{
                                    background: "linear-gradient(110deg, #9c6f4a 0%, #654128 100%)",
                                    WebkitBackgroundClip: "text",
                                    WebkitTextFillColor: "transparent",
                                    backgroundClip: "text",
                                }}
                            >
                                Exceptional Spaces
                            </span>
                        </h2>

                        {/* Divider */}
                        <div className="mb-8 h-px w-16 bg-[#9c6f4a]" />

                        {/* Body copy */}
                        <p className="mb-5 text-[15px] leading-relaxed text-[#8a7565]">
                            JTCICARPET Gallery Corporation is a premier provider of high-quality
                            flooring and interior solutions in the Philippines. With over a decade
                            of experience, we specialize in turning ordinary environments into
                            refined, functional spaces that reflect your brand and vision.
                        </p>
                        <p className="mb-10 text-[15px] leading-relaxed text-[#8a7565]">
                            Our commitment to craftsmanship and client satisfaction drives every
                            project — from scoping and design through to meticulous installation
                            and aftercare.
                        </p>

                        {/* Pillars list */}
                        <ul className="mb-10 grid grid-cols-1 gap-3 sm:grid-cols-2">
                            {pillars.map((item) => (
                                <li key={item} className="flex items-start gap-3">
                                    <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-[#9c6f4a]" />
                                    <span className="text-sm text-[#654128] font-medium">{item}</span>
                                </li>
                            ))}
                        </ul>

                        {/* CTA */}
                        <div className="flex flex-wrap gap-4">
                            <a
                                href="#products"
                                className="group inline-flex items-center gap-2 bg-[#654128] px-8 py-4 text-xs font-bold uppercase tracking-[0.18em] text-white transition-all duration-300 hover:bg-[#9c6f4a] hover:gap-3 hover:shadow-xl hover:shadow-[#9c6f4a]/20"
                            >
                                Our Products
                                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                            </a>
                            <a
                                href="#contact"
                                className="inline-flex items-center gap-2 border border-[#c4aa96] px-8 py-4 text-xs font-bold uppercase tracking-[0.18em] text-[#654128] transition-all duration-300 hover:border-[#9c6f4a] hover:bg-[#9c6f4a]/5"
                            >
                                Get in Touch
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom rule */}
            <div className="h-px w-full bg-gradient-to-r from-transparent via-[#c4aa96] to-transparent" />
        </section>
    );
}
