import React from "react";

const CompanySocialSection = ({ data, onChange }) => {
    return (
        <div className="bg-[var(--bg-card)] rounded-2xl p-6 shadow-sm mb-6">

            {/* Header */}
            <div className="mb-6">
                <h2 className="text-lg font-semibold text-[var(--text-primary)]">
                    Company Social Profiles
                </h2>
                <p className="text-sm text-[var(--text-secondary)]">
                    Public links visible on website and communication pages
                </p>
            </div>

            {/* Form */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                {/* Website */}
                <div>
                    <label className="form-label">Company Website</label>
                    <input
                        type="url"
                        placeholder="https://www.company.com"
                        value={data.website}
                        onChange={(e) => onChange({ website: e.target.value })}
                        className="form-input"
                    />
                </div>

                {/* LinkedIn */}
                <div>
                    <label className="form-label">LinkedIn</label>
                    <input
                        type="url"
                        placeholder="https://linkedin.com/company/xyz"
                        value={data.linkedin}
                        onChange={(e) => onChange({ linkedin: e.target.value })}
                        className="form-input"
                    />
                </div>

                {/* Twitter / X */}
                <div>
                    <label className="form-label">Twitter / X</label>
                    <input
                        type="url"
                        placeholder="https://x.com/xyz"
                        value={data.twitter}
                        onChange={(e) => onChange({ twitter: e.target.value })}
                        className="form-input"
                    />
                </div>

                {/* Facebook */}
                <div>
                    <label className="form-label">Facebook</label>
                    <input
                        type="url"
                        placeholder="https://facebook.com/xyz"
                        value={data.facebook}
                        onChange={(e) => onChange({ facebook: e.target.value })}
                        className="form-input"
                    />
                </div>

            </div>
        </div>
    );
};

export default CompanySocialSection;
