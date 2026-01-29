import { useState } from "react";
import BaseModal from "../portal/BaseModal";

const AddCategoryModal = ({ open, onClose, onSave }) => {
    const [formData, setFormData] = useState({
        product: "",
        category: "",
        brand: "",
        createdAt: "",
        image: null,
    });

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: files ? files[0] : value,
        }));
    };

    const handleSave = () => {
        if (!formData.product || !formData.category) return;
        onSave(formData);
        setFormData({
            product: "",
            category: "",
            brand: "",
            createdAt: "",
            image: null,
        });
    };

    return (
        <BaseModal open={open} onClose={onClose} title="Add New Category" size="lg">
            <div className="space-y-6 p-4">

                {/* Basic Information */}
                <div>
                    <h3 className="text-sm font-semibold text-[var(--text-secondary)] mb-3 uppercase">
                        Basic Information
                    </h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <input
                            name="product"
                            value={formData.product}
                            onChange={handleChange}
                            placeholder="Product Name"
                            className="form-input"
                        />

                        <input
                            name="category"
                            value={formData.category}
                            onChange={handleChange}
                            placeholder="Category"
                            className="form-input"
                        />

                        <input
                            name="createdAt"
                            type="date"
                            value={formData.createdAt}
                            onChange={handleChange}
                            className="form-input"
                        />

                        <input
                            name="brand"
                            value={formData.brand}
                            onChange={handleChange}
                            placeholder="Brand"
                            className="form-input"
                        />
                    </div>
                </div>


                {/* Product Image */}
                <section>
                    <h3 className="mb-4 text-sm font-semibold text-[var(--text-secondary)] uppercase">
                        Product Image
                    </h3>

                    <label
                        className="
                                flex flex-col items-center justify-center
                                border-2 border-dashed border-[var(--border-color)]
                                rounded-xl p-6 cursor-pointer
                                hover:border-[var(--color-brand)]
                                hover:bg-[var(--icon-hover-bg)]
                                transition
                        "
                    >
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
                        className="px-4 py-2 rounded-lg border
                                border-[var(--border-color)]
                                hover:bg-[var(--icon-hover-bg)]"
                    >
                        Cancel
                    </button>

                    <button
                        onClick={handleSave}
                        className="px-5 py-2 rounded-lg
                                bg-[var(--color-brand)]
                                text-white font-medium"
                    >
                        Add Category
                    </button>
                </div>

            </div>
        </BaseModal>
    );
};

export default AddCategoryModal;
