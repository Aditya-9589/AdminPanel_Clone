import BaseTooltip from "../tooltips/BaseTooltip";

export const getChartTooltip = (variant) => ({
    cursor: { fill: "var(--border-color)" },
    content: (props) => (
        <BaseTooltip {...props} {...variant} />
    ),
});
