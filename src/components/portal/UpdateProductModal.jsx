import React, { useState, useEffect } from 'react'
import BaseModal from "./BaseModal";

const UpdateProductModal = ({ open, onClose, product, onSave }) => {

    const [formData, setFormData] = useState({
        name: "",
        category: "",
        brand: "",
        price: "",
        stock: "",
    });

    useEffect(() => {
        if (product) {
            setFormData({
                name: product.name,
                category: product.category,
                brand: product.brand,
                price: product.price,
                stock: product.stock,
            });
        }
    }, [product]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    return (
        <BaseModal open={open} onClose={onClose} title="Update Product" size="md">
            <div className="space-y-5">

                {/* Fields */}
                {["name", "category", "brand", "price"].map((field) => (
                    <input
                        key={field}
                        name={field}
                        value={formData[field]}
                        onChange={handleChange}
                        placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                        className="form-input"
                    />
                ))}

                <select
                    name="stock"
                    value={formData.stock}
                    onChange={handleChange}
                    className="form-input"
                >
                    <option value="In Stock">In Stock</option>
                    <option value="Out of Stock">Out of Stock</option>
                </select>

                {/* Footer */}
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
                        onClick={() => onSave(formData)}
                        className="px-5 py-2 rounded-lg
                                bg-[var(--color-brand)]
                                text-white font-medium
                                hover:bg-[var(--color-brand-dark)]
                            "
                    >
                        Update
                    </button>
                </div>

            </div>
        </BaseModal>

    )
}

export default UpdateProductModal