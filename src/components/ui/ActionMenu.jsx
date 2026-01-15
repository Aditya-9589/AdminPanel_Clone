import { useState, useRef, useEffect } from "react";

const ActionMenu = ({ items = [] }) => {
    const [open, setOpen] = useState(false);
    const ref = useRef(null);

    // Close on outside click
    useEffect(() => {
        const handler = (e) => {
            if (ref.current && !ref.current.contains(e.target)) {
                setOpen(false);
            }
        };
        document.addEventListener("mousedown", handler);
        return () => document.removeEventListener("mousedown", handler);
    }, []);

    return (
        <div className="relative inline-block" ref={ref}>
            {/* Trigger */}
            <button
                onClick={() => setOpen((v) => !v)}
                className="h-8 w-8 flex items-center justify-center rounded-full
                        hover:bg-[var(--icon-hover-bg)] transition"
            >
                <svg
                    className="h-5 w-5 text-[var(--text-secondary)]"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                >
                    <circle cx="12" cy="5" r="1.5" />
                    <circle cx="12" cy="12" r="1.5" />
                    <circle cx="12" cy="19" r="1.5" />
                </svg>
            </button>

            {/* Menu */}
            {open && (
                <div
                    className="
                        absolute right-0 mt-2 w-44 z-50
                        rounded-lg shadow-lg
                        bg-[var(--bg-card)]
                        border border-[var(--border-color)]
                    "
                >
                    {items.map((item, index) => (
                        <MenuItem
                            key={index}
                            {...item}
                            onClick={() => {
                                item.onClick?.();
                                setOpen(false);
                            }}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

export default ActionMenu;

/* ---------------------------------- */
/* Menu Item */
/* ---------------------------------- */
const MenuItem = ({ icon, label, onClick, danger }) => (
    <button
        onClick={onClick}
        className={`
            w-full px-3 py-2
            flex items-center gap-2
            text-sm text-left
            transition
            ${danger
                ? "text-red-500 hover:bg-red-50 dark:hover:bg-red-500/10"
                : "text-[var(--text-primary)] hover:bg-[var(--icon-hover-bg)]"
            }
        `}
    >
        {icon}
        {label}
    </button>
);
