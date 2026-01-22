import { FiEdit } from "react-icons/fi";

const InfoItem = ({ label, value }) => (
    <div className="space-y-1">
        <p className="text-sm text-[var(--text-secondary)]">
            {label}
        </p>
        <p className="text-sm font-medium text-[var(--text-primary)]">
            {value || "-"}
        </p>
    </div>
);

const AddressInfoCard = ({ address, onEdit }) => {
    return (
        <div
            className="
                bg-[var(--bg-card)]
                border border-[var(--border-color)]
                rounded-xl
                p-6
            "
        >
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-semibold text-[var(--text-primary)]">
                    Address Information
                </h2>

                <button
                    onClick={onEdit}
                    className="
                        flex items-center gap-2
                        text-sm
                        px-3 py-1.5
                        rounded-full
                        border
                        hover:bg-[var(--icon-hover-bg)]
                        transition
                    "
                >
                    <FiEdit />
                    Edit
                </button>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-6">
                <InfoItem label="Country" value={address.country} />
                <InfoItem label="State / City" value={address.state} />

                <InfoItem label="Postal Code" value={address.postalCode} />
                <InfoItem label="Tax ID" value={address.taxId} />
            </div>
        </div>
    );
};

export default AddressInfoCard;
