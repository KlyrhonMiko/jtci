"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ArrowRight, ArrowLeft, Home } from "lucide-react";
import TileCollectionsViewer from "@/components/TileCollectionsViewer";

const allProducts = [
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
    {
        number: "05",
        title: "Vinyl Flooring",
        tag: "Luxury Vinyl Tiles",
        description:
            "High-performance luxury vinyl planks and tiles that replicate natural wood and stone — waterproof, scratch-resistant, and effortlessly elegant.",
        image: "/images/product-vinyl.png",
    },
    {
        number: "06",
        title: "Wallcoverings",
        tag: "Walls & Panels",
        description:
            "Sophisticated wall panels and coverings in fabric, vinyl, and natural textures — designed to add depth, warmth, and character to any space.",
        image: "/images/product-wallcoverings.png",
    },
    {
        number: "07",
        title: "Hospitality Solutions",
        tag: "Hotels & Resorts",
        description:
            "End-to-end interior solutions for the hospitality industry — from custom carpets and drapes to coordinated room aesthetics at scale.",
        image: "/images/product-hospitality.png",
    },
    {
        number: "08",
        title: "Acoustic Panels",
        tag: "Sound Management",
        description:
            "Decorative acoustic wall and ceiling panels that absorb unwanted noise — ideal for offices, theatres, and conference spaces.",
        image: "/images/product-acoustic.png",
    },
    {
        number: "09",
        title: "Outdoor Carpets",
        tag: "Exterior Spaces",
        description:
            "Weather-resistant outdoor carpets and artificial turf for terraces, pool decks, and event areas — durable beauty for open-air settings.",
        image: "/images/product-outdoor.png",
    },
    {
        number: "10",
        title: "Rugs & Area Mats",
        tag: "Accent Décor",
        description:
            "Handcrafted and machine-made area rugs in an array of styles — from contemporary minimalism to classic oriental patterns.",
        image: "/images/product-rugs.png",
    },
    {
        number: "11",
        title: "Raised Access Flooring",
        tag: "Technical Spaces",
        description:
            "Modular raised floor systems for data centres, server rooms, and modern offices — providing clean cable management and airflow.",
        image: "/images/product-raised-floor.png",
    },
    {
        number: "12",
        title: "Custom Design Solutions",
        tag: "Bespoke Projects",
        description:
            "Fully tailored interior projects — from bespoke carpet patterns and colour-matched drapery to turnkey fit-out solutions for unique spaces.",
        image: "/images/product-custom.png",
    },
];

