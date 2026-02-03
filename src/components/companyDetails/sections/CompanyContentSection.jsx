import React from "react";
import RichTextEditor from "./editors/RichTextEditor";

const CompanyContentSection = ({ data, onChange }) => {
    return (
        <div className="bg-[var(--bg-card)] rounded-2xl p-6 shadow-sm mb-6">

            {/* Header */}
            <div className="mb-6">
                <h2 className="text-lg font-semibold text-[var(--text-primary)]">
                    Company Content
                </h2>
                <p className="text-sm text-[var(--text-secondary)]">
                    Manage public-facing company information and policies
                </p>
            </div>

            <div className="space-y-8">

                {/* About Us */}
                <div>
                    {/* <label className="form-label mb-2">About Us</label> */}
                    {/* Placeholder editor */}
                    {/* <textarea
                        rows={6}
                        placeholder="Write about your company..."
                        value={data.aboutUs}
                        onChange={(e) => onChange({ aboutUs: e.target.value })}
                        className="w-full rounded-xl border border-[var(--border-color)]
                            bg-transparent p-4 text-sm
                            focus:outline-none focus:ring-2
                            focus:ring-[var(--color-brand)]"
                    /> */}
                    {/* <p className="mt-2 text-xs text-[var(--text-secondary)]">
                        This content appears on your public About page.
                    </p> */}


                    <RichTextEditor
                        label="About Us"
                        value={data.aboutUs}
                        onChange={(html) => onChange({ aboutUs: html })}
                        helperText="This content appears on your public About page."
                    />

                </div>

                {/* Company Policy */}
                <div>
                    {/* <label className="form-label mb-2">Company Policy</label> */}

                    {/* <textarea
                        rows={6}
                        placeholder="Write company policies..."
                        value={data.companyPolicy}
                        onChange={(e) => onChange({ companyPolicy: e.target.value })}
                        className="w-full rounded-xl border border-[var(--border-color)]
                            bg-transparent p-4 text-sm
                            focus:outline-none focus:ring-2
                            focus:ring-[var(--color-brand)]"
                    /> */}
                    {/* <p className="mt-2 text-xs text-[var(--text-secondary)]">
                        Terms, rules, and internal policies shown to users.
                    </p> */}


                    <RichTextEditor
                        label="Company Policy"
                        value={data.companyPolicy}
                        onChange={(html) => onChange({ companyPolicy: html })}
                        helperText="Terms, rules, and internal policies shown to users."
                    />

                </div>

                {/* Help & Support */}
                <div>
                    {/* <label className="form-label mb-2">Help & Support</label> */}

                    {/* <textarea
                        rows={6}
                        placeholder="Support information, FAQs, contact process..."
                        value={data.helpSupport}
                        onChange={(e) => onChange({ helpSupport: e.target.value })}
                        className="w-full rounded-xl border border-[var(--border-color)]
                            bg-transparent p-4 text-sm
                            focus:outline-none focus:ring-2
                            focus:ring-[var(--color-brand)]"
                    /> */}
                    {/* <p className="mt-2 text-xs text-[var(--text-secondary)]">
                        Support instructions visible to customers.
                    </p> */}
                    

                    <RichTextEditor
                        label="Help & Support"
                        value={data.helpSupport}
                        onChange={(html) => onChange({ helpSupport: html })}
                        helperText="Support instructions visible to customers."
                    />

                </div>

            </div>
        </div>
    );
};

export default CompanyContentSection;
