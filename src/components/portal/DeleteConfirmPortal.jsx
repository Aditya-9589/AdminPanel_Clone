import ReactDOM from "react-dom";

const DeleteConfirmPortal = ({ open, onClose, onConfirm }) => {
    if (!open) return null;

    return ReactDOM.createPortal(
        <div className="fixed inset-0 z-50 flex items-center justify-center">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/40"
                onClick={onClose}
            />

            {/* Modal */}
            <div className="relative z-10 w-full max-w-md rounded-xl
                            bg-[var(--bg-card)] p-6 shadow-lg">
                <h3 className="text-lg font-semibold text-[var(--text-primary)]">
                    Delete Product
                </h3>

                <p className="mt-2 text-sm text-[var(--text-secondary)]">
                    Are you sure you want to delete this product?
                    This action cannot be undone.
                </p>

                <div className="mt-6 flex justify-end gap-3">
                    <button
                        onClick={onClose}
                        className="px-4 py-2 rounded-md border
                                border-[var(--border-color)]
                                text-sm text-[var(--text-primary)]
                                hover:bg-[var(--icon-hover-bg)]"
                    >
                        Cancel
                    </button>

                    <button
                        onClick={onConfirm}
                        className="px-4 py-2 rounded-md text-sm
                                bg-red-600 text-white
                                hover:bg-red-700"
                    >
                        Yes, Delete
                    </button>
                </div>
            </div>
        </div>,
        document.getElementById("portal-root")
    );
};

export default DeleteConfirmPortal;
