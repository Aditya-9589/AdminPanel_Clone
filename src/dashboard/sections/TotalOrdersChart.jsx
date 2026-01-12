
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
} from "recharts";

import { totalOrdersLineData } from "../../chartData/totalOrdersLine";
import BaseTooltip from "../../charts/tooltips/BaseTooltip";
import { tooltipVariants } from "../../charts/tooltips/Variants";

const TotalOrdersChart = () => {
    return (
        <div className="bg-[var(--bg-card)] rounded-xl p-6 shadow-sm w-[48rem]">

            {/* HEADER */}
            <div className="flex items-center justify-between mb-6">
                <div>
                    <h3 className="text-lg font-semibold text-[var(--text-primary)]">
                        Total Orders
                    </h3>
                    <p className="text-sm text-[var(--text-secondary)]">
                        Weekly Order Updates
                    </p>
                </div>

                <button
                    className="
                        text-sm px-3 py-1.5 border rounded-lg
                        text-[var(--text-secondary)]
                        border-[var(--border-color)]
                        hover:bg-[var(--icon-hover-bg)]
                        hover:text-[var(--icon-hover-text)]
                        transition-colors
                    "
                >
                    This Week
                </button>
            </div>

            {/* CHART */}
            <div className="h-[16.2rem]">
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart
                        data={totalOrdersLineData}
                        margin={{ top: 10, right: 10, left: -10, bottom: 0 }}
                    >
                        <CartesianGrid
                            stroke="var(--chart-grid)"
                            strokeDasharray="3 3"
                        />

                        <XAxis
                            dataKey="name"
                            axisLine={false}
                            tickLine={false}
                            tick={{ fill: "var(--chart-axis)", fontSize: 12 }}
                        />

                        <YAxis
                            axisLine={false}
                            tickLine={false}
                            tick={{ fill: "var(--chart-axis)", fontSize: 12 }}
                            tickFormatter={(value) => `${value}k`}
                        />

                        <Tooltip
                            cursor={{ fill: "var(--border-color)" }}
                            content={(props) => (
                                <BaseTooltip
                                    {...props}
                                    {...tooltipVariants.totalOrders}
                                />
                            )}
                        />

                        {/* PREVIOUS */}
                        <Line
                            type="monotone"
                            dataKey="previous"
                            stroke="var(--chart-primary)"
                            strokeWidth={3}
                            dot={false}
                        />

                        {/* CURRENT */}
                        <Line
                            type="monotone"
                            dataKey="current"
                            stroke="var(--chart-secondary)"
                            strokeWidth={3}
                            dot={false}
                        />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default TotalOrdersChart;
