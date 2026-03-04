"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { MapPin, Phone, Mail, Clock, ArrowRight } from "lucide-react";

const contactInfo = [
    {
        icon: MapPin,
        label: "Visit Us",
        value: "Metro Manila, Philippines",
        detail: "Available by appointment",
    },
    {
        icon: Phone,
        label: "Call Us",
        value: "+63 (2) 8888-JTCI",
        detail: "Mon – Sat, 8AM – 6PM",
    },
    {
        icon: Mail,
        label: "Email Us",
        value: "info@jtcicarpet.com",
        detail: "We reply within 24 hours",
    },
    {
        icon: Clock,
        label: "Business Hours",
        value: "Mon – Sat: 8AM – 6PM",
        detail: "Sunday: By appointment",
    },
];

export default function ContactSection() {
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
            id="contact"
            ref={sectionRef}
            className="relative overflow-hidden"
        >
            {/* Top rule */}
            <div className="h-px w-full bg-gradient-to-r from-transparent via-[#c4aa96] to-transparent" />

            <div className="grid lg:grid-cols-2 min-h-[600px]">

                {/* ── LEFT: Dark info panel ── */}
                <div
                    className={`relative flex flex-col justify-center bg-[#2a1f19] px-10 py-20 lg:px-16 xl:px-24 transition-all duration-700 ${visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}
                >
                    {/* Subtle texture */}
                    <div
                        className="absolute inset-0 opacity-[0.04] pointer-events-none"
                        style={{
                            backgroundImage: `radial-gradient(circle at 1px 1px, #dfccbd 1px, transparent 0)`,
                            backgroundSize: "28px 28px",
                        }}
                    />

                    <div className="relative z-10">
                        {/* Label */}
                        <div className="mb-6 flex items-center gap-3">
                            <span className="h-px w-8 bg-[#9c6f4a]" />
                            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#9c6f4a]">
                                Get In Touch
                            </span>
                        </div>

                        {/* Heading */}
                        <h2 className="mb-4 font-[family-name:var(--font-playfair)] text-4xl font-bold leading-[1.15] tracking-tight text-white lg:text-5xl">
                            Let&apos;s Start{" "}
                            <span
                                style={{
                                    background: "linear-gradient(110deg, #dfccbd 0%, #9c6f4a 100%)",
                                    WebkitBackgroundClip: "text",
                                    WebkitTextFillColor: "transparent",
                                    backgroundClip: "text",
                                }}
                            >
                                Your Project
                            </span>
                        </h2>

                        <div className="mb-8 h-px w-16 bg-[#9c6f4a]" />

                        <p className="mb-12 text-[15px] leading-relaxed text-white/50">
                            Ready to transform your space? Reach out for a free
                            consultation and quotation — we&apos;d love to bring your vision to life.
                        </p>

                        {/* Contact list */}
                        <div className="grid sm:grid-cols-2 gap-x-8 gap-y-12">
                            {contactInfo.map((info) => (
                                <div key={info.label} className="flex items-start gap-5">
                                    <div className="mt-1 flex h-12 w-12 shrink-0 items-center justify-center border border-[#9c6f4a]/30 bg-[#9c6f4a]/10">
                                        <info.icon className="h-5 w-5 text-[#9c6f4a]" />
                                    </div>
                                    <div>
                                        <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#9c6f4a] mb-1.5">
                                            {info.label}
                                        </p>
                                        <p className="text-[15px] font-semibold text-white mb-1">
                                            {info.value}
                                        </p>
                                        <p className="text-[13px] text-white/50">{info.detail}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Bottom call CTA */}
                    <div className="relative z-10 mt-16 border-t border-white/10 pt-10">
                        <a
                            href="tel:+6328888JTCI"
                            className="group inline-flex items-center gap-3 text-sm font-bold uppercase tracking-[0.18em] text-[#dfccbd] transition-all duration-300 hover:text-white hover:gap-4"
                        >
                            <Phone className="h-5 w-5 text-[#9c6f4a]" />
                            Call Us Now
                            <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                        </a>
                    </div>
                </div>

                {/* ── RIGHT: Image panel ── */}
                <div
                    className={`relative hidden lg:block bg-[#fff9f6] transition-all duration-1000 delay-200 ${visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}
                >
                    <Image
                        src="/images/gallery-conference.png"
                        alt="JTCICARPET Corporate Installation"
                        fill
                        className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-l from-transparent to-black/30" />
                    
                    {/* Small aesthetic overlay */}
                    <div className="absolute bottom-10 right-10 bg-black/40 backdrop-blur-md border border-white/10 p-6 max-w-xs">
                         <div className="mb-2 flex items-center gap-2">
                            <span className="h-px w-6 bg-[#dfccbd]" />
                            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#dfccbd]">
                                Exemplary Spaces
                            </span>
                        </div>
                        <p className="text-white font-[family-name:var(--font-playfair)] text-xl leading-tight">
                            Elevating the modern corporate experience.
                        </p>
                    </div>
                </div>
            </div>

            {/* Bottom rule */}
            <div className="h-px w-full bg-gradient-to-r from-transparent via-[#c4aa96] to-transparent" />
        </section>
    );
}
