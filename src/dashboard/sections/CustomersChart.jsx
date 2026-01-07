import {
    LineChart,
    Line,
    ResponsiveContainer,
    Tooltip,
    Area,
} from "recharts";
import { customersData } from "../../chartData/CustomersChart"

const CustomersChart = () => {
    return (
        <div className="bg-white rounded-2xl p-6 shadow-sm w-[360px]">

            {/* HEADER */}
            <div className="flex justify-between items-start mb-4">
                <div>
                    <h3 className="text-lg font-semibold text-gray-900">
                        Customers
                    </h3>
                    <p className="text-sm text-gray-400">
                        Last 7 Days
                    </p>
                </div>

                <div className="text-right">
                    <p className="text-lg font-semibold text-gray-900">
                        6,380
                    </p>
                    <span className="
                        inline-flex items-center
                        text-xs font-medium
                        text-green-600
                        bg-green-100
                        border border-green-300
                        px-2.5 py-0.5
                        rounded-full
                        transition-colors
                        hover:bg-green-500 hover:text-white
                    ">
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
                                <stop offset="0%" stopColor="#007BFF" stopOpacity={0.25} />
                                <stop offset="100%" stopColor="#007BFF" stopOpacity={0} />
                            </linearGradient>
                        </defs>

                        {/* Area (fade) */}
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
                            stroke="#007BFF"
                            strokeWidth={3}
                            dot={false}
                        />

                        {/* Tooltip (optional, very minimal) */}
                        <Tooltip
                            cursor={false}
                            content={({ payload }) =>
                                payload?.length ? (
                                    <div className="bg-white px-3 py-1 rounded-md shadow text-sm">
                                        {payload[0].value}
                                    </div>
                                ) : null
                            }
                        />
                    </LineChart>
                </ResponsiveContainer>
            </div>

            {/* FOOTER */}
            <div className="mt-6 text-sm text-gray-500 space-y-1">
                <div className="flex justify-between">
                    <span>April 07 – April 14</span>
                    <span className="text-gray-400 font-medium">6,380</span>
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
