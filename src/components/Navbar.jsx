
import { useState, useEffect, useRef } from "react";
import { FiMenu, FiSearch, FiMoon, FiSun, FiBell, FiGrid, FiMoreVertical } from "react-icons/fi";
import { useSidebar } from "../context/useSidebar";
import { useTheme } from "../context/ThemeContext";
import { useNavigate } from "react-router-dom";

import logo from "../assets/avatar/logo_image_5.png";
import avatar from "../assets/avatar/avatar_images_3.jpeg";
import UkFlag from "../assets/flags/UK_flag.svg";
import ChineseFlag from "../assets/flags/Chinese_flag.svg";
import FranceFlag from "../assets/flags/France_flag.svg";
import ArabicFlag from "../assets/flags/Arabic_flag.svg";


const LanguageItem = ({ flagSrc, label }) => (
    <button className="w-full flex items-center gap-3 px-4 py-2 text-sm text-[var(--text-primary)] hover:bg-[var(--icon-hover-bg)] transition">
        <img src={flagSrc} alt={label} className="w-6 h-5 rounded-sm object-cover" />
        <span>{label}</span>
    </button>
);


const Navbar = () => {
    const { toggleSidebar } = useSidebar();
    const { theme, toggleTheme } = useTheme();
    const navigate = useNavigate();

    const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [isLanguageOpen, setIsLanguageOpen] = useState(false);
    const [isProfileOpen, setIsProfileOpen] = useState(false);

    // Desktop-only state
    const [isDesktopLanguageOpen, setIsDesktopLanguageOpen] = useState(false);
    const [isDesktopProfileOpen, setIsDesktopProfileOpen] = useState(false);
    const desktopProfileRef = useRef(null);

    const iconBtnClass =
        "p-2 rounded-full transition-all duration-200 hover:bg-[var(--icon-hover-bg)] hover:text-[var(--icon-hover-text)]";

    // Track screen size
    useEffect(() => {
        const mq = window.matchMedia("(max-width: 1023px)");
        const handler = (e) => {
            setIsMobile(e.matches);
            if (!e.matches) {
                setMobileMenuOpen(false);
                setIsLanguageOpen(false);
                setIsProfileOpen(false);
            }
        };
        mq.addEventListener("change", handler);
        return () => mq.removeEventListener("change", handler);
    }, []);

    // Close desktop profile on outside click
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (desktopProfileRef.current && !desktopProfileRef.current.contains(event.target)) {
                setIsDesktopProfileOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    // Close mobile dropdowns when accordion is shut
    useEffect(() => {
        if (!mobileMenuOpen) {
            setIsLanguageOpen(false);
            setIsProfileOpen(false);
        }
    }, [mobileMenuOpen]);


    // ─────────────────────────────────────────────────────────────────────────
    // MOBILE LAYOUT
    // ─────────────────────────────────────────────────────────────────────────
    if (isMobile) {
        return (
            // Outer wrapper: relative + NO overflow-hidden → dropdowns escape freely
            <div className="relative z-40">

                {/* Navbar card — expands naturally, no overflow clipping */}
                <header className="bg-[var(--bg-card)] text-[var(--text-primary)] shadow-sm rounded-xl px-4">

                    {/* ── Row 1: always visible ── */}
                    <div className="h-16 flex items-center justify-between">

                        {/* Hamburger */}
                        <button onClick={toggleSidebar} className={iconBtnClass}>
                            <FiMenu size={20} />
                        </button>

                        {/* Center — Logo + Title */}
                        <div className="flex items-center gap-2">
                            <img src={logo} alt="Spike Admin" className="w-7 h-7" />
                            <span className="text-base font-bold">Spike Admin</span>
                        </div>

                        {/* Three-dots */}
                        <button
                            onClick={() => setMobileMenuOpen((prev) => !prev)}
                            className={iconBtnClass}
                            aria-label="More options"
                        >
                            <FiMoreVertical size={20} />
                        </button>
                    </div>

                    {/* ── Row 2: expanded action strip (max-h collapse, NO overflow-hidden on parent) ── */}
                    <div
                        className={`
                            overflow-hidden transition-all duration-300 ease-in-out
                            ${mobileMenuOpen ? "max-h-20 pb-3 pt-1" : "max-h-0"}
                        `}
                    >
                        {/* <div className="flex items-center justify-around"> */}
                        <div className="flex items-center justify-center gap-4 px-4">

                            {/* Theme Toggle */}
                            <button onClick={toggleTheme} className={iconBtnClass}>
                                {theme === "light" ? <FiMoon size={18} /> : <FiSun size={18} />}
                            </button>

                            {/* Language trigger */}
                            <button
                                onClick={() => {
                                    setIsLanguageOpen((prev) => !prev);
                                    setIsProfileOpen(false);
                                }}
                                className="relative w-8 h-8 flex items-center justify-center rounded-full transition hover:bg-[var(--icon-hover-bg)]"
                            >
                                <img src={UkFlag} alt="English" className="w-5 h-5 object-contain" />
                            </button>

                            {/* Notifications */}
                            <button className={`${iconBtnClass} relative`}>
                                <FiBell size={18} />
                                <span className="absolute -top-1 -right-1 bg-orange-500 text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
                                    5
                                </span>
                            </button>

                            {/* Shortcuts */}
                            <button className={iconBtnClass}>
                                <FiGrid size={18} />
                            </button>

                            {/* Profile avatar trigger */}
                            <button
                                onClick={() => {
                                    setIsProfileOpen((prev) => !prev);
                                    setIsLanguageOpen(false);
                                }}
                                className="relative w-10 h-10"
                            >
                                <img
                                    src={avatar}
                                    alt="profile"
                                    className="w-10 h-10 rounded-full ring-2 ring-[var(--icon-hover-text)]"
                                />
                                <span className="absolute top-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full" />
                            </button>

                        </div>
                    </div>
                </header>

                {/* ── Language dropdown — absolutely positioned OUTSIDE the clipping container ── */}
                {isLanguageOpen && mobileMenuOpen && (
                    <div className="absolute left-1/2 -translate-x-1/2 top-[calc(100%+4px)] w-56 rounded-xl bg-[var(--bg-card)] shadow-lg z-50 overflow-hidden">
                        <LanguageItem flagSrc={UkFlag} label="English (UK)" />
                        <LanguageItem flagSrc={ChineseFlag} label="中文 (Chinese)" />
                        <LanguageItem flagSrc={FranceFlag} label="Français (French)" />
                        <LanguageItem flagSrc={ArabicFlag} label="العربية (Arabic)" />
                    </div>
                )}

                {/* ── Profile dropdown — absolutely positioned OUTSIDE the clipping container ── */}
                {isProfileOpen && mobileMenuOpen && (
                    <div className="absolute right-4 top-[calc(100%+4px)] w-44 bg-[var(--bg-card)] border border-[var(--border-color)] rounded-xl shadow-lg z-50 overflow-hidden">
                        <button
                            onClick={() => { setIsProfileOpen(false); navigate("/profile"); }}
                            className="w-full px-4 py-2 text-left text-sm hover:bg-[var(--icon-hover-bg)] transition"
                        >
                            Profile
                        </button>
                        <button
                            onClick={() => { setIsProfileOpen(false); navigate("/login"); }}
                            className="w-full px-4 py-2 text-left text-sm text-red-500 hover:bg-[var(--icon-hover-bg)] transition"
                        >
                            Logout
                        </button>
                    </div>
                )}

            </div>
        );
    }


    // ─────────────────────────────────────────────────────────────────────────
    // DESKTOP LAYOUT — unchanged
    // ─────────────────────────────────────────────────────────────────────────
    return (
        <header className="h-16 bg-[var(--bg-card)] text-[var(--text-primary)] shadow-sm rounded-xl flex items-center justify-between py-6 px-6 sticky top-0 z-40">

            {/* LEFT — Hamburger */}
            <div className="flex items-center gap-4">
                <button onClick={toggleSidebar} className={iconBtnClass}>
                    <FiMenu size={20} />
                </button>
            </div>

            {/* RIGHT */}
            <div className="flex items-center gap-4">

                {/* Search */}
                <div className="hidden md:flex items-center bg-[var(--bg-card)] border border-[var(--border-color)] rounded-full px-3 py-1.5 w-64 focus-within:border-gray-400 transition">
                    <FiSearch className="text-[var(--text-secondary)] mr-2" />
                    <input
                        type="text"
                        placeholder="Try to searching ..."
                        className="bg-transparent text-sm w-full outline-none focus:outline-none focus:ring-0"
                    />
                </div>

                {/* Theme Toggle */}
                <button onClick={toggleTheme} className={iconBtnClass}>
                    {theme === "light" ? <FiMoon size={18} /> : <FiSun size={18} />}
                </button>

                {/* Language */}
                <div className="relative">
                    <button
                        onClick={() => setIsDesktopLanguageOpen((prev) => !prev)}
                        className="relative w-8 h-8 flex items-center justify-center rounded-full transition hover:bg-[var(--icon-hover-bg)]"
                    >
                        <img src={UkFlag} alt="English" className="w-5 h-5 object-contain" />
                    </button>
                    {isDesktopLanguageOpen && (
                        <div className="absolute right-0 top-10 w-52 rounded-xl bg-[var(--bg-card)] shadow z-50 overflow-hidden">
                            <LanguageItem flagSrc={UkFlag} label="English (UK)" />
                            <LanguageItem flagSrc={ChineseFlag} label="中文 (Chinese)" />
                            <LanguageItem flagSrc={FranceFlag} label="Français (French)" />
                            <LanguageItem flagSrc={ArabicFlag} label="العربية (Arabic)" />
                        </div>
                    )}
                </div>

                {/* Notifications */}
                <button className={`${iconBtnClass} relative`}>
                    <FiBell size={18} />
                    <span className="absolute -top-1 -right-1 bg-orange-500 text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
                        5
                    </span>
                </button>

                {/* Shortcuts */}
                <button className={iconBtnClass}>
                    <FiGrid size={18} />
                </button>

                {/* Profile */}
                <div
                    ref={desktopProfileRef}
                    onClick={() => setIsDesktopProfileOpen((prev) => !prev)}
                    className="relative flex items-center gap-3 cursor-pointer rounded-lg px-2 py-1 transition"
                >
                    {isDesktopProfileOpen && (
                        <div
                            onClick={(e) => e.stopPropagation()}
                            className="absolute right-6 top-16 w-44 bg-[var(--bg-card)] border border-[var(--border-color)] rounded-xl shadow-lg z-50 overflow-hidden"
                        >
                            <button
                                onClick={() => { setIsDesktopProfileOpen(false); navigate("/profile"); }}
                                className="w-full px-4 py-2 text-left text-sm hover:bg-[var(--icon-hover-bg)] transition"
                            >
                                Profile
                            </button>
                            <button
                                onClick={() => { setIsDesktopProfileOpen(false); navigate("/login"); }}
                                className="w-full px-4 py-2 text-left text-sm text-red-500 hover:bg-[var(--icon-hover-bg)] transition"
                            >
                                Logout
                            </button>
                        </div>
                    )}
                    <div className="relative">
                        <img src={avatar} alt="profile" className="w-10 h-10 rounded-full ring-2 ring-[var(--icon-hover-text)]" />
                        <span className="absolute top-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full" />
                    </div>
                    <div className="hidden md:block">
                        <p className="text-m font-semibold">Mike Nielsen</p>
                        <p className="text-sm text-[var(--text-secondary)] font-semibold">Admin</p>
                    </div>
                </div>

            </div>
        </header>
    );
};

export default Navbar;
