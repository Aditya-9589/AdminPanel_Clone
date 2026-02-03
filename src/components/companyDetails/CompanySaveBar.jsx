const CompanySaveBar = ({ isDirty, isSaving, onSave, onCancel }) => {
    if (!isDirty) return null;

    return (
        <div className="
            sticky bottom-4
            bg-[var(--bg-card)]
            border border-[var(--border-color)]
            rounded-2xl
            px-6 py-4
            flex items-center justify-between
            shadow-sm
            z-10
        ">
            {/* Left info */}
            <div className="flex items-center gap-3 text-sm text-[var(--text-secondary)]">
                <span className="h-2.5 w-2.5 rounded-full bg-yellow-500"></span>
                <span>You have unsaved changes</span>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-3">
                <button
                    onClick={onCancel}
                    className="
                        px-4 py-2
                        rounded-lg
                        border border-[var(--border-color)]
                        text-sm font-medium
                        hover:bg-[var(--icon-hover-bg)]
                        cursor-pointer
                    "
                >
                    Cancel
                </button>

                <button
                    onClick={onSave}
                    disabled={isSaving}
                    className="
                        px-5 py-2
                        rounded-lg
                        bg-[var(--color-brand)]
                        text-white
                        text-sm font-medium
                        disabled:opacity-50
                        cursor-pointer
                    "
                >
                    {isSaving ? "Saving..." : "Save Changes"}
                </button>
            </div>
        </div>
    );
};

export default CompanySaveBar;
