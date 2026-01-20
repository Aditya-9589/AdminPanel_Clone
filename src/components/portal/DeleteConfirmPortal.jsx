import BaseModal from "./BaseModal";

const DeleteConfirmPortal = ({ open, onClose, onConfirm }) => {
    return (
        <BaseModal
            open={open}
            onClose={onClose}
            title="Delete Product"
            size="sm"
        >
            <p className="text-[var(--text-secondary)]">
                Are you sure you want to delete this product?
                This action cannot be undone.
            </p>

            <div className="mt-6 flex justify-end gap-3">
                <button
                    onClick={onClose}
                    className="px-4 py-2 rounded-md border
                        border-[var(--border-color)]
                        hover:bg-[var(--icon-hover-bg)]"
                >
                    Cancel
                </button>

                <button
                    onClick={onConfirm}
                    className="px-4 py-2 rounded-md
                        bg-red-600 text-white hover:bg-red-700"
                >
                    Yes, Delete
                </button>
            </div>
        </BaseModal>
    );
};

export default DeleteConfirmPortal;
