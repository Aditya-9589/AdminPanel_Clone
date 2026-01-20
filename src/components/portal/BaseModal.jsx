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
        lg: "max-w-3xl",
    };

    return ReactDOM.createPortal(
        <div className="fixed inset-0 z-50 flex items-center justify-center">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/40"
                onClick={onClose}
            />

            {/* Modal */}
            <div
                className={`relative z-10 w-full ${sizeClasses[size]}
                    rounded-xl bg-[var(--bg-card)]
                    shadow-lg p-6`}
            >
                {/* Header */}
                {title && (
                    <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-2">
                        {title}
                    </h3>
                )}

                {/* Body */}
                <div className="text-sm text-[var(--text-primary)]">
                    {children}
                </div>
            </div>
        </div>,
        document.getElementById("portal-root")
    );
};

export default BaseModal;
