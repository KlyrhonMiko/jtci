"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";

const products = [
    {
        number: "01",
        title: "Broadloom Carpets",
        tag: "Residential & Commercial",
        description:
            "Premium wall-to-wall broadloom carpets in a curated palette of colors and textures — engineered for hotels, offices, and luxury residences.",
        image: "/images/product-broadloom.png",
    },
    {
        number: "02",
        title: "Modular Carpet Tiles",
        tag: "High-Traffic Spaces",
        description:
            "Versatile and durable carpet tiles designed for high-traffic commercial environments — easy to install, replace, and reconfigure.",
        image: "/images/product-modular.png",
    },
    {
        number: "03",
        title: "Window Treatments",
        tag: "Drapery & Blinds",
        description:
            "Elegant curtains, roller blinds, and custom drapes that complement your interior with precise light control, privacy, and refined style.",
        image: "/images/product-window.png",
    },
    {
        number: "04",
        title: "Bathroom Aesthetics",
        tag: "Fixtures & Finishes",
        description:
            "Transform bathrooms into spa-calibre retreats — curated fixtures, premium tiles, and end-to-end aesthetic design solutions.",
        image: "/images/product-bathroom.png",
    },
];

export default function ProductsSection() {
    const [visible, setVisible] = useState(false);
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) setVisible(true); },
            { threshold: 0.05 }
        );
        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <section
            id="products"
            ref={sectionRef}
            className="relative bg-[#fff9f6] overflow-hidden"
        >
            {/* Top rule */}
            <div className="h-px w-full bg-gradient-to-r from-transparent via-[#c4aa96] to-transparent" />

            {/* Section header */}
            <div className="mx-auto max-w-7xl px-8 lg:px-16 pt-24 pb-16">
                <div
                    className={`flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
                >
                    {/* Left — title */}
                    <div>
                        <div className="mb-6 flex items-center gap-3">
                            <span className="h-px w-8 bg-[#9c6f4a]" />
                            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#9c6f4a]">
                                Our Products
                            </span>
                        </div>
                        <h2 className="font-[family-name:var(--font-playfair)] text-4xl font-bold leading-[1.15] tracking-tight text-[#3d2e28] lg:text-5xl">
                            Products &amp;{" "}
                            <span
                                style={{
                                    background: "linear-gradient(110deg, #9c6f4a 0%, #654128 100%)",
                                    WebkitBackgroundClip: "text",
                                    WebkitTextFillColor: "transparent",
                                    backgroundClip: "text",
                                }}
                            >
                                Services
                            </span>
                        </h2>
                    </div>

                    {/* Right — descriptor */}
                    <p className="max-w-sm text-[15px] leading-relaxed text-[#8a7565] lg:text-right">
                        A comprehensive range of premium flooring and interior solutions,
                        designed to elevate every environment.
                    </p>
                </div>
                {/* Divider */}
                <div className="mt-10 h-px bg-[#dfccbd]" />
            </div>

            {/* Product grid */}
            <div className="mx-auto max-w-7xl px-8 lg:px-16 pb-24 lg:pb-32">
                <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
                    {products.map((product, i) => (
                        <div
                            key={product.title}
                            className={`group relative flex flex-col overflow-hidden border border-[#dfccbd] bg-white transition-all duration-500 hover:border-[#9c6f4a]/40 hover:shadow-2xl hover:shadow-[#9c6f4a]/10 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                            style={{ transitionDelay: `${i * 100}ms` }}
                        >
                            {/* Image */}
                            <div className="relative h-56 w-full overflow-hidden">
                                <Image
                                    src={product.image}
                                    alt={product.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                {/* Dark overlay — stronger at top for number legibility */}
                                <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/10" />

                                {/* Product number — top left */}
                                <div className="absolute top-4 left-4">
                                    <span className="text-4xl font-bold leading-none text-white/20 font-[family-name:var(--font-playfair)] select-none">
                                        {product.number}
                                    </span>
                                </div>

                                {/* Tag pill — bottom left */}
                                <div className="absolute bottom-4 left-4">
                                    <span className="inline-block bg-[#654128]/80 px-3 py-1 text-[9px] font-semibold uppercase tracking-[0.2em] text-[#dfccbd] backdrop-blur-sm">
                                        {product.tag}
                                    </span>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="flex flex-1 flex-col p-6">
                                <h3 className="mb-3 text-lg font-bold leading-tight text-[#3d2e28] font-[family-name:var(--font-playfair)] transition-colors duration-300 group-hover:text-[#9c6f4a]">
                                    {product.title}
                                </h3>
                                <p className="mb-6 flex-1 text-[13px] leading-relaxed text-[#8a7565]">
                                    {product.description}
                                </p>

                                {/* Ruled CTA */}
                                <div className="border-t border-[#dfccbd] pt-4">
                                    <a
                                        href="#contact"
                                        className="group/link inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-[#9c6f4a] transition-all duration-300 hover:gap-3 hover:text-[#654128]"
                                    >
                                        Enquire Now
                                        <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover/link:translate-x-1" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom CTA row */}
                <div
                    className={`mt-14 flex flex-col sm:flex-row items-center justify-between gap-6 border-t border-[#dfccbd] pt-10 transition-all duration-700 delay-500 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
                >
                    <p className="text-sm text-[#8a7565]">
                        Looking for a custom solution?{" "}
                        <span className="font-semibold text-[#654128]">We specialise in bespoke projects.</span>
                    </p>
                    <a
                        href="#contact"
                        className="group inline-flex items-center gap-2 bg-[#654128] px-8 py-4 text-xs font-bold uppercase tracking-[0.18em] text-white transition-all duration-300 hover:bg-[#9c6f4a] hover:gap-3 hover:shadow-xl hover:shadow-[#9c6f4a]/20"
                    >
                        Request a Quote
                        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </a>
                </div>
            </div>

            {/* Bottom rule */}
            <div className="h-px w-full bg-gradient-to-r from-transparent via-[#c4aa96] to-transparent" />
        </section>
    );
}
