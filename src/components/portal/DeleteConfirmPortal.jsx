import BaseModal from "./BaseModal";

const DeleteConfirmPortal = ({ open, onClose, onConfirm }) => {
    return (
        <BaseModal open={open} onClose={onClose} title="Delete Product" size="sm">
            <div className="space-y-4">

                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                    Are you sure you want to delete this product?
                    <br />
                    <span className="text-red-600 font-medium">
                        This action cannot be undone.
                    </span>
                </p>

                <div className="pt-4 flex justify-end gap-3 border-t border-[var(--border-color)]">
                    <button
                        onClick={onClose}
                        className="px-4 py-2 rounded-lg border
                                border-[var(--border-color)]
                                hover:bg-[var(--icon-hover-bg)]
                            "
                    >
                        Cancel
                    </button>

                    <button
                        onClick={onConfirm}
                        className="px-5 py-2 rounded-lg
                                bg-red-600 text-white font-medium
                                hover:bg-red-700
                            "
                    >
                        Yes, Delete
                    </button>
                </div>

            </div>
        </BaseModal>

    );
};

export default DeleteConfirmPortal;
