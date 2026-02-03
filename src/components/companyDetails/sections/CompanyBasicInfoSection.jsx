import React from "react";

const CompanyBasicInfoSection = ({ data, onChange }) => {
    return (
        <div className="bg-[var(--bg-card)] rounded-2xl p-6 shadow-sm mb-6">

            {/* Header */}
            <div className="mb-6">
                <h2 className="text-lg font-semibold text-[var(--text-primary)]">
                    Company Basic Information
                </h2>
                <p className="text-sm text-[var(--text-secondary)]">
                    Basic details about your company
                </p>
            </div>

            {/* Form */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                {/* Company Name */}
                <div>
                    <label className="form-label">Company Name</label>
                    <input
                        type="text"
                        value={data.companyName}
                        onChange={(e) => onChange({ companyName: e.target.value })}
                        placeholder="Enter company name"
                        className="form-input"
                    />
                </div>

                {/* Company Type */}
                <div>
                    <label className="form-label">Company Type</label>
                    <input
                        type="text"
                        value={data.companyType}
                        onChange={(e) => onChange({ companyType: e.target.value })}
                        placeholder="e.g. Private, Public, Startup"
                        className="form-input"
                    />
                </div>

                {/* Industry */}
                <div>
                    <label className="form-label">Industry</label>
                    <input
                        type="text"
                        value={data.industry}
                        onChange={(e) => onChange({ industry: e.target.value })}
                        placeholder="e.g. Ecommerce, Fintech"
                        className="form-input"
                    />
                </div>

                {/* Year Founded */}
                <div>
                    <label className="form-label">Year Founded</label>
                    <input
                        type="number"
                        value={data.yearFounded}
                        onChange={(e) => onChange({ yearFounded: e.target.value })}
                        placeholder="e.g. 2019"
                        className="form-input"
                    />
                </div>

                {/* Company Size */}
                <div>
                    <label className="form-label">Company Size</label>
                    <input
                        type="text"
                        value={data.companySize}
                        onChange={(e) => onChange({ companySize: e.target.value })}
                        placeholder="e.g. 11–50 employees"
                        className="form-input"
                    />
                </div>

            </div>

            {/* About Company */}
            <div className="mt-6">
                <label className="form-label">About Company</label>
                <textarea
                    rows={4}
                    value={data.aboutCompany}
                    onChange={(e) => onChange({ aboutCompany: e.target.value })}
                    placeholder="Short description about your company"
                    className="form-input resize-none"
                />
            </div>

        </div>
    );
};

export default CompanyBasicInfoSection;
