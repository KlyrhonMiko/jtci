"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { X, ArrowRight, ZoomIn } from "lucide-react";

const galleryItems = [
    {
        src: "/images/gallery-office.png",
        alt: "Premium carpet in modern office",
        label: "Corporate Office",
        category: "Commercial",
        featured: true, // spans 2 rows on the left
    },
    {
        src: "/images/gallery-hotel.png",
        alt: "Luxury hotel lobby carpet",
        label: "Hotel Lobby",
        category: "Hospitality",
        featured: false,
    },
    {
        src: "/images/gallery-residential.png",
        alt: "Elegant residential carpet",
        label: "Luxury Residence",
        category: "Residential",
        featured: false,
    },
    {
        src: "/images/gallery-conference.png",
        alt: "Conference room carpet installation",
        label: "Conference Room",
        category: "Commercial",
        featured: false,
    },
    {
        src: "/images/product-broadloom.png",
        alt: "Broadloom carpet texture",
        label: "Broadloom Detail",
        category: "Product",
        featured: false,
    },
    {
        src: "/images/product-modular.png",
        alt: "Modular carpet tiles pattern",
        label: "Modular Tiles",
        category: "Product",
        featured: false,
    },
];

const categories = ["All", "Commercial", "Hospitality", "Residential", "Product"];

