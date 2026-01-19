import { NavLink } from "react-router-dom";
import { FiHome, FiLayout, FiFileText } from "react-icons/fi";
import { useSidebar } from "../../context/useSidebar";
import logo from "../../assets/avatar/logo_image_5.png";
import { sidebarSections } from "./sidebarData";


const Sidebar = () => {
    const { isCollapsed } = useSidebar();

    return (
        <aside
            className={`
                bg-[var(--bg-card)] text-[var(--text-primary)]
                shadow-md transition-all duration-300
                ${isCollapsed ? "w-20" : "w-64"}
                h-full rounded-2xl flex flex-col
            `}
        >
            {/* LOGO */}
            <div className={`h-16 flex items-center ${isCollapsed ? "justify-center" : "px-4"}`}>
                <img src={logo} alt="Spike Admin" className="w-8 h-8" />
                {!isCollapsed && (
                    <span className="ml-3 text-lg font-bold">Spike Admin</span>
                )}
            </div>

            {/* SECTIONS */}
            <div className="mt-6 space-y-6 px-3">
                {sidebarSections.map((section) => (
                    <div key={section.title}>
                        {!isCollapsed && (
                            <p className="text-xs font-semibold text-[var(--text-secondary)] mb-2 uppercase">
                                {section.title}
                            </p>
                        )}

                        <nav className="space-y-1">
                            {section.items.map((item) => {
                                const Icon = item.icon;

                                return (
                                    <NavLink
                                        key={item.path}
                                        to={item.path}
                                        className="group relative flex items-center gap-3 px-4 py-2 rounded-md text-sm font-medium"
                                    >
                                        {({ isActive }) => (
                                            <>
                                                {/* Active Background  */}
                                                <span
                                                    className={`
                                                    absolute inset-0 bg-[var(--icon-hover-bg)]
                                                    transition-transform duration-300
                                                    ${isActive ? "scale-x-100" : "scale-x-0"}
                                                    origin-left group-hover:scale-x-100
                                                `}
                                                />
                                                {/* Icon  */}
                                                <span
                                                    className={`
                                                    ${isActive ? "text-[var(--icon-hover-text)]" : ""}
                                                    relative z-10 text-lg
                                                `}
                                                >
                                                    {/* {item.icon} */}
                                                    <Icon />
                                                </span>


                                                {/* {!isCollapsed && (
                                                    <span className="relative z-10">{item.label}</span>
                                                )} */}

                                                {!isCollapsed && (
                                                    <span
                                                        className={`
                                                            relative z-10
                                                            ${isActive
                                                                ? "text-[var(--icon-hover-text)]"
                                                                : "text-[var(--text-primary)]"}
                                                        `}
                                                    >
                                                        {item.label}
                                                    </span>
                                                )}

                                            </>
                                        )}
                                    </NavLink>
                                )
                            })}
                        </nav>
                    </div>
                ))}
            </div>
        </aside>
    );
};

export default Sidebar;