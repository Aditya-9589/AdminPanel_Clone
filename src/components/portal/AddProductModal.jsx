import { useState } from "react";
import BaseModal from "./BaseModal";

const AddProductModal = ({ isOpen, onClose, onSubmit }) => {
    const [form, setForm] = useState({
        name: "",
        category: "",
        brand: "",
        color: "",
        weight: "",
        length: "",
        width: "",
        description: "",
        stock: 1,
        availability: "",
        image: null,
    });

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        setForm((prev) => ({
            ...prev,
            [name]: files ? files[0] : value,
        }));
    };

    return (
        <BaseModal open={isOpen} onClose={onClose} size="lg">
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-[var(--border-color)]">
                <h2 className="text-lg font-semibold text-[var(--text-primary)]">
                    Add New Product
                </h2>
                <button
                    onClick={onClose}
                    className="text-[var(--text-secondary)] hover:text-red-500 text-xl"
                >
                    ×
                </button>
            </div>

            {/* Body */}
            {/* <div className="p-6 space-y-8"> */}
            <div className="px-6 py-6 space-y-8">

                {/* Basic Info */}
                <section>
                    <h3 className="mb-4 text-sm font-semibold text-[var(--text-secondary)] uppercase">
                        Basic Information
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <input name="name" placeholder="Product Name" onChange={handleChange} className="form-input" />
                        <select name="category" onChange={handleChange} className="form-input">
                            <option value="">Category</option>
                            <option>Laptop</option>
                            <option>Phone</option>
                            <option>Watch</option>
                            <option>Electronics</option>
                        </select>
                    </div>
                </section>

                {/* Attributes */}
                <section>
                    <h3 className="mb-4 text-sm font-semibold text-[var(--text-secondary)] uppercase">
                        Attributes
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <select name="brand" onChange={handleChange} className="form-input">
                            <option value="">Brand</option>
                            <option>Apple</option>
                            <option>Samsung</option>
                            <option>LG</option>
                        </select>

                        <select name="color" onChange={handleChange} className="form-input">
                            <option value="">Color</option>
                            <option>Black</option>
                            <option>White</option>
                            <option>Silver</option>
                            <option>Gold</option>
                        </select>
                    </div>
                </section>

                {/* Dimensions */}
                <section>
                    <h3 className="mb-4 text-sm font-semibold text-[var(--text-secondary)] uppercase">
                        Dimensions
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <input name="weight" placeholder="Weight (kg)" onChange={handleChange} className="form-input" />
                        <input name="length" placeholder="Length (cm)" onChange={handleChange} className="form-input" />
                        <input name="width" placeholder="Width (cm)" onChange={handleChange} className="form-input" />
                    </div>
                </section>

                {/* Description */}
                <section>
                    <h3 className="mb-4 text-sm font-semibold text-[var(--text-secondary)] uppercase">
                        Description
                    </h3>
                    <textarea
                        name="description"
                        rows={4}
                        placeholder="Product description..."
                        onChange={handleChange}
                        className="form-input resize-none"
                    />
                </section>

                {/* Inventory */}
                <section>
                    <h3 className="mb-4 text-sm font-semibold text-[var(--text-secondary)] uppercase">
                        Inventory
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <input type="number" name="stock" min={1} onChange={handleChange} className="form-input" />
                        <select name="availability" onChange={handleChange} className="form-input">
                            <option value="">Availability</option>
                            <option>In Stock</option>
                            <option>Out of Stock</option>
                        </select>
                    </div>
                </section>

                {/* Image Upload */}
                <section>
                    <h3 className="mb-4 text-sm font-semibold text-[var(--text-secondary)] uppercase">
                        Product Image
                    </h3>

                    <label className="flex flex-col items-center justify-center border-2 border-dashed rounded-xl p-6 cursor-pointer hover:border-blue-500 transition">
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

            </div>

            {/* Footer */}
            {/* <div className="sticky bottom-0 bg-[var(--bg-card)] px-6 py-4 border-t border-[var(--border-color)] flex justify-end gap-3"> */}
            <div className="sticky bottom-0 px-6 py-4 flex justify-end gap-3 bg-[var(--bg-card)] border-t border-[var(--border-color)] backdrop-blur z-10">
                <button
                    onClick={onClose}
                    className="
                            inline-flex items-center justify-center
                            px-5 py-2.5
                            rounded-lg
                            text-sm font-medium
                            border border-[var(--border-color)]
                            text-[var(--text-primary)]
                            bg-transparent
                            transition-all duration-150
                            hover:bg-[var(--icon-hover-bg)]
                            focus:outline-none
                            focus:ring-2 focus:ring-[var(--border-color)]
                            active:scale-[0.97]
                        "
                >
                    Cancel
                </button>

                <button
                    onClick={() => onSubmit(form)}
                    className="
                            inline-flex items-center justify-center
                            px-6 py-2.5
                            rounded-lg
                            text-sm font-semibold
                            text-white
                            bg-[var(--color-brand)]
                            transition-all duration-150
                            hover:bg-[var(--color-brand-dark)]
                            focus:outline-none
                            focus:ring-2 focus:ring-[var(--color-brand)]
                            active:scale-[0.97]
                        "
                >
                    Add Product
                </button>

            </div>
        </BaseModal>

    );
};

export default AddProductModal;
