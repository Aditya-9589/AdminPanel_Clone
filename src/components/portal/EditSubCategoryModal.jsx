import { useState, useEffect } from "react";
import BaseModal from "../portal/BaseModal";

const EditSubCategoryModal = ({ open, onClose, subcategory, onSave }) => {
    const [formData, setFormData] = useState({
        name: "",
        createdAt: "",
        image: null,
    });

    useEffect(() => {
        if (subcategory) {
            setFormData({
                name: subcategory.name || "",
                createdAt: subcategory.createdAt || "",
                image: null,
            });
        }
    }, [subcategory]);

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: files ? files[0] : value,
        }));
    };

    const handleSave = () => {
        if (!formData.name) return;

        onSave({
            ...subcategory,
            name: formData.name,
            createdAt: formData.createdAt,
            image: formData.image || subcategory.image,
        });

        onClose();
    };

    return (
        <BaseModal
            open={open}
            onClose={onClose}
            title="Edit Subcategory"
            size="lg"
        >
            <div className="space-y-6 p-4">

                {/* Basic Information */}
                <div>
                    <h3 className="text-sm font-semibold text-[var(--text-secondary)] mb-3 uppercase">
                        Basic Information
                    </h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <input
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Subcategory Name"
                            className="form-input"
                        />

                        <input
                            name="createdAt"
                            type="date"
                            value={formData.createdAt}
                            onChange={handleChange}
                            className="form-input"
                        />
                    </div>
                </div>

                {/* Image */}
                <section>
                    <h3 className="mb-4 text-sm font-semibold text-[var(--text-secondary)] uppercase">
                        Subcategory Image
                    </h3>

                    <label className="
                        flex flex-col items-center justify-center
                        border-2 border-dashed border-[var(--border-color)]
                        rounded-xl p-6 cursor-pointer
                        hover:border-[var(--color-brand)]
                        hover:bg-[var(--icon-hover-bg)]
                        transition
                    ">
                        <span className="text-sm text-[var(--text-secondary)]">
                            Click to upload PNG or JPG
                        </span>

                        <input
                            type="file"
                            accept="image/png,image/jpeg"
                            name="image"
                            onChange={handleChange}
                            className="hidden"
                        />
                    </label>
                </section>

                {/* Footer */}
                <div className="pt-4 flex justify-end gap-3 border-t border-[var(--border-color)]">
                    <button
                        onClick={onClose}
                        className="px-4 py-2 rounded-lg border hover:bg-[var(--icon-hover-bg)]"
                    >
                        Cancel
                    </button>

                    <button
                        onClick={handleSave}
                        className="px-5 py-2 rounded-lg bg-[var(--color-brand)] text-white font-medium"
                    >
                        Update Subcategory
                    </button>
                </div>

            </div>
        </BaseModal>
    );
};

export default EditSubCategoryModal;
