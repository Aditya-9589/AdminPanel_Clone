// charts/tooltips/BaseTooltip.jsx

const BaseTooltip = ({
    active,
    payload,
    label,
    className = "",
    labelClass = "",
    itemClass = "",
    showName = true,
    valueFormatter = (v) => (v),
}) => {
    if (!active || !payload?.length) return null;

    return (
        <div
            className={`
                rounded-xl border shadow-lg px-4 py-3
                bg-white border-gray-200
                ${className}
            `}
        >
            <p className={`text-sm font-semibold mb-2 ${labelClass}`}>
                {label}
            </p>

            {payload.map((item, idx) => (
                <div
                    key={idx}
                    className={`flex justify-between items-center text-sm gap-2 ${itemClass}`}
                >
                    <div className="flex items-center gap-2">
                        <span
                            className="w-2 h-2 rounded-full"
                            style={{ backgroundColor: item.color }}
                        />

                        {showName && (
                            <span className="capitalize text-gray-500">
                                {item.name}
                            </span>
                        )}
                    </div>

                    <span className="font-medium text-gray-900">
                        {valueFormatter(item.value)}
                        {/* {item.value} */}
                    </span>
                </div>
            ))}
        </div>
    );
};

export default BaseTooltip;