export default function ProductCatalogPage() {
    const [visible, setVisible] = useState(false);
    const heroRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const timer = setTimeout(() => setVisible(true), 100);
        return () => clearTimeout(timer);
    }, []);

    return (
        <main className="bg-[#fff9f6] min-h-screen">
            {/* Hero Banner */}
            <section
                ref={heroRef}
                className="relative bg-[#1e1510] overflow-hidden pt-32 pb-20 lg:pt-40 lg:pb-28"
            >
                {/* Background decorative elements */}
                <div className="absolute inset-0">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-[#9c6f4a]/5 rounded-full blur-3xl" />
                    <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#654128]/8 rounded-full blur-3xl" />
                </div>

                <div className="relative mx-auto max-w-7xl px-8 lg:px-16">
                    {/* Breadcrumb */}
                    <nav
                        className={`mb-10 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
                    >
                        <ol className="flex items-center gap-2 text-xs text-white/40">
                            <li>
                                <Link
                                    href="/"
                                    className="inline-flex items-center gap-1.5 transition-colors hover:text-[#dfccbd]"
                                >
                                    <Home className="h-3.5 w-3.5" />
                                    Home
                                </Link>
                            </li>
                            <li>
                                <span className="text-white/20">/</span>
                            </li>
                            <li>
                                <span className="font-semibold text-[#9c6f4a]">Products & Services</span>
                            </li>
                        </ol>
                    </nav>

                    <div
                        className={`flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 transition-all duration-700 delay-100 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
                    >
                        {/* Title */}
                        <div>
                            <div className="mb-6 flex items-center gap-3">
                                <span className="h-px w-8 bg-[#9c6f4a]" />
                                <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#9c6f4a]">
                                    Complete Catalog
                                </span>
                            </div>
                            <h1 className="font-[family-name:var(--font-playfair)] text-4xl font-bold leading-[1.15] tracking-tight text-white lg:text-5xl xl:text-6xl">
                                Our Products &{" "}
                                <span
                                    style={{
                                        background: "linear-gradient(110deg, #c4aa96 0%, #9c6f4a 100%)",
                                        WebkitBackgroundClip: "text",
                                        WebkitTextFillColor: "transparent",
                                        backgroundClip: "text",
                                    }}
                                >
                                    Services
                                </span>
                            </h1>
                        </div>

                        {/* Description */}
                        <p className="max-w-md text-[15px] leading-relaxed text-white/40 lg:text-right">
                            Explore our comprehensive range of premium flooring, wall, and
                            interior solutions — each designed to elevate residential and
                            commercial spaces with timeless quality.
                        </p>
                    </div>

                    {/* Back link */}
                    <div
                        className={`mt-10 transition-all duration-700 delay-200 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
                    >
                        <Link
                            href="/#products"
                            className="group inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#9c6f4a] transition-all duration-300 hover:text-[#dfccbd] hover:gap-3"
                        >
                            <ArrowLeft className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-x-1" />
                            Back to Home
                        </Link>
                    </div>
                </div>

                {/* Bottom gradient */}
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#9c6f4a]/40 to-transparent" />
            </section>

            {/* Product Count Bar */}
            <div className="border-b border-[#dfccbd]">
                <div className="mx-auto max-w-7xl px-8 lg:px-16 py-5 flex items-center justify-between">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#9c6f4a]">
                        {allProducts.length} Products & Services
                    </p>
                    <div className="h-px flex-1 mx-6 bg-[#dfccbd]" />
                    <p className="text-xs text-[#8a7565]">
                        Premium Interior Solutions
                    </p>
                </div>
            </div>

            {/* Product Grid */}
            <section className="mx-auto max-w-7xl px-8 lg:px-16 py-16 lg:py-24">
                <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
                    {allProducts.map((product, i) => (
                        <div
                            key={product.title}
                            className={`group relative flex flex-col overflow-hidden border border-[#dfccbd] bg-white transition-all duration-500 hover:border-[#9c6f4a]/40 hover:shadow-2xl hover:shadow-[#9c6f4a]/10 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                            style={{ transitionDelay: `${150 + i * 60}ms` }}
                        >
                            {/* Image */}
                            <div className="relative h-56 w-full overflow-hidden">
                                <Image
                                    src={product.image}
                                    alt={product.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                {/* Dark overlay */}
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
                                        href="/#contact"
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

                {/* Bottom CTA */}
                <div
                    className={`mt-14 flex flex-col sm:flex-row items-center justify-between gap-6 border-t border-[#dfccbd] pt-10 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
                    style={{ transitionDelay: "800ms" }}
                >
                    <p className="text-sm text-[#8a7565]">
                        Can&apos;t find what you&apos;re looking for?{" "}
                        <span className="font-semibold text-[#654128]">
                            We craft bespoke solutions for every project.
                        </span>
                    </p>
                    <div className="flex items-center gap-4">
                        <Link
                            href="/#products"
                            className="group inline-flex items-center gap-2 border border-[#9c6f4a] px-8 py-4 text-xs font-bold uppercase tracking-[0.18em] text-[#654128] transition-all duration-300 hover:bg-[#654128] hover:text-white hover:gap-3 hover:shadow-xl hover:shadow-[#9c6f4a]/20"
                        >
                            <ArrowLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" />
                            Back to Home
                        </Link>
                        <a
                            href="/#contact"
                            className="group inline-flex items-center gap-2 bg-[#654128] px-8 py-4 text-xs font-bold uppercase tracking-[0.18em] text-white transition-all duration-300 hover:bg-[#9c6f4a] hover:gap-3 hover:shadow-xl hover:shadow-[#9c6f4a]/20"
                        >
                            Request a Quote
                            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                        </a>
                    </div>
                </div>
            </section>

            {/* Premium Carpet Tile Collections Section */}
            <TileCollectionsViewer />

            {/* Bottom decorative rule */}
            <div className="h-px w-full bg-gradient-to-r from-transparent via-[#c4aa96] to-transparent" />
        </main>
    );
}
