import React from "react";

const CompanyContactSection = ({ data, onChange }) => {
    return (
        <div className="bg-[var(--bg-card)] rounded-2xl p-6 shadow-sm mb-6">

            {/* Header */}
            <div className="mb-6">
                <h2 className="text-lg font-semibold text-[var(--text-primary)]">
                    Company Contact Information
                </h2>
                <p className="text-sm text-[var(--text-secondary)]">
                    Contact details used for communication and support
                </p>
            </div>

            {/* Form */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                {/* Company Email */}
                <div>
                    <label className="form-label">Company Email</label>
                    <input
                        type="email"
                        value={data.email}
                        onChange={(e) => onChange({ email: e.target.value })}
                        placeholder="company@email.com"
                        className="form-input"
                    />
                </div>

                {/* Phone */}
                <div>
                    <label className="form-label">Phone Number</label>
                    <input
                        type="tel"
                        value={data.phone}
                        onChange={(e) => onChange({ phone: e.target.value })}
                        placeholder="+91 98765 43210"
                        className="form-input"
                    />
                </div>

                {/* Address Line 1 */}
                <div className="md:col-span-2">
                    <label className="form-label">Address Line 1</label>
                    <input
                        type="text"
                        value={data.addressLine1}
                        onChange={(e) => onChange({ addressLine1: e.target.value })}
                        placeholder="Street, Building, Area"
                        className="form-input"
                    />
                </div>

                {/* Address Line 2 */}
                <div className="md:col-span-2">
                    <label className="form-label">Address Line 2</label>
                    <input
                        type="text"
                        value={data.addressLine2}
                        onChange={(e) => onChange({ addressLine2: e.target.value })}
                        placeholder="Landmark, Floor (optional)"
                        className="form-input"
                    />
                </div>

                {/* City */}
                <div>
                    <label className="form-label">City</label>
                    <input
                        type="text"
                        value={data.city}
                        onChange={(e) => onChange({ city: e.target.value })}
                        placeholder="City"
                        className="form-input"
                    />
                </div>

                {/* State */}
                <div>
                    <label className="form-label">State</label>
                    <input
                        type="text"
                        value={data.state}
                        onChange={(e) => onChange({ state: e.target.value })}
                        placeholder="State"
                        className="form-input"
                    />
                </div>

                {/* Country */}
                <div>
                    <label className="form-label">Country</label>
                    <input
                        type="text"
                        value={data.country}
                        onChange={(e) => onChange({ country: e.target.value })}
                        placeholder="Country"
                        className="form-input"
                    />
                </div>

                {/* Pincode */}
                <div>
                    <label className="form-label">Pincode / Zip Code</label>
                    <input
                        type="text"
                        value={data.pincode}
                        onChange={(e) => onChange({ pincode: e.target.value })}
                        placeholder="Postal Code"
                        className="form-input"
                    />
                </div>

            </div>
        </div>
    );
};

export default CompanyContactSection;
