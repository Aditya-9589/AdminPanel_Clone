// charts/tooltips/variants.js

export const tooltipVariants = {
    earning: {
        className: "bg-gray-800 border-gray-600 text-white",
        // className: "bg-gray-600 border-gray-400 text-white",
        labelClass: "text-white",
        itemClass: "text-gray-200",
        showName: true,
        valueFormatter: (v) => v,
    },

    totalOrders: {
        className: "bg-gray-800 border-gray-600 text-white",
        labelClass: "text-white",
        itemClass: "text-gray-200",
        showName: false,
        valueFormatter: (v) => `${v}k`,
    },

    profit: {
        className: "bg-gray-800 border-gray-600 text-white",
        labelClass: "text-white",
        itemClass: "text-gray-200",
        valueFormatter: (v) => `${v}%`,
    },

    customers: {
        className: "bg-gray-800 border-gray-600 text-white",
        labelClass: "text-white",
        itemClass: "text-gray-200",
        showName: true,
        valueFormatter: (v) => v,
    },
};
