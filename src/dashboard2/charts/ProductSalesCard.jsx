import { productSalesData } from "../../chartData/dashboard2/ProductSalesChart";

import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    ResponsiveContainer,
    CartesianGrid
} from "recharts";

import { Tooltip } from "recharts";
import { tooltipVariants } from "../../charts/tooltips/variants";
import { getChartTooltip } from "../../charts/helpers/ChartTooltip";


export default function ProductSalesCard() {
    return (
        <div className="bg-[var(--color-bg-card)] rounded-2xl p-6 shadow-sm h-full">
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-[var(--color-text-primary)]">
                    Product Sales
                </h3>
                <span className="text-[var(--text-secondary)] cursor-pointer">⋮</span>
            </div>

            {/* Chart */}
            <ResponsiveContainer width="100%" height={200}>
                <LineChart data={productSalesData}>

                    <CartesianGrid
                        horizontal
                        vertical={false}
                        stroke="var(--chart-grid)"
                        strokeDasharray="3 3"
                    />

                    <XAxis
                        dataKey="year"
                        axisLine={false}
                        tickLine={false}
                        tick={{
                            fill: "var(--chart-axis)",
                            fontSize: 12,
                            fontWeight: 500,
                        }}
                    />

                    {/* <YAxis /> */}

                    <Tooltip {...getChartTooltip(tooltipVariants.productSales)} />

                    <Line
                        type="monotone"
                        dataKey="value"
                        stroke="var(--chart-primary)"
                        strokeWidth={3}
                        dot={false}
                    />
                </LineChart>
            </ResponsiveContainer>

            {/* Footer stats */}
            <div className="mt-6 flex items-center gap-4">
                <div className="h-10 w-10 rounded-full bg-[var(--icon-hover-bg)] flex items-center justify-center">
                    <span className="text-[var(--icon-hover-text)] font-semibold">👤</span>
                </div>

                <div>
                    <p className="text-lg font-semibold text-[var(--color-text-primary)]">
                        36,436
                    </p>

                    <div className="flex items-center gap-2 text-sm">
                        <span className="text-[var(--chart-success)] bg-green-100 px-2 py-0.5 rounded-full">
                            +12%
                        </span>
                        <span className="text-[var(--text-secondary)]">
                            New Customer
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}
