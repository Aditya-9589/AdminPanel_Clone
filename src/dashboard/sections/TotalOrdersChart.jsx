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
        <div className="bg-white rounded-xl p-6 shadow-sm">

            {/* HEADER */}
            <div className="flex items-center justify-between mb-6">
                <div>
                    <h3 className="text-lg font-semibold text-gray-900">
                        Total Orders
                    </h3>
                    <p className="text-sm text-gray-400">
                        Weekly Order Updates
                    </p>
                </div>

                <button className="text-sm px-3 py-1.5 border rounded-lg text-gray-600 hover:bg-gray-50">
                    This Week
                </button>
            </div>

            {/* CHART */}
            <div className="h-[260px]">
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart
                        data={totalOrdersLineData}
                        margin={{ top: 10, right: 10, left: -10, bottom: 0 }}
                    >
                        <CartesianGrid
                            stroke="#E5E7EB"
                            strokeDasharray="3 3"
                            vertical={true}
                            horizontal={true}
                        />

                        <XAxis
                            dataKey="name"
                            axisLine={false}
                            tickLine={false}
                            tick={{ fill: "#9CA3AF", fontSize: 12 }}
                        />

                        <YAxis
                            axisLine={false}
                            tickLine={false}
                            tick={{ fill: "#9CA3AF", fontSize: 12 }}
                            tickFormatter={(value) => `${value}k`}
                        />

                        <Tooltip
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
                            stroke="#38BDF8"
                            strokeWidth={3}
                            dot={false}
                        />

                        {/* CURRENT */}
                        <Line
                            type="monotone"
                            dataKey="current"
                            stroke="#2563EB"
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
