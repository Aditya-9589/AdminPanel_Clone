import React from "react";

const CompanyBrandingSection = ({ data, onChange }) => {
    const renderPreview = (file) => {
        if (!file) return null;
        return URL.createObjectURL(file);
    };

    return (
        <div className="bg-[var(--bg-card)] rounded-2xl p-6 shadow-sm mb-6">

            {/* Header */}
            <div className="mb-6">
                <h2 className="text-lg font-semibold text-[var(--text-primary)]">
                    Company Branding
                </h2>
                <p className="text-sm text-[var(--text-secondary)]">
                    Upload your company profile image and logo
                </p>
            </div>

            {/* Content */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                {/* Profile Image */}
                <div>
                    <p className="text-sm font-medium text-[var(--text-primary)] mb-3">
                        Company Profile Image
                    </p>

                    <div className="flex items-center gap-4">
                        <div
                            className="
                                h-20 w-20 rounded-full overflow-hidden
                                border border-[var(--border-color)]
                                flex items-center justify-center
                                bg-[var(--icon-hover-bg)]
                            "
                        >
                            {data.profileImage ? (
                                <img
                                    src={renderPreview(data.profileImage)}
                                    alt="Profile"
                                    className="h-full w-full object-cover"
                                />
                            ) : (
                                <span className="text-xs text-[var(--text-secondary)]">
                                    No Image
                                </span>
                            )}
                        </div>

                        <label className="
                                    px-4 py-2 rounded-lg border
                                    border-[var(--border-color)]
                                    text-sm font-medium
                                    hover:bg-[var(--icon-hover-bg)]
                                    cursor-pointer
                                "
                        >
                            Upload
                            <input
                                type="file"
                                accept="image/png,image/jpeg"
                                className="hidden"
                                onChange={(e) =>
                                    onChange({ profileImage: e.target.files[0] })
                                }
                            />
                        </label>
                    </div>
                </div>

                {/* Logo / Favicon */}
                <div>
                    <p className="text-sm font-medium text-[var(--text-primary)] mb-3">
                        Company Logo
                    </p>

                    <div className="flex items-center gap-4">
                        <div
                            className="
                                h-20 w-20 rounded-xl overflow-hidden
                                border border-[var(--border-color)]
                                flex items-center justify-center
                                bg-[var(--icon-hover-bg)]
                            "
                        >
                            {data.logo ? (
                                <img
                                    src={renderPreview(data.logo)}
                                    alt="Logo"
                                    className="h-full w-full object-contain"
                                />
                            ) : (
                                <span className="text-xs text-[var(--text-secondary)]">
                                    No Logo
                                </span>
                            )}
                        </div>

                        <label className="
                                    px-4 py-2 rounded-lg border
                                    border-[var(--border-color)]
                                    text-sm font-medium
                                    hover:bg-[var(--icon-hover-bg)]
                                    cursor-pointer
                                "
                        >
                            Upload
                            <input
                                type="file"
                                accept="image/png,image/jpeg"
                                className="hidden"
                                onChange={(e) =>
                                    onChange({ logo: e.target.files[0] })
                                }
                            />
                        </label>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default CompanyBrandingSection;
