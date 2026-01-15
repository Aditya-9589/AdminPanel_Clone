import React from "react";

const KpiCard = ({
    icon,
    value,
    percentage,
    label,
    // bgColor = "bg-blue-600",
    // accent = "bg-blue-800",
}) => {
    const isPositive = percentage >= 0;

    return (
        <div
            className={`
                relative overflow-hidden
                rounded-2xl p-6 h-full
                bg-[var(--color-brand)]
                text-white
                shadow-md
                transition-transform
            `}
        >
            {/* Decorative Shape */}
            <div
                className={`
                    absolute -top-6 -right-6
                    h-28 w-28 rounded-full
                    opacity-20
                    bg-[var(--color-brand-light)]
                `}
                // className={`
                //     absolute -top-6 -right-6
                //     h-28 w-28 rounded-full
                //     opacity-20
                //     ${accent}
                // `}
            />

            <div className="relative flex flex-col gap-6">
                {/* Icon */}
                <div className="h-10 w-10 flex items-center justify-center rounded-full bg-white/20">
                    {icon}
                </div>

                {/* Content */}
                <div>
                    <div className="flex items-baseline gap-2">
                        <h3 className="text-2xl font-semibold">
                            {value}
                        </h3>

                        <span
                            className={`
                                text-xs font-medium
                                ${isPositive ? "text-green-200" : "text-red-200"}
                            `}
                        >
                            {isPositive ? "+" : ""}
                            {percentage}%
                        </span>
                    </div>

                    <p className="text-sm text-white/80 mt-1">
                        {label}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default KpiCard;
