
import {
    LineChart,
    Line,
    ResponsiveContainer,
    Tooltip,
    Area,
    XAxis,
} from "recharts";
import { customersData } from "../../chartData/CustomersChart";
import BaseTooltip from "../../charts/tooltips/BaseTooltip";
import { tooltipVariants } from "../../charts/tooltips/Variants";

const CustomersChart = () => {
    return (
        // <div className="bg-[var(--bg-card)] rounded-2xl p-6 shadow-sm w-[20rem]">
        <div className="bg-[var(--bg-card)] rounded-xl p-6 shadow-sm h-full flex flex-col">


            {/* HEADER */}
            <div className="flex justify-between items-start mb-4">
                <div>
                    <h3 className="text-lg font-semibold text-[var(--text-primary)]">
                        Customers
                    </h3>
                    <p className="text-sm text-[var(--text-secondary)]">
                        Last 7 Days
                    </p>
                </div>

                <div className="text-right">
                    <p className="text-lg font-semibold text-[var(--text-primary)]">
                        6,380
                    </p>
                    <span
                        className="inline-flex items-center text-xs font-medium px-2.5 py-0.5 rounded-full border
                                bg-green-100 text-green-600 border-green-400
                        "
                    // style={{
                    //     background: "var(--chart-success)",
                    //     color: "#fff",
                    //     borderColor: "var(--chart-success)",
                    // }}
                    >
                        +28.5%
                    </span>
                </div>
            </div>

            {/* CHART */}
            <div className="h-[120px]">
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={customersData}>
                        {/* Gradient */}
                        <defs>
                            <linearGradient id="customersGradient" x1="0" y1="0" x2="0" y2="1">
                                <stop
                                    offset="0%"
                                    stopColor="var(--chart-primary)"
                                    stopOpacity={0.25}
                                />
                                <stop
                                    offset="100%"
                                    stopColor="var(--chart-primary)"
                                    stopOpacity={0}
                                />
                            </linearGradient>
                        </defs>

                        {/* Area */}
                        <Area
                            type="monotone"
                            dataKey="value"
                            stroke="none"
                            fill="url(#customersGradient)"
                        />

                        {/* Line */}
                        <Line
                            type="monotone"
                            dataKey="value"
                            stroke="var(--chart-primary)"
                            strokeWidth={3}
                            dot={false}
                            activeDot={{
                                r: 6,
                                fill: "var(--chart-primary)",
                                stroke: "var(--bg-card)",
                                strokeWidth: 2,
                            }}
                        />

                        {/* Tooltip */}
                        <Tooltip
                            cursor={{
                                stroke: "var(--chart-axis)",
                                strokeDasharray: "4 4",
                            }}
                            content={(props) => {
                                const filteredPayload = props.payload?.filter(
                                    (item) =>
                                        item.stroke === "var(--chart-primary)"
                                );

                                return (
                                    <BaseTooltip
                                        {...props}
                                        payload={filteredPayload}
                                        {...tooltipVariants.customers}
                                    />
                                );
                            }}
                        />
                    </LineChart>
                </ResponsiveContainer>
            </div>

            {/* FOOTER */}
            <div className="mt-6 text-sm text-[var(--text-secondary)] space-y-1">
                <div className="flex justify-between">
                    <span>April 07 – April 14</span>
                    <span className="font-medium">6,380</span>
                </div>
                <div className="flex justify-between">
                    <span>Last Week</span>
                    <span>4,298</span>
                </div>
            </div>

        </div>
    );
};

export default CustomersChart;

