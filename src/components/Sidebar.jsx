import { NavLink } from "react-router-dom";
import { FiHome, FiLayout, FiFileText } from "react-icons/fi";
import { useSidebar } from "../context/useSidebar";
// import logo from "../assets/avatar/logo_image.png"
import logo from "../assets/avatar/logo_image_5.png"

const Sidebar = () => {
    const { isCollapsed } = useSidebar();

    const menuItems = [
        { to: "/dashboard", label: "Dashboard 1", icon: <FiHome /> },
        { to: "/dashboard2", label: "Dashboard 2", icon: <FiLayout /> },
        // { to: "/front-pages", label: "Front Pages", icon: <FiFileText /> },
    ];

    return (
        <aside
            // className={`bg-[var(--bg-card)] text-[var(--text-primary)] 
            //     shadow-md transition-all duration-300
            //     ${isCollapsed ? "w-20" : "w-64"}
            //     h-full rounded-2xl flex flex-col`}

            className={`bg-[var(--bg-card)] text-[var(--text-primary)]
                shadow-md transition-all duration-300
                ${isCollapsed ? "w-20" : "w-64"}
                h-screen overflow-y-auto
                rounded-2xl flex flex-col`}
        >

            {/* Logo  */}
            <div className={`h-16 flex items-center ${isCollapsed ? "justify-center" : "px-4"}`}>
                <div className="flex items-center gap-3">
                    {/* ICON ONLY */}
                    <img
                        // src="https://spike-react-tailwind-mai
                        src={logo}
                        alt="Spike Icon"
                        className="w-8 h-8 shrink-0"
                    />

                    {/* TEXT */}
                    {!isCollapsed && (
                        // <span className="text-lg font-bold text-gray-800 whitespace-nowrap">
                        <span className="text-lg font-bold whitespace-nowrap">
                            Spike Admin
                        </span>
                    )}
                </div>
            </div>


            {/* Menu */}
            <div className="px-3 mt-6">
                {!isCollapsed && (
                    // <p className="text-xs font-semibold text-gray-400 mb-2">
                    <p className="text-xs font-semibold text-[var(--text-secondary)] mb-2">
                        Home
                    </p>
                )}

                <nav className="space-y-1">
                    {menuItems.map(({ to, label, icon }) => (
                        // <NavLink
                        //     key={to}
                        //     to={to}
                        //     className={({ isActive }) =>
                        //         `flex items-center gap-3 px-4 py-2 rounded-md text-sm font-medium transition
                        //         ${isActive 
                        //             ? "bg-[var(--icon-hover-bg)] text-[var(--icon-hover-text)]"
                        //             : "text-[var(--text-primary)] hover:bg-[var(--icon-hover-bg)] hover:text-[var(--icon-hover-text)]"}`
                        //     }
                        // >

                        <NavLink
                            key={to}
                            to={to}
                            className="group relative overflow-hidden flex items-center gap-3 px-4 py-2 rounded-md text-sm font-medium"
                        >
                            {({ isActive }) => (
                                <>
                                    <span
                                        className={`
                                                absolute inset-0 bg-[var(--icon-hover-bg)]
                                                transform origin-left
                                                transition-transform duration-300 ease-out
                                                ${isActive ? "scale-x-100" : "scale-x-0"}
                                                group-hover:scale-x-100
                                            `}
                                    />
                                    <span
                                        className={`
                                                relative z-10 text-xl min-w-[24px]
                                                ${isActive ? "text-[var(--icon-hover-text)]" : "text-[var(--text-primary)]"}
                                                group-hover:text-[var(--icon-hover-text)]
                                                transition-colors duration-300
                                            `}
                                    >
                                        {icon}
                                    </span>

                                    {!isCollapsed && (
                                        <span
                                            className={`
                                                    relative z-10
                                                    ${isActive ? "text-[var(--icon-hover-text)]" : "text-[var(--text-primary)]"}
                                                    group-hover:text-[var(--icon-hover-text)]
                                                    transition-colors duration-300
                                                `}
                                        >
                                            {label}
                                        </span>
                                    )}
                                </>
                            )}
                        </NavLink>


                    ))}
                </nav>
            </div>
        </aside>
    );
};

export default Sidebar;
