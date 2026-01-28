import BaseModal from "./BaseModal";

const DeleteConfirmPortal = ({
    open,
    onClose,
    onConfirm,
    title = "Delete Item",
    description = "Are you sure you want to delete this item?",
    warningText = "This action cannot be undone."
}) => {
    return (
        <BaseModal open={open} onClose={onClose} title={title} size="sm" >
            <div className="space-y-3 p-4">

                <p className="text-sm text-[var(--text-secondary)]">
                    {description}
                </p>

                <p className="text-sm text-red-500 font-medium">
                    {warningText}
                </p>

                <div className="pt-4 flex justify-end gap-3 border-t border-[var(--border-color)]">
                    <button
                        onClick={onClose}
                        className="px-4 py-2 rounded-md border border-[var(--border-color)]
                                hover:bg-[var(--icon-hover-bg)]"
                    >
                        Cancel
                    </button>

                    <button
                        onClick={onConfirm}
                        className="px-4 py-2 rounded-md bg-red-600 text-white"
                    >
                        Yes, Delete
                    </button>
                </div>

            </div>
        </BaseModal>
    );
};

export default DeleteConfirmPortal;
