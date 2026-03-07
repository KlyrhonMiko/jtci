"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import { MapPin, Phone, Mail, Clock, ArrowRight, Send, CheckCircle, ChevronDown } from "lucide-react";

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

const inquiryTypes = [
    "General Inquiry",
    "Product Information",
    "Installation Services",
    "Request a Quotation",
    "Partnership Opportunity",
];

export default function ContactSection() {
    const [visible, setVisible] = useState(false);
    const sectionRef = useRef<HTMLElement>(null);

    // Form state
    const [formData, setFormData] = useState({
        fullName: "",
        company: "",
        email: "",
        phone: "",
        inquiryType: "",
        message: "",
    });
    const [errors, setErrors] = useState<Record<string, string>>({});
    const [submitted, setSubmitted] = useState(false);
    const [submitting, setSubmitting] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) setVisible(true); },
            { threshold: 0.05 }
        );
        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    const validate = () => {
        const newErrors: Record<string, string> = {};
        if (!formData.fullName.trim()) newErrors.fullName = "Full name is required";
        if (!formData.email.trim()) {
            newErrors.email = "Email address is required";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = "Please enter a valid email address";
        }
        if (!formData.inquiryType) newErrors.inquiryType = "Please select an inquiry type";
        if (!formData.message.trim()) newErrors.message = "Please describe your project or inquiry";
        return newErrors;
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        const newErrors = validate();
        setErrors(newErrors);
        if (Object.keys(newErrors).length > 0) return;

        setSubmitting(true);
        // Simulate API call
        await new Promise((r) => setTimeout(r, 1500));
        setSubmitting(false);
        setSubmitted(true);
    };

    const handleChange = (field: string, value: string) => {
        setFormData((prev) => ({ ...prev, [field]: value }));
        if (errors[field]) setErrors((prev) => { const n = { ...prev }; delete n[field]; return n; });
    };

    const inputBaseClass =
        "w-full bg-transparent border-b border-white/15 px-0 py-3 text-[15px] text-white placeholder:text-white/30 outline-none transition-all duration-300 focus:border-[#9c6f4a] focus:shadow-[0_2px_0_0_#9c6f4a]";

    return (
        <section
            id="contact"
            ref={sectionRef}
            className="relative overflow-hidden"
        >
            {/* Top rule */}
            <div className="h-px w-full bg-gradient-to-r from-transparent via-[#c4aa96] to-transparent" />

            <div className="relative bg-[#2a1f19]">
                {/* Subtle texture */}
                <div
                    className="absolute inset-0 opacity-[0.04] pointer-events-none"
                    style={{
                        backgroundImage: `radial-gradient(circle at 1px 1px, #dfccbd 1px, transparent 0)`,
                        backgroundSize: "28px 28px",
                    }}
                />

                <div className="relative z-10 mx-auto max-w-7xl px-8 py-20 lg:px-16 xl:px-24">
                    <div className="grid lg:grid-cols-2 gap-16 lg:gap-20">

                        {/* ── LEFT COLUMN: Contact Info ── */}
                        <div
                            className={`flex flex-col transition-all duration-700 ${visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}
                        >
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

                            <p className="mb-12 text-[15px] leading-relaxed text-white/50 max-w-md">
                                Ready to transform your space? Reach out for a free
                                consultation and quotation — we&apos;d love to bring your vision to life.
                            </p>

                            {/* Contact details grid */}
                            <div className="grid sm:grid-cols-2 gap-x-8 gap-y-10 mb-12">
                                {contactInfo.map((info) => (
                                    <div key={info.label} className="flex items-start gap-4">
                                        <div className="mt-1 flex h-11 w-11 shrink-0 items-center justify-center border border-[#9c6f4a]/30 bg-[#9c6f4a]/10">
                                            <info.icon className="h-[18px] w-[18px] text-[#9c6f4a]" />
                                        </div>
                                        <div>
                                            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#9c6f4a] mb-1">
                                                {info.label}
                                            </p>
                                            <p className="text-[14px] font-semibold text-white mb-0.5">
                                                {info.value}
                                            </p>
                                            <p className="text-[12px] text-white/40">{info.detail}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Call CTA */}
                            <div className="mt-auto border-t border-white/10 pt-8">
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

                        {/* ── RIGHT COLUMN: Inquiry Form ── */}
                        <div
                            className={`transition-all duration-700 delay-200 ${visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}
                        >
                            {/* Form header */}
                            <div className="mb-8 flex items-center gap-3">
                                <span className="h-px w-8 bg-[#9c6f4a]/50" />
                                <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#9c6f4a]/70">
                                    Inquiry Form
                                </span>
                            </div>

                            {/* Form card with subtle glass border */}
                            <div className="relative border border-white/[0.06] bg-white/[0.02] p-8 lg:p-10">
                                {/* Corner accent */}
                                <div className="absolute top-0 left-0 h-8 w-px bg-[#9c6f4a]" />
                                <div className="absolute top-0 left-0 h-px w-8 bg-[#9c6f4a]" />
                                <div className="absolute bottom-0 right-0 h-8 w-px bg-[#9c6f4a]" />
                                <div className="absolute bottom-0 right-0 h-px w-8 bg-[#9c6f4a]" />

                                {submitted ? (
                                    /* Success State */
                                    <div className="flex flex-col items-center justify-center py-16 text-center">
                                        <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full border border-[#9c6f4a]/30 bg-[#9c6f4a]/10">
                                            <CheckCircle className="h-10 w-10 text-[#9c6f4a]" />
                                        </div>
                                        <h4 className="mb-3 font-[family-name:var(--font-playfair)] text-2xl font-bold text-white">
                                            Thank You!
                                        </h4>
                                        <p className="text-[15px] text-white/50 max-w-md mb-8">
                                            Your inquiry has been received. Our team will review your message and respond within 24 hours.
                                        </p>
                                        <button
                                            type="button"
                                            onClick={() => {
                                                setSubmitted(false);
                                                setFormData({ fullName: "", company: "", email: "", phone: "", inquiryType: "", message: "" });
                                            }}
                                            className="text-sm font-semibold uppercase tracking-[0.15em] text-[#9c6f4a] transition-colors duration-300 hover:text-[#dfccbd]"
                                        >
                                            Send Another Inquiry
                                        </button>
                                    </div>
                                ) : (
                                    /* Form */
                                    <form onSubmit={handleSubmit} noValidate>
                                        <div className="grid sm:grid-cols-2 gap-x-8 gap-y-0">
                                            {/* Full Name */}
                                            <div className="mb-7">
                                                <label className="mb-2 block text-[11px] font-bold uppercase tracking-[0.2em] text-[#9c6f4a]">
                                                    Full Name <span className="text-[#9c6f4a]/60">*</span>
                                                </label>
                                                <input
                                                    type="text"
                                                    placeholder="John Doe"
                                                    value={formData.fullName}
                                                    onChange={(e) => handleChange("fullName", e.target.value)}
                                                    className={inputBaseClass}
                                                />
                                                {errors.fullName && (
                                                    <p className="mt-2 text-[12px] text-red-400/80">{errors.fullName}</p>
                                                )}
                                            </div>

                                            {/* Company */}
                                            <div className="mb-7">
                                                <label className="mb-2 block whitespace-nowrap text-[11px] font-bold uppercase tracking-[0.2em] text-[#9c6f4a]">
                                                    Company / Organization
                                                </label>
                                                <input
                                                    type="text"
                                                    placeholder="Your Company Name"
                                                    value={formData.company}
                                                    onChange={(e) => handleChange("company", e.target.value)}
                                                    className={inputBaseClass}
                                                />
                                            </div>

                                            {/* Email */}
                                            <div className="mb-7">
                                                <label className="mb-2 block text-[11px] font-bold uppercase tracking-[0.2em] text-[#9c6f4a]">
                                                    Email Address <span className="text-[#9c6f4a]/60">*</span>
                                                </label>
                                                <input
                                                    type="email"
                                                    placeholder="john@company.com"
                                                    value={formData.email}
                                                    onChange={(e) => handleChange("email", e.target.value)}
                                                    className={inputBaseClass}
                                                />
                                                {errors.email && (
                                                    <p className="mt-2 text-[12px] text-red-400/80">{errors.email}</p>
                                                )}
                                            </div>

                                            {/* Phone */}
                                            <div className="mb-7">
                                                <label className="mb-2 block text-[11px] font-bold uppercase tracking-[0.2em] text-[#9c6f4a]">
                                                    Phone Number
                                                </label>
                                                <input
                                                    type="tel"
                                                    placeholder="+63 912 345 6789"
                                                    value={formData.phone}
                                                    onChange={(e) => handleChange("phone", e.target.value)}
                                                    className={inputBaseClass}
                                                />
                                            </div>
                                        </div>

                                        {/* Inquiry Type */}
                                        <div className="mb-7">
                                            <label className="mb-2 block text-[11px] font-bold uppercase tracking-[0.2em] text-[#9c6f4a]">
                                                Inquiry Type <span className="text-[#9c6f4a]/60">*</span>
                                            </label>
                                            <div className="relative">
                                                <select
                                                    value={formData.inquiryType}
                                                    onChange={(e) => handleChange("inquiryType", e.target.value)}
                                                    className={`${inputBaseClass} cursor-pointer appearance-none pr-8 ${!formData.inquiryType ? "text-white/30" : ""}`}
                                                >
                                                    <option value="" disabled className="bg-[#2a1f19] text-white/30">
                                                        Select an inquiry type
                                                    </option>
                                                    {inquiryTypes.map((type) => (
                                                        <option key={type} value={type} className="bg-[#2a1f19] text-white">
                                                            {type}
                                                        </option>
                                                    ))}
                                                </select>
                                                <ChevronDown className="pointer-events-none absolute right-0 top-1/2 h-4 w-4 -translate-y-1/2 text-white/30" />
                                            </div>
                                            {errors.inquiryType && (
                                                <p className="mt-2 text-[12px] text-red-400/80">{errors.inquiryType}</p>
                                            )}
                                        </div>

                                        {/* Message */}
                                        <div className="mb-8">
                                            <label className="mb-2 block text-[11px] font-bold uppercase tracking-[0.2em] text-[#9c6f4a]">
                                                Project Details <span className="text-[#9c6f4a]/60">*</span>
                                            </label>
                                            <textarea
                                                rows={4}
                                                placeholder="Tell us about your project, space requirements, preferred materials, or any specific questions you have…"
                                                value={formData.message}
                                                onChange={(e) => handleChange("message", e.target.value)}
                                                className={`${inputBaseClass} resize-none`}
                                            />
                                            {errors.message && (
                                                <p className="mt-2 text-[12px] text-red-400/80">{errors.message}</p>
                                            )}
                                        </div>

                                        {/* Submit */}
                                        <div className="flex items-center justify-between flex-wrap gap-4">
                                            <button
                                                type="submit"
                                                disabled={submitting}
                                                className="group relative inline-flex items-center gap-3 overflow-hidden px-10 py-4 text-sm font-bold uppercase tracking-[0.18em] text-white transition-all duration-300 disabled:opacity-60"
                                                style={{
                                                    background: "linear-gradient(135deg, #9c6f4a 0%, #654128 100%)",
                                                }}
                                            >
                                                {/* Hover shine */}
                                                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-500 group-hover:translate-x-full" />
                                                <span className="relative z-10 flex items-center gap-3">
                                                    {submitting ? (
                                                        <>
                                                            <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                                                            Sending…
                                                        </>
                                                    ) : (
                                                        <>
                                                            Submit Inquiry
                                                            <Send className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                                                        </>
                                                    )}
                                                </span>
                                            </button>

                                            <p className="text-[12px] text-white/25">
                                                <span className="text-[#9c6f4a]/60">*</span> Required fields
                                            </p>
                                        </div>
                                    </form>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom rule */}
            <div className="h-px w-full bg-gradient-to-r from-transparent via-[#c4aa96] to-transparent" />
        </section>
    );
}
