import Portal from "../portal/Portal";

const ConfirmDelete = ({
    open,
    title = "Delete Product",
    message = "Are you sure you want to delete this product?",
    onConfirm,
    onCancel,
}) => {
    if (!open) return null;

    return (
        <Portal>
            {/* Backdrop */}
            <div className="fixed inset-0 z-[9999] bg-black/50 flex items-center justify-center">

                {/* Modal Box */}
                <div className="w-full max-w-md rounded-2xl bg-[var(--bg-card)] p-6 shadow-xl">

                    {/* Title */}
                    <h3 className="text-lg font-semibold text-[var(--text-primary)]">
                        {title}
                    </h3>

                    {/* Message */}
                    <p className="mt-2 text-sm text-[var(--text-secondary)]">
                        {message}
                    </p>

                    {/* Actions */}
                    <div className="mt-6 flex justify-end gap-3">
                        <button
                            onClick={onCancel}
                            className="px-4 py-2 rounded-lg text-sm font-medium
                                border border-[var(--border-color)]
                                text-[var(--text-primary)]
                                hover:bg-[var(--icon-hover-bg)]
                                transition"
                        >
                            Cancel
                        </button>

                        <button
                            onClick={onConfirm}
                            className="px-4 py-2 rounded-lg text-sm font-medium
                                bg-red-500 text-white
                                hover:bg-red-600 transition"
                        >
                            Yes, Delete
                        </button>
                    </div>
                </div>
            </div>
        </Portal>
    );
};

export default ConfirmDelete;
