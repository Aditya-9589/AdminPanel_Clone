
import { FiMenu, FiSearch, FiMoon, FiSun, FiBell, FiGrid } from "react-icons/fi";
import { useSidebar } from "../context/useSidebar";
import { useTheme } from "../context/ThemeContext";
import avatar from "../assets/avatar/avatar_images_3.jpeg";


const Navbar = () => {

    const { toggleSidebar } = useSidebar();

    const { theme, toggleTheme } = useTheme();

    const iconBtnClass = 
        // "p-2 rounded-full transition-all duration-200 hover:bg-sky-100 hover:text-blue-600";
        "p-2 rounded-full transition-all duration-200 hover:bg-[var(--icon-hover-bg)] hover:text-[var(--icon-hover-text)]";

    return (
        // <header className="h-16 bg-white shadow-sm rounded-2xl flex items-center justify-between px-6">
        <header className="h-16 bg-[var(--bg-card)] text-[var(--text-primary)] shadow-sm rounded-2xl flex items-center justify-between px-6">

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

            {/* CENTER – SEARCH */}


            {/* RIGHT SIDE */}
            <div className="flex items-center gap-4">

                {/* <div className="hidden md:flex items-center bg-gray-100 rounded-full px-4 py-2 w-80"> */}
                <div className="hidden md:flex items-center bg-[var(--bg-card)] border border-[var(--border-color)] rounded-full px-3 py-1.5 w-64">
                    {/* <FiSearch className="text-gray-400 mr-2" /> */}
                    <FiSearch className="text-[var(--text-secondary)] mr-2" />
                    <input
                        type="text"
                        placeholder="Try to searching ..."
                        className="bg-transparent outline-none text-sm w-full"
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
                    className={iconBtnClass}
                >
                    <img
                        src="https://flagcdn.com/w20/gb.png"
                        alt="EN"
                        // className="w-5 h-4 rounded-sm"
                        className="w-5.5 h-5.5 rounded-full"
                    />
                </button>

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
                <div className="flex items-center gap-3 cursor-pointer border-black-500">
                    {/* <div className="relative bg-sky-100 p-1 rounded-full ring-2 ring-sky-200"> */}

                    <div className="relative" >

                        <img
                            // src="https://i.pravatar.cc/40"
                            // src="https://api.dicebear.com/7.x/adventurer/svg?seed=Mike"
                            src={avatar}
                            alt="profile"
                            // className="w-9 h-9 rounded-full"
                            // className="w-9 h-9 rounded-full"
                            // className="w-10 h-10 rounded-full ring-2 ring-indigo-500"
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
