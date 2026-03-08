import { Facebook, Instagram, Mail, Phone, MapPin, ArrowRight, Video } from "lucide-react";

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

const TikTokIcon = ({ className }: { className?: string }) => (
    <svg
        role="img"
        viewBox="0 0 24 24"
        fill="currentColor"
        className={className}
        xmlns="http://www.w3.org/2000/svg"
    >
        <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.17-2.89-.6-4.13-1.47V18.77a6.738 6.738 0 0 1-1.63 4.34c-1.34 1.56-3.59 2.15-5.59 1.74-2.24-.45-4.12-2.24-4.73-4.41-.6-2.17-.12-4.66 1.27-6.38 1.1-1.36 2.82-2.14 4.59-2.23.05 1.31.02 2.62.03 3.93-.94.06-1.89.51-2.45 1.27-.61.81-.76 1.91-.42 2.86.35.98 1.25 1.73 2.29 1.83 1.12.11 2.32-.4 2.86-1.4.15-.31.22-.64.22-.98V.02z" />
    </svg>
);

const socials = [
    { Icon: Facebook, label: "Facebook", href: "https://www.facebook.com/profile.php?id=61586410331583" },
    { Icon: Instagram, label: "Instagram", href: "https://www.instagram.com/jtcicarpetgallery/" },
    { Icon: Mail, label: "Email", href: "https://mail.google.com/mail/?view=cm&fs=1&to=jovetcarpets_05@yahoo.com&su=Inquiry%20from%20JTCICARPET%20Gallery&body=Hello%20JTCICARPET%20team," },
    { Icon: TikTokIcon, label: "TikTok", href: "https://www.tiktok.com/@jtcicarpetgalleycorp" },
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
                                    target={href.startsWith("http") ? "_blank" : undefined}
                                    rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
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
                                    #8 Dahlia St. De Castro, Sta Lucia, Pasig, Philippines, 1609
                                </span>
                            </li>
                            <li className="flex items-start gap-3">
                                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-[#9c6f4a]" />
                                <a
                                    href="tel:+639681400113"
                                    className="text-[13px] text-white/40 transition-colors hover:text-[#dfccbd]"
                                >
                                    0968 140 0113
                                </a>
                            </li>
                            <li className="flex items-start gap-3">
                                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-[#9c6f4a]" />
                                <a
                                    href="https://mail.google.com/mail/?view=cm&fs=1&to=jovetcarpets_05@yahoo.com&su=Inquiry%20from%20JTCICARPET%20Gallery&body=Hello%20JTCICARPET%20team,"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-[13px] text-white/40 transition-colors hover:text-[#dfccbd]"
                                >
                                    jovetcarpets_05@yahoo.com
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
