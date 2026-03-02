import { useEffect, useState } from "react";
import BaseModal from "./BaseModal";

const ALL_PERMISSIONS = [
    "Dashboard 1",
    "Dashboard 2",
    "Users",
    "Ecommerce",
    "FAQ",
    "Category",
    "Company Details",
    "Chat Us",
    "Blogs",
    "Roles & Permissions",
];

const RolesFormModal = ({ open, user, onClose, onSave }) => {
    const isEditMode = Boolean(user);

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        image: "",
        permissions: [],
    });

    useEffect(() => {
        if (user) {
            setFormData({
                name: user.name || "",
                email: user.email || "",
                phone: user.phone || "",
                image: user.image || "",
                permissions: user.permissions || [],
            });
        } else {
            resetForm();
        }
    }, [user, open]);

    const resetForm = () => {
        setFormData({
            name: "",
            email: "",
            phone: "",
            image: "",
            permissions: [],
        });
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handlePermissionToggle = (permission) => {
        setFormData((prev) => {
            const exists = prev.permissions.includes(permission);

            return {
                ...prev,
                permissions: exists
                    ? prev.permissions.filter((p) => p !== permission)
                    : [...prev.permissions, permission],
            };
        });
    };

    const handleSave = () => {
        if (!formData.name || !formData.email) return;
        onSave(formData);
        resetForm();
    };

    return (
        <BaseModal
            open={open}
            onClose={onClose}
            title={isEditMode ? "Edit User" : "Add User"}
            size="lg"
        >
            <div className="space-y-6 p-6">

                {/* Basic Info */}
                <section>
                    <h3 className="mb-4 text-sm font-semibold text-[var(--text-secondary)] uppercase">
                        User Information
                    </h3>

                    <div className="space-y-4">
                        <input
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Full Name"
                            className="form-input"
                        />

                        <input
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Email Address"
                            className="form-input"
                        />

                        <input
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="Phone Number"
                            className="form-input"
                        />

                        <input
                            name="image"
                            value={formData.image}
                            onChange={handleChange}
                            placeholder="Profile Image URL"
                            className="form-input"
                        />
                    </div>
                </section>

                {/* Permissions */}
                <section>
                    <h3 className="mb-4 text-sm font-semibold text-[var(--text-secondary)] uppercase">
                        Assign Permissions
                    </h3>

                    <div className="grid grid-cols-2 gap-3 max-h-60 overflow-y-auto dashboard-scroll pr-2">
                        {ALL_PERMISSIONS.map((perm) => (
                            <label
                                key={perm}
                                className="flex items-center gap-2 text-sm cursor-pointer"
                            >
                                <input
                                    type="checkbox"
                                    checked={formData.permissions.includes(perm)}
                                    onChange={() => handlePermissionToggle(perm)}
                                    className="accent-[var(--color-brand)]"
                                />
                                {perm}
                            </label>
                        ))}
                    </div>
                </section>

                {/* Footer (MATCHES BLOG MODAL) */}
                <div className="pt-4 flex justify-end gap-3 border-t border-[var(--border-color)]">
                    <button
                        onClick={onClose}
                        className="px-4 py-2 rounded-lg border
                            border-[var(--border-color)]
                            hover:bg-[var(--icon-hover-bg)] cursor-pointer"
                    >
                        Cancel
                    </button>

                    <button
                        onClick={handleSave}
                        className="px-5 py-2 rounded-lg
                            bg-[var(--color-brand)]
                            text-white font-medium cursor-pointer"
                    >
                        {isEditMode ? "Update User" : "Add User"}
                    </button>
                </div>

            </div>
        </BaseModal>
    );
};

export default RolesFormModal;