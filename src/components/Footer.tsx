import { Facebook, Instagram, Mail, Phone, MapPin, ArrowRight } from "lucide-react";

const quickLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About Us" },
    { href: "#products", label: "Products" },
    { href: "#why-us", label: "Why Choose Us" },
    { href: "#gallery", label: "Gallery" },
    { href: "#contact", label: "Contact" },
];

const services = [
    "Broadloom Carpets",
    "Modular Carpet Tiles",
    "Window Treatments",
    "Bathroom Aesthetics",
    "Custom Design Solutions",
];

const socials = [
    { Icon: Facebook, label: "Facebook", href: "#" },
    { Icon: Instagram, label: "Instagram", href: "#" },
    { Icon: Mail, label: "Email", href: "mailto:info@jtcicarpet.com" },
];

export default function Footer() {
    return (
        <footer id="footer" className="relative bg-[#1e1510]">

            {/* Top rule */}
            <div className="h-px w-full bg-gradient-to-r from-transparent via-[#9c6f4a]/60 to-transparent" />

            {/* ── CTA Banner ── */}
            <div className="border-b border-white/8">
                <div className="mx-auto max-w-7xl px-8 lg:px-16 py-12 flex flex-col sm:flex-row items-center justify-between gap-6">
                    <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#9c6f4a] mb-1">
                            Ready to elevate your space?
                        </p>
                        <p className="text-xl font-bold text-white font-[family-name:var(--font-playfair)]">
                            Request a free consultation today.
                        </p>
                    </div>
                    <a
                        href="#contact"
                        className="group shrink-0 inline-flex items-center gap-2 border border-[#9c6f4a]/50 px-8 py-4 text-xs font-bold uppercase tracking-[0.18em] text-[#dfccbd] transition-all duration-300 hover:border-[#9c6f4a] hover:bg-[#9c6f4a]/10 hover:gap-3"
                    >
                        Get in Touch
                        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </a>
                </div>
            </div>

            {/* ── Main Footer Body ── */}
            <div className="mx-auto max-w-7xl px-8 lg:px-16 py-16 lg:py-20">
                <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-[1.8fr_1fr_1fr_1.4fr]">

                    {/* Brand Column */}
                    <div>
                        {/* Logo */}
                        <div className="mb-6 flex items-center gap-3">
                            <div className="flex h-10 w-10 items-center justify-center bg-[#9c6f4a]">
                                <span className="text-sm font-bold text-white tracking-tight">JG</span>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-sm font-bold tracking-[0.15em] text-white uppercase">
                                    JTCICARPET
                                </span>
                                <span className="text-[9px] tracking-[0.25em] text-[#9c6f4a] uppercase">
                                    Gallery Corporation
                                </span>
                            </div>
                        </div>

                        <p className="mb-8 text-[13px] leading-relaxed text-white/40 max-w-[260px]">
                            Your trusted partner for premium carpet and interior solutions
                            in the Philippines — elevating spaces with timeless craft since 2013.
                        </p>

                        {/* Socials */}
                        <div className="flex gap-2">
                            {socials.map(({ Icon, label, href }) => (
                                <a
                                    key={label}
                                    href={href}
                                    aria-label={label}
                                    className="flex h-9 w-9 items-center justify-center border border-white/10 text-white/40 transition-all duration-300 hover:border-[#9c6f4a]/50 hover:bg-[#9c6f4a]/10 hover:text-[#a69183]"
                                >
                                    <Icon className="h-4 w-4" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="mb-6 text-[10px] font-bold tracking-[0.25em] text-[#9c6f4a] uppercase">
                            Quick Links
                        </h4>
                        <ul className="space-y-3">
                            {quickLinks.map((link) => (
                                <li key={link.href}>
                                    <a
                                        href={link.href}
                                        className="group inline-flex items-center gap-2 text-[13px] text-white/40 transition-all duration-200 hover:text-[#dfccbd] hover:gap-3"
                                    >
                                        <span className="h-px w-0 bg-[#9c6f4a] transition-all duration-200 group-hover:w-3" />
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="mb-6 text-[10px] font-bold tracking-[0.25em] text-[#9c6f4a] uppercase">
                            Services
                        </h4>
                        <ul className="space-y-3">
                            {services.map((service) => (
                                <li key={service}>
                                    <span className="text-[13px] text-white/40">
                                        {service}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="mb-6 text-[10px] font-bold tracking-[0.25em] text-[#9c6f4a] uppercase">
                            Contact Info
                        </h4>
                        <ul className="space-y-5">
                            <li className="flex items-start gap-3">
                                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#9c6f4a]" />
                                <span className="text-[13px] leading-snug text-white/40">
                                    Metro Manila, Philippines
                                </span>
                            </li>
                            <li className="flex items-start gap-3">
                                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-[#9c6f4a]" />
                                <a
                                    href="tel:+6328888JTCI"
                                    className="text-[13px] text-white/40 transition-colors hover:text-[#dfccbd]"
                                >
                                    +63 (2) 8888-JTCI
                                </a>
                            </li>
                            <li className="flex items-start gap-3">
                                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-[#9c6f4a]" />
                                <a
                                    href="mailto:info@jtcicarpet.com"
                                    className="text-[13px] text-white/40 transition-colors hover:text-[#dfccbd]"
                                >
                                    info@jtcicarpet.com
                                </a>
                            </li>
                        </ul>

                        {/* Hours */}
                        <div className="mt-6 border-t border-white/8 pt-5">
                            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#9c6f4a] mb-2">
                                Business Hours
                            </p>
                            <p className="text-[13px] text-white/40">Mon – Sat: 8AM – 6PM</p>
                            <p className="text-[13px] text-white/30">Sunday: By appointment</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* ── Bottom Bar ── */}
            <div className="border-t border-white/8">
                <div className="mx-auto max-w-7xl px-8 lg:px-16 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
                    <p className="text-[11px] text-white/30 tracking-wide">
                        © {new Date().getFullYear()} JTCICARPET Gallery Corporation. All rights reserved.
                    </p>
                    <p className="text-[11px] text-white/20 tracking-wide">
                        SEC Registration: CS201316611
                    </p>
                </div>
            </div>
        </footer>
    );
}
