import { useState, useCallback } from "react";

import CompanyBrandingSection from "./sections/CompanyBrandingSection";
import CompanyBasicInfoSection from "./sections/CompanyBasicInfoSection";
import CompanyContactSection from "./sections/CompanyContactSection";
import CompanySocialSection from "./sections/CompanySocialSection";
import CompanyContentSection from "./sections/CompanyContentSection";
import CompanySaveBar from "./CompanySaveBar";

const CompanyDetailsPage = () => {

    const [isDirty, setIsDirty] = useState(false);
    const [isSaving, setIsSaving] = useState(false);

    /**
     *  SINGLE SOURCE OF TRUTH
     */
    const [companyDetails, setCompanyDetails] = useState({
        branding: {
            profileImage: null,
            logo: null,
        },
        basicInfo: {
            name: "",
            type: "",
            industry: "",
            yearFounded: "",
            size: "",
            description: "",
        },
        contact: {
            email: "",
            phone: "",
            addressLine1: "",
            addressLine2: "",
            city: "",
            state: "",
            country: "",
            pincode: "",
        },
        social: {
            website: "",
            linkedin: "",
            twitter: "",
            facebook: "",
            // instagram: "",
        },
        content: {
            aboutUs: "",
            companyPolicy: "",
            helpSupport: "",
        },
    });

    /**
     *  GENERIC SECTION UPDATE HANDLER
     */
    const updateSection = useCallback((sectionKey, updatedValues) => {
        setCompanyDetails((prev) => ({
            ...prev,
            [sectionKey]: {
                ...prev[sectionKey],
                ...updatedValues,
            },
        }));
        setIsDirty(true);
    }, []);

    /**
     *  BRANDING IMAGE HANDLER
     */
    const updateBranding = useCallback((updatedValues) => {
        setCompanyDetails((prev) => ({
            ...prev,
            branding: {
                ...prev.branding,
                ...updatedValues,
            },
        }));
        setIsDirty(true);
    }, []);

    /**
     *  SAVE HANDLER
     */
    const handleSave = async () => {
        setIsSaving(true);

        console.log("Saving company details:", companyDetails);

        // API call here
        await new Promise(res => setTimeout(res, 1000));

        setIsSaving(false);
        setIsDirty(false);
    };

    const handleCancel = () => {
        // later: reset to last saved snapshot
        setIsDirty(false);
    };

    return (
        // <div className="space-y-6 pb-24">
        <div className="bg-[var(--bg-page)]">

            <div className="max-w-7xl mx-auto px-6 space-y-6 pb-6 ">

                {/* Branding */}
                <CompanyBrandingSection
                    data={companyDetails.branding}
                    onChange={updateBranding}
                />

                {/* Basic Info */}
                <CompanyBasicInfoSection
                    data={companyDetails.basicInfo}
                    onChange={(data) => updateSection("basicInfo", data)}
                />

                {/* Contact */}
                <CompanyContactSection
                    data={companyDetails.contact}
                    onChange={(data) => updateSection("contact", data)}
                />

                {/* Social */}
                <CompanySocialSection
                    data={companyDetails.social}
                    onChange={(data) => updateSection("social", data)}
                />

                {/* Content */}
                <CompanyContentSection
                    data={companyDetails.content}
                    onChange={(data) => updateSection("content", data)}
                />

            </div>


            <div className="max-w-7xl mx-auto px-6 pb-10 space-y-6">
                {/* sections */}
                <CompanySaveBar
                    isDirty={isDirty}
                    isSaving={isSaving}
                    onSave={handleSave}
                    onCancel={handleCancel}
                />
            </div>

        </div>
    );
};

export default CompanyDetailsPage;
