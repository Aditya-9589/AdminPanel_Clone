// charts/tooltips/variants.js

export const tooltipVariants = {
    earning: {
        className: "bg-white",
        labelClass: "text-gray-900",
        itemClass: "text-gray-700",
        showName: true,
        valueFormatter: (v) => v,
    },

    totalOrders: {
        className: "bg-white border-gray-200",
        labelClass: "text-gray-900",
        itemClass: "text-gray-700",
        showName: false,
        valueFormatter: (v) => `${v}k`,
    },

    orders: {
        className: "bg-blue-50 border-blue-200",
        labelClass: "text-blue-900",
        itemClass: "text-blue-800",
    },

    profit: {
        className: "bg-green-50 border-green-200",
        labelClass: "text-green-900",
        itemClass: "text-green-800",
    },
};
