"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import { Search, X, ArrowLeft } from "lucide-react";
import tilesData from "@/data/tiles.json";

type TileCollection = {
    name: string;
    images: string[];
};

export default function TileCollectionsViewer() {
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedCollection, setSelectedCollection] = useState<TileCollection | null>(null);
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    const filteredCollections = useMemo(() => {
        if (!searchQuery.trim()) return tilesData as TileCollection[];
        return (tilesData as TileCollection[]).filter((collection) =>
            collection.name.toLowerCase().includes(searchQuery.toLowerCase())
        );
    }, [searchQuery]);

    return (
        <section className="bg-[#f9f5f0] border-t border-[#dfccbd] py-16 lg:py-24">
            <div className="mx-auto max-w-7xl px-8 lg:px-16">

                {/* Section Header */}
                <div className="mb-14 md:flex md:items-end md:justify-between text-center md:text-left">
                    <div className="max-w-2xl">
                        <div className="mb-4 flex items-center justify-center md:justify-start gap-3">
                            <span className="h-px w-8 bg-[#9c6f4a]" />
                            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#9c6f4a]">
                                Premium Collections
                            </span>
                        </div>
                        <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-bold leading-tight text-[#3d2e28] lg:text-4xl xl:text-5xl">
                            Carpet Tile <span className="italic font-normal text-[#8a7565]">Series</span>
                        </h2>
                        <p className="mt-4 text-[15px] leading-relaxed text-[#8a7565]">
                            Browse our extensive library of over 60 carpet tile collections,
                            featuring a wide array of patterns, textures, and bespoke colors.
                        </p>
                    </div>

                    {/* Search Bar */}
                    <div className="mt-8 md:mt-0 max-w-sm w-full relative">
                        <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                            <Search className="h-4 w-4 text-[#9c6f4a]" />
                        </div>
                        <input
                            type="text"
                            placeholder="Search collections... (e.g. 'Accent')"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full bg-white border border-[#dfccbd] py-3 pl-11 pr-4 text-sm text-[#3d2e28] placeholder-[#9c6f4a]/50 focus:outline-none focus:border-[#9c6f4a] focus:ring-1 focus:ring-[#9c6f4a] transition-all rounded-sm shadow-sm"
                        />
                    </div>
                </div>

                {!selectedCollection ? (
                    /* Collections Grid */
                    <>
                        {/* Results count */}
                        <div className="mb-6 flex items-center gap-4">
                            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#9c6f4a]">
                                {filteredCollections.length} Collections
                            </p>
                            <div className="h-px flex-1 bg-[#dfccbd]" />
                        </div>

                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 lg:gap-5">
                            {filteredCollections.map((collection, i) => (
                                <button
                                    key={collection.name}
                                    onClick={() => setSelectedCollection(collection)}
                                    className="group relative overflow-hidden rounded-lg shadow-sm hover:shadow-2xl hover:shadow-[#9c6f4a]/15 transition-all duration-500 hover:-translate-y-1.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#9c6f4a]"
                                    style={{ animationDelay: `${i * 30}ms` }}
                                >
                                    {/* Image */}
                                    <div className="relative w-full aspect-[4/5] overflow-hidden bg-[#e8ddd3]">
                                        <Image
                                            src={collection.images[0]}
                                            alt={collection.name}
                                            fill
                                            className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                                            sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, (max-width: 1280px) 20vw, 16vw"
                                            quality={65}
                                        />

                                        {/* Permanent bottom gradient for text legibility */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

                                        {/* Hover overlay */}
                                        <div className="absolute inset-0 bg-[#3d2e28]/0 group-hover:bg-[#3d2e28]/20 transition-colors duration-500" />

                                        {/* Top-right style count pill */}
                                        <div className="absolute top-2.5 right-2.5">
                                            <span className="inline-block bg-white/85 backdrop-blur-md px-2 py-0.5 rounded-full text-[9px] font-bold tracking-wider text-[#654128] uppercase shadow-sm">
                                                {collection.images.length}
                                            </span>
                                        </div>

                                        {/* Bottom text overlay */}
                                        <div className="absolute bottom-0 left-0 right-0 p-3.5">
                                            <h3 className="text-[13px] font-bold uppercase tracking-[0.08em] text-white leading-tight drop-shadow-sm">
                                                {collection.name}
                                            </h3>
                                            <p className="text-[9px] font-medium text-white/60 uppercase tracking-[0.15em] mt-1">
                                                {collection.images.length} {collection.images.length === 1 ? 'Style' : 'Styles'}
                                            </p>
                                        </div>

                                        {/* Hover arrow indicator */}
                                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                            <div className="w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-lg transform scale-75 group-hover:scale-100 transition-transform duration-300">
                                                <svg className="w-4 h-4 text-[#654128]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                </button>
                            ))}
                        </div>
                    </>
                ) : (
                    /* Selected Collection Gallery */
                    <div className="animate-in fade-in zoom-in-95 duration-500">
                        {/* Collection Header */}
                        <div className="flex items-center justify-between mb-8 pb-4 border-b border-[#dfccbd]">
                            <h3 className="text-2xl font-[family-name:var(--font-playfair)] font-bold text-[#3d2e28] uppercase tracking-wide flex items-center gap-3">
                                {selectedCollection.name}
                                <span className="text-xs font-sans tracking-[0.2em] text-[#9c6f4a] font-normal bg-[#dfccbd]/30 px-3 py-1 rounded-full">
                                    {selectedCollection.images.length} STYLES
                                </span>
                            </h3>
                            <button
                                onClick={() => setSelectedCollection(null)}
                                className="text-xs font-semibold uppercase tracking-[0.15em] text-[#8a7565] hover:text-[#9c6f4a] transition-colors flex items-center gap-2"
                            >
                                <ArrowLeft className="h-4 w-4" />
                                Back to All
                            </button>
                        </div>

                        {/* Images Grid */}
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                            {selectedCollection.images.map((imagePath, idx) => {
                                const fileName = imagePath.split("/").pop()?.split(".")[0];
                                const cleanName = fileName?.replace(/^[0-9A-Z-]+\s+/, "").replace(/\([0-9]+\)/, "").trim() || `Style ${idx + 1}`;

                                return (
                                    <div
                                        key={idx}
                                        className="group cursor-pointer relative overflow-hidden rounded-lg shadow-sm hover:shadow-xl transition-all duration-500"
                                        onClick={() => setSelectedImage(imagePath)}
                                    >
                                        <div className="w-full aspect-square relative overflow-hidden bg-[#e8ddd3]">
                                            <Image
                                                src={imagePath}
                                                alt={cleanName}
                                                fill
                                                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                                                sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                                                quality={80}
                                            />
                                            {/* Gradient overlay */}
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />

                                            {/* Hover label */}
                                            <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-400">
                                                <span className="text-[10px] font-bold text-white uppercase tracking-wider drop-shadow-sm">
                                                    {cleanName}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                )}

                {/* Lightbox */}
                {selectedImage && (
                    <div
                        className="fixed inset-0 z-50 flex items-center justify-center bg-[#1e1510]/95 backdrop-blur-sm p-4 lg:p-12 animate-in fade-in duration-300"
                        onClick={() => setSelectedImage(null)}
                    >
                        <button
                            className="absolute top-6 right-6 lg:top-10 lg:right-10 text-white/50 hover:text-white transition-colors"
                            onClick={() => setSelectedImage(null)}
                        >
                            <X className="h-8 w-8" />
                        </button>

                        <div
                            className="relative w-full max-w-5xl aspect-[4/3] lg:aspect-video rounded-md overflow-hidden bg-black shadow-2xl border border-white/10"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <Image
                                src={selectedImage}
                                alt="Expanded view"
                                fill
                                className="object-contain"
                                quality={100}
                                sizes="100vw"
                                priority
                            />
                        </div>

                        <div className="absolute bottom-8 left-0 right-0 text-center pointer-events-none">
                            <span className="inline-block bg-black/50 backdrop-blur-md px-6 py-2 rounded-full text-white/90 text-sm font-semibold tracking-widest uppercase border border-white/10">
                                {selectedImage.split("/").pop()?.split(".")[0]?.replace(/^[0-9A-Z-]+\s+/, "").replace(/\([0-9]+\)/, "").trim()}
                            </span>
                        </div>
                    </div>
                )}

            </div>
        </section>
    );
}