export default function GallerySection() {
    const [visible, setVisible] = useState(false);
    const [lightbox, setLightbox] = useState<number | null>(null);
    const [activeCategory, setActiveCategory] = useState("All");
    const sectionRef = useRef<HTMLElement>(null);

    const filtered = activeCategory === "All"
        ? galleryItems
        : galleryItems.filter((item) => item.category === activeCategory);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) setVisible(true); },
            { threshold: 0.05 }
        );
        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        const handleKey = (e: KeyboardEvent) => {
            if (e.key === "Escape") setLightbox(null);
        };
        window.addEventListener("keydown", handleKey);
        return () => window.removeEventListener("keydown", handleKey);
    }, []);

    const lightboxItem = lightbox !== null ? galleryItems.find((_, i) => i === lightbox) : null;

    return (
        <section
            id="gallery"
            ref={sectionRef}
            className="relative bg-[#fff9f6] overflow-hidden"
        >
            {/* Top rule */}
            <div className="h-px w-full bg-gradient-to-r from-transparent via-[#c4aa96] to-transparent" />

            <div className="mx-auto max-w-7xl px-8 lg:px-16 pt-24 pb-10">
                {/* ── Header ── */}
                <div
                    className={`flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-12 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
                >
                    <div>
                        <div className="mb-6 flex items-center gap-3">
                            <span className="h-px w-8 bg-[#9c6f4a]" />
                            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#9c6f4a]">
                                Portfolio
                            </span>
                        </div>
                        <h2 className="font-[family-name:var(--font-playfair)] text-4xl font-bold leading-[1.15] tracking-tight text-[#3d2e28] lg:text-5xl">
                            Our{" "}
                            <span
                                style={{
                                    background: "linear-gradient(110deg, #9c6f4a 0%, #654128 100%)",
                                    WebkitBackgroundClip: "text",
                                    WebkitTextFillColor: "transparent",
                                    backgroundClip: "text",
                                }}
                            >
                                Gallery
                            </span>
                        </h2>
                    </div>
                    <p className="max-w-sm text-[15px] leading-relaxed text-[#8a7565] lg:text-right">
                        Completed projects across commercial, hospitality, and residential environments.
                    </p>
                </div>

                {/* ── Category Filters ── */}
                <div
                    className={`flex flex-wrap gap-2 mb-10 transition-all duration-700 delay-100 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
                >
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            className={`px-5 py-2 text-[11px] font-bold uppercase tracking-[0.18em] transition-all duration-300 border ${activeCategory === cat
                                    ? "bg-[#654128] border-[#654128] text-white"
                                    : "bg-transparent border-[#dfccbd] text-[#8a7565] hover:border-[#9c6f4a] hover:text-[#654128]"
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Divider */}
                <div className="mb-10 h-px bg-[#dfccbd]" />
            </div>

            {/* ── Gallery Grid ── */}
            <div className="mx-auto max-w-7xl px-8 lg:px-16 pb-16">
                <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-[260px]">
                    {filtered.map((item, i) => {
                        const isFeatured = i === 0 && activeCategory === "All";
                        const originalIndex = galleryItems.indexOf(item);
                        return (
                            <button
                                key={item.label}
                                id={`gallery-item-${i}`}
                                className={`group relative overflow-hidden cursor-pointer bg-[#dfccbd] transition-all duration-500 ${isFeatured ? "row-span-2 col-span-1" : ""
                                    } ${visible ? "opacity-100" : "opacity-0"}`}
                                style={{ transitionDelay: `${i * 80}ms` }}
                                onClick={() => setLightbox(originalIndex)}
                                aria-label={`View ${item.label}`}
                            >
                                <Image
                                    src={item.src}
                                    alt={item.alt}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                />

                                {/* Permanent dark base at bottom */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                                {/* Hover overlay */}
                                <div className="absolute inset-0 bg-[#3d2e28]/40 opacity-0 transition-opacity duration-400 group-hover:opacity-100" />

                                {/* Category tag — always visible */}
                                <div className="absolute top-4 left-4">
                                    <span className="inline-block bg-[#654128]/75 px-3 py-1 text-[9px] font-bold uppercase tracking-[0.2em] text-[#dfccbd] backdrop-blur-sm">
                                        {item.category}
                                    </span>
                                </div>

                                {/* Zoom icon on hover */}
                                <div className="absolute top-4 right-4 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:scale-100 scale-90">
                                    <div className="flex h-8 w-8 items-center justify-center bg-white/10 backdrop-blur-sm border border-white/20">
                                        <ZoomIn className="h-4 w-4 text-white" />
                                    </div>
                                </div>

                                {/* Label — slides up on hover */}
                                <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-2 transition-all duration-400 group-hover:translate-y-0">
                                    <p className="text-base font-bold text-white leading-tight font-[family-name:var(--font-playfair)]">
                                        {item.label}
                                    </p>
                                </div>
                            </button>
                        );
                    })}
                </div>
            </div>

            {/* ── Bottom CTA ── */}
            <div className="mx-auto max-w-7xl px-8 lg:px-16 pb-24">
                <div
                    className={`flex flex-col sm:flex-row items-center justify-between gap-6 border-t border-[#dfccbd] pt-10 transition-all duration-700 delay-500 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
                >
                    <p className="text-sm text-[#8a7565]">
                        Interested in working with us?{" "}
                        <span className="font-semibold text-[#654128]">Let&apos;s discuss your project.</span>
                    </p>
                    <a
                        href="#contact"
                        className="group inline-flex items-center gap-2 bg-[#654128] px-8 py-4 text-xs font-bold uppercase tracking-[0.18em] text-white transition-all duration-300 hover:bg-[#9c6f4a] hover:gap-3 hover:shadow-xl hover:shadow-[#9c6f4a]/20"
                    >
                        Start a Project
                        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </a>
                </div>
            </div>

            {/* Bottom rule */}
            <div className="h-px w-full bg-gradient-to-r from-transparent via-[#c4aa96] to-transparent" />

            {/* ── Lightbox ── */}
            {lightboxItem && (
                <div
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 animate-fade-in"
                    onClick={() => setLightbox(null)}
                >
                    {/* Close */}
                    <button
                        className="absolute top-6 right-6 flex h-10 w-10 items-center justify-center border border-white/20 bg-white/10 text-white transition-colors hover:bg-white/20"
                        onClick={() => setLightbox(null)}
                        aria-label="Close lightbox"
                    >
                        <X className="h-5 w-5" />
                    </button>

                    <div
                        className="relative max-h-[85vh] max-w-5xl w-full overflow-hidden animate-scale-in"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <Image
                            src={lightboxItem.src}
                            alt={lightboxItem.alt}
                            width={1200}
                            height={800}
                            className="h-full w-full object-contain"
                        />
                        {/* Caption bar */}
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                            <span className="text-[10px] font-bold tracking-[0.2em] text-[#a69183] uppercase">
                                {lightboxItem.category}
                            </span>
                            <p className="mt-1 text-xl font-bold text-white font-[family-name:var(--font-playfair)]">
                                {lightboxItem.label}
                            </p>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}
