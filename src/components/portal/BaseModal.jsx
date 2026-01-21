import ReactDOM from "react-dom";

const BaseModal = ({
    open,
    onClose,
    title,
    children,
    size = "md", // sm | md | lg
}) => {
    if (!open) return null;

    const sizeClasses = {
        sm: "max-w-sm",
        md: "max-w-md",
        lg: "max-w-4xl",
    };

    return ReactDOM.createPortal(
        <div className="fixed inset-0 z-50 flex items-center justify-center">
            
            {/* Backdrop */}
            <div
                // className="absolute inset-0 bg-black/40 backdrop-blur-[1px]"
                className="absolute inset-0 bg-black/40"
                onClick={onClose}
            />

            {/* Modal */}
            <div
                className={`relative z-10 w-full ${sizeClasses[size]}
                    rounded-2xl bg-[var(--bg-card)]
                    shadow-2xl border border-[var(--border-color)]
                    flex flex-col
                    overflow-hidden
                    ${size === "lg" ? "max-h-[86vh]" : ""}
                `}
                onClick={(e) => e.stopPropagation()}
            >
                {/* Header */}
                {title && (
                    <div className="px-6 py-4 border-b border-[var(--border-color)]">
                        <h3 className="text-lg font-semibold text-[var(--text-primary)]">
                            {title}
                        </h3>
                    </div>
                )}

                {/* Body */}
                {/* <div className="px-6 py-5 text-sm text-[var(--text-primary)] flex-1 overflow-y-auto"> */}
                {/* <div className="px-6 py-5 text-sm text-[var(--text-primary)] flex-1 overflow-y-auto dashboard-scroll"> */}
                <div className="flex-1 overflow-y-auto dashboard-scroll">
                    {children}
                </div> 
            </div>
        </div>,
        document.getElementById("portal-root")
    );

};

export default BaseModal;
