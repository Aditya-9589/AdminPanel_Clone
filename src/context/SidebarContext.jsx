
import { createContext, useState, useEffect } from "react";

export const SidebarContext = createContext();

export const SidebarProvider = ({ children }) => {
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);
    const [isMobileOpen, setIsMobileOpen] = useState(false);

    useEffect(() => {
        const mediaQuery = window.matchMedia("(max-width: 1023px)");
        const handleChange = (e) => {
            setIsMobile(e.matches);
            if (!e.matches) {
                // Switched to desktop — close any open mobile drawer
                setIsMobileOpen(false);
            }
        };
        mediaQuery.addEventListener("change", handleChange);
        return () => mediaQuery.removeEventListener("change", handleChange);
    }, []);

    const toggleSidebar = () => {
        // setIsCollapsed((prev) => !prev);
        if (isMobile) {
            setIsMobileOpen((prev) => !prev);
        } else {
            setIsCollapsed((prev) => !prev);
        }
    };

    const closeMobileSidebar = () => setIsMobileOpen(false);

    return (
        // <SidebarContext.Provider value={{ isCollapsed, toggleSidebar }}>
        <SidebarContext.Provider
            value={{ isCollapsed, toggleSidebar, isMobile, isMobileOpen, closeMobileSidebar }}
        >
            {children}
        </SidebarContext.Provider>
    );
};
