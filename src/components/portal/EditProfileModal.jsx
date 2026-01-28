import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { FiX } from "react-icons/fi";

const EditProfileModal = ({ isOpen, onClose, profile, onSave }) => {
    const [formData, setFormData] = useState(profile);

    useEffect(() => {
        setFormData(profile);
    }, [profile]);

    if (!isOpen) return null;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleAddressChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            address: {
                ...prev.address,
                [name]: value,
            },
        }));
    };

    const handleSocialChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            socials: {
                ...prev.socials,
                [name]: value,
            },
        }));
    };

    const handleSave = () => {
        onSave(formData);
        onClose();
    };

    const Field = ({ label, children }) => (
        <div className="space-y-1.5">
            <label className="text-sm font-medium text-[var(--text-secondary)]">
                {label}
            </label>
            {children}
        </div>
    );


    return createPortal(
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
            <div className="bg-[var(--bg-card)] w-full max-w-3xl rounded-2xl relative">

                {/* Header */}
                <div className="flex justify-between items-start px-6 py-5 ">
                    <div>
                        <h2 className="text-lg font-semibold">
                            Edit Personal Information
                        </h2>
                        <p className="text-sm text-[var(--text-secondary)]">
                            Update your details to keep your profile up-to-date.
                        </p>
                    </div>

                    <button
                        onClick={onClose}
                        className="
                            p-2
                            rounded-full
                            border border-[var(--border-color)]
                            text-[var(--text-secondary)]
                            hover:bg-rose-300
                            hover:text-red-600
                            transition
                        "
                    >
                        <FiX size={22} />
                    </button>

                </div>

                {/* Scrollable Body */}
                <div className="max-h-[70vh] overflow-y-auto px-6 py-6 space-y-8">

                    {/* Social Links */}
                    {/* Social Links */}
                    <div>
                        <h3 className="text-md font-semibold mb-4">
                            Social Links
                        </h3>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <Field label="Facebook">
                                <input
                                    name="facebook"
                                    value={formData.socials.facebook}
                                    onChange={handleSocialChange}
                                    placeholder="https://facebook.com/username"
                                    className="input"
                                />
                            </Field>

                            <Field label="X (Twitter)">
                                <input
                                    name="twitter"
                                    value={formData.socials.twitter}
                                    onChange={handleSocialChange}
                                    placeholder="https://x.com/username"
                                    className="input"
                                />
                            </Field>

                            <Field label="LinkedIn">
                                <input
                                    name="linkedin"
                                    value={formData.socials.linkedin}
                                    onChange={handleSocialChange}
                                    placeholder="https://linkedin.com/in/username"
                                    className="input"
                                />
                            </Field>

                            <Field label="Instagram">
                                <input
                                    name="instagram"
                                    value={formData.socials.instagram}
                                    onChange={handleSocialChange}
                                    placeholder="https://instagram.com/username"
                                    className="input"
                                />
                            </Field>
                        </div>
                    </div>


                    {/* Personal Information */}
                    {/* Personal Information */}
                    <div>
                        <h3 className="text-md font-semibold mb-4">
                            Personal Information
                        </h3>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <Field label="First Name">
                                <input
                                    name="firstName"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    className="input"
                                />
                            </Field>

                            <Field label="Last Name">
                                <input
                                    name="lastName"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                    className="input"
                                />
                            </Field>

                            <Field label="Email Address">
                                <input
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="input"
                                />
                            </Field>

                            <Field label="Phone">
                                <input
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className="input"
                                />
                            </Field>

                            <Field label="Bio">
                                <input
                                    name="bio"
                                    value={formData.bio}
                                    onChange={handleChange}
                                    className="input md:col-span-2"
                                />
                            </Field>
                        </div>
                    </div>


                    {/* Address Information */}
                    {/* Address Information */}
                    <div>
                        <h3 className="text-md font-semibold mb-4">
                            Address Information
                        </h3>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <Field label="Country">
                                <input
                                    name="country"
                                    value={formData.address.country}
                                    onChange={handleAddressChange}
                                    className="input"
                                />
                            </Field>

                            <Field label="State / City">
                                <input
                                    name="state"
                                    value={formData.address.state}
                                    onChange={handleAddressChange}
                                    className="input"
                                />
                            </Field>

                            <Field label="Postal Code">
                                <input
                                    name="postalCode"
                                    value={formData.address.postalCode}
                                    onChange={handleAddressChange}
                                    className="input"
                                />
                            </Field>

                            <Field label="Tax ID">
                                <input
                                    name="taxId"
                                    value={formData.address.taxId}
                                    onChange={handleAddressChange}
                                    className="input"
                                />
                            </Field>
                        </div>
                    </div>
                </div>

                {/* Footer */}
                <div className="flex justify-end gap-3 px-6 py-4">
                    <button
                        onClick={onClose}
                        className="
                            px-4 py-2
                            rounded-lg
                            border border-[var(--border-color)]
                            text-sm font-medium
                            hover:bg-[var(--icon-hover-bg)]
                            transition
                        "
                    >
                        Close
                    </button>
                    <button
                        onClick={handleSave}
                        className="px-5 py-2 bg-blue-600 text-white rounded-lg"
                    >
                        Save Changes
                    </button>
                </div>

            </div>
        </div>,
        document.getElementById("portal-root")
    );
};

export default EditProfileModal;
