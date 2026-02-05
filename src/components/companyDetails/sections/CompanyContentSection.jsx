

import RichTextEditor from "./editors/RichTextEditor";

const CompanyContentSection = ({ data, onChange }) => {
    return (
        <div className="bg-[var(--bg-card)] rounded-2xl p-6 shadow-sm mb-6">

            <div className="mb-6">
                <h2 className="text-lg font-semibold text-[var(--text-primary)]">
                    Company Content
                </h2>
                <p className="text-sm text-[var(--text-secondary)]">
                    Manage public-facing company information and policies
                </p>
            </div>

            <div className="space-y-10">

                {/* About Us */}
                <div>
                    <label className="form-label mb-2">About Us</label>
                    <RichTextEditor
                        value={data.aboutUs || ""}
                        placeholder="Write about your company..."
                        onChange={(value) => onChange({ aboutUs: value })}
                    />
                </div>

                {/* Company Policy */}
                <div>
                    <label className="form-label mb-2">Company Policy</label>
                    <RichTextEditor
                        value={data.companyPolicy || ""}
                        placeholder="Write company policies..."
                        onChange={(value) => onChange({ companyPolicy: value })}
                    />
                </div>

                {/* Help & Support */}
                <div>
                    <label className="form-label mb-2">Help & Support</label>
                    <RichTextEditor
                        value={data.helpSupport || ""}
                        placeholder="Support instructions, FAQs..."
                        onChange={(value) => onChange({ helpSupport: value })}
                    />
                </div>

            </div>
        </div>
    );
};

export default CompanyContentSection;
