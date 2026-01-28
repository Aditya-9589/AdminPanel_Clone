
import { useState, useEffect, useRef } from "react";
import { FiMenu, FiSearch, FiMoon, FiSun, FiBell, FiGrid, FiGlobe } from "react-icons/fi";
import { useSidebar } from "../context/useSidebar";
import { useTheme } from "../context/ThemeContext";
import { useNavigate } from "react-router-dom";

import avatar from "../assets/avatar/avatar_images_3.jpeg";
import UkFlag from "../assets/flags/UK_flag.svg";
import ChineseFlag from "../assets/flags/Chinese_flag.svg";
import FranceFlag from "../assets/flags/France_flag.svg";
import ArabicFlag from "../assets/flags/Arabic_flag.svg";


const LanguageItem = ({ flagSrc, label }) => (
    <button
        className="
            w-full
            flex items-center gap-3
            px-4 py-2
            text-sm 
            text-[var(--text-primary)]
            hover:bg-[var(--icon-hover-bg)]
            transition
        "
    >
        {/* <span className="text-lg" >{flag}</span> */}
        <img
            src={flagSrc}
            alt={label}
            className="w-6.5 h-6 rounded-sm object-cover"
        />
        <span>{label}</span>
    </button>
);

const Navbar = () => {

    const { toggleSidebar } = useSidebar();

    const { theme, toggleTheme } = useTheme();

    const [isLanguageOpen, setIsLanguageOpen] = useState(false);

    const [isProfileOpen, setIsProfileOpen] = useState(false);

    const profileRef = useRef(null);

    const navigate = useNavigate();

    const iconBtnClass =
        // "p-2 rounded-full transition-all duration-200 hover:bg-sky-100 hover:text-blue-600";
        "p-2 rounded-full transition-all duration-200 hover:bg-[var(--icon-hover-bg)] hover:text-[var(--icon-hover-text)]";


    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                profileRef.current &&
                !profileRef.current.contains(event.target)
            ) {
                setIsProfileOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);


    return (
        // <header className="h-16 bg-white shadow-sm rounded-2xl flex items-center justify-between px-6">
        // <header className="h-16 bg-[var(--bg-card)] text-[var(--text-primary)] shadow-sm rounded-xl flex items-center justify-between py-6 px-6">
        <header className="h-16 bg-[var(--bg-card)] text-[var(--text-primary)] shadow-sm rounded-xl flex items-center justify-between py-6 px-6 sticky top-0 z-40">

            {/* LEFT SIDE */}
            <div className="flex items-center gap-4">
                {/* Hamburger */}
                <button
                    onClick={toggleSidebar}
                    // className="p-2 rounded-md hover:bg-gray-100"
                    className={iconBtnClass}
                >
                    <FiMenu size={20} />
                </button>
            </div>


            {/* RIGHT SIDE */}
            <div className=" flex items-center gap-4">

                {/* <div className="hidden md:flex items-center bg-gray-100 rounded-full px-4 py-2 w-80"> */}
                <div className="hidden md:flex items-center bg-[var(--bg-card)] 
                            border border-[var(--border-color)] rounded-full 
                            px-3 py-1.5 w-64 focus-within:border-gray-400 transition
                        "
                >
                    {/* <FiSearch className="text-gray-400 mr-2" /> */}
                    <FiSearch className="text-[var(--text-secondary)] mr-2" />
                    <input
                        type="text"
                        placeholder="Try to searching ..."
                        className="
                                bg-transparent
                                text-sm
                                w-full
                                outline-none
                                focus:outline-none
                                focus:ring-0
                            "
                    />
                </div>


                {/* Theme Toggle */}
                <button
                    // className="p-2 rounded-md hover:bg-gray-100"
                    // className={iconBtnClass}
                    onClick={toggleTheme}
                    className={iconBtnClass}
                >
                    {/* <FiMoon size={18} /> */}
                    {theme === "light" ? <FiMoon /> : <FiSun />}
                </button>


                {/* Language */}
                <button
                    onClick={() => setIsLanguageOpen(prev => !prev)}
                    className="
                        relative
                        w-8 h-8
                        flex items-center justify-center
                        rounded-full
                        transition
                        hover:bg-[var(--icon-hover-bg)]
                    "
                >
                    {/* <FiGlobe
                        className="text-lg text-[var(--text-primary)]"
                    /> */}
                    {/* <LanguageItem flagSrc={UkFlag}  /> */}
                    <img
                        src={UkFlag}
                        alt="English"
                        className="w-5 h-5 object-contain"
                    />
                </button>
                {isLanguageOpen && (
                    <div
                        className="
                            absolute
                            right-0
                            top-12
                            translate-x-[-14rem]
                            translate-y-[1rem]
                            w-52
                            rounded-xl
                            bg-[var(--bg-card)]
                            shadow
                            z-50
                            overflow-hidden
                        ">
                        <LanguageItem flagSrc={UkFlag} label="English (UK)" />
                        <LanguageItem flagSrc={ChineseFlag} label="中文 (Chinese)" />
                        <LanguageItem flagSrc={FranceFlag} label="Français (French)" />
                        <LanguageItem flagSrc={ArabicFlag} label="العربية (Arabic)" />
                    </div>
                )}


                {/* Notifications */}
                {/* <button className="relative p-2 rounded-md hover:bg-gray-100"> */}
                <button
                    className={`${iconBtnClass} relative`}
                >
                    <FiBell size={18} />
                    <span className="absolute -top-1 -right-1 bg-orange-500 text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
                        5
                    </span>
                </button>


                {/* Shortcuts */}
                <button
                    // className="p-2 rounded-md hover:bg-gray-100"
                    className={iconBtnClass}
                >
                    <FiGrid size={18} />
                </button>


                {/* Profile */}
                <div
                    ref={profileRef}
                    onClick={() => setIsProfileOpen(prev => !prev)}
                    className="
                        relative
                        flex items-center gap-3 
                        cursor-pointer 
                        rounded-lg
                        px-2 py-1
                        transition
                    "
                >

                    {isProfileOpen && (
                        <div
                            onClick={(e) => e.stopPropagation()}
                            className="
                                absolute
                                right-6
                                top-16
                                w-44
                                bg-[var(--bg-card)]
                                border border-[var(--border-color)]
                                rounded-xl
                                shadow-lg
                                z-50
                                overflow-hidden
                            "
                        >
                            <button
                                onClick={() => {
                                    setIsProfileOpen(false);
                                    navigate("/profile");
                                }}
                                className="
                                    w-full
                                    px-4 py-2
                                    text-left
                                    text-sm
                                    hover:bg-[var(--icon-hover-bg)]
                                    transition
                                "
                            >
                                Profile
                            </button>

                            <button
                                onClick={() => {
                                    setIsProfileOpen(false);
                                    navigate("/login");
                                }}
                                className="
                                    w-full
                                    px-4 py-2
                                    text-left
                                    text-sm
                                    text-red-500
                                    hover:bg-[var(--icon-hover-bg)]
                                    transition
                                "
                            >
                                Logout
                            </button>
                        </div>
                    )}


                    <div className="relative" >

                        <img
                            // src="https://i.pravatar.cc/40"
                            // src="https://api.dicebear.com/7.x/adventurer/svg?seed=Mike"
                            src={avatar}
                            alt="profile"
                            className="w-10 h-10 rounded-full ring-2 ring-[var(--icon-hover-text)]"
                        />

                        <span className="absolute top-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></span>

                    </div>
                    <div className="hidden md:block">
                        {/* <p className="text-sm font-semibold">Mike Nielsen</p> */}
                        <p className="text-m font-semibold">Mike Nielsen</p>
                        {/* <p className="text-sm text-gray-400 font-semibold">Admin</p> */}
                        <p className="text-sm text-[var(--text-secondary)] font-semibold">Admin</p>
                    </div>
                </div>


            </div>
        </header>
    );
};

export default Navbar;
