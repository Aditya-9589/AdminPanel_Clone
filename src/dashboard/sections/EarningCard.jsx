import React from 'react'
// import  StatsOverview  from "./dashboard/sections/StatsOverview"

import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    Pie,
    PieChart,
    ResponsiveContainer,
    LabelList,
} from 'recharts';
// import { data_1, data_2 } from "../chartData/Data"
import { dashboard_1_BarChart } from "../../chartData/Data"
// import { RechartsDevtools } from '@recharts/devtools';

// import { Tooltip } from "recharts";
import BaseTooltip from "../../charts/tooltips/BaseTooltip";
import { tooltipVariants } from "../../charts/tooltips/Variants";


const EarningCard = () => {
    return (
        // <div className="bg-[var(--bg-card)] rounded-xl p-4 w-[25rem] shadow-sm">
        <div className="bg-[var(--bg-card)] rounded-xl p-4 shadow-sm h-full flex flex-col">

            {/* HEADER */}
            <div className="flex items-start justify-between mb-4">
                <div>
                    <h3 className="text-lg font-semibold text-[var(--text-primary)]">
                        Earning
                    </h3>
                    <p className="text-sm text-[var(--text-secondary)]">
                        Last 7 days
                    </p>
                </div>

                <div className="text-right">
                    <p className="text-lg font-semibold text-[var(--text-primary)]">
                        12,389
                    </p>
                    <span
                        className="
                                inline-block text-xs font-medium
                                text-orange-400 bg-orange-100
                                border border-orange-400
                                px-2 py-0.5 rounded-full
                            "                   
                    >
                        -3.8%
                    </span>
                </div>
            </div>

            {/* CHART */}
            {/* <div className="h-[180px]"> */}
            <div className="flex-1 min-h-0">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                        data={dashboard_1_BarChart}
                        margin={{ top: 10, right: 0, left: -50, bottom: 0 }}
                        barCategoryGap="20%"
                    >
                        <XAxis
                            dataKey="name"
                            axisLine={false}
                            tickLine={false}
                            tick={{
                                fill: "var(--chart-axis)",
                                fontSize: 12,
                                fontWeight: 500,
                            }}
                        />

                        <YAxis axisLine={false} tickLine={false} tick={false} />

                        <Tooltip
                            cursor={{ fill: "var(--border-color)" }}
                            content={(props) => (
                                <BaseTooltip {...props} {...tooltipVariants.earning} />
                            )}
                        />

                        <Bar
                            dataKey="paypal"
                            stackId="a"
                            fill="var(--chart-primary)"
                            radius={[10, 10, 10, 10]}
                            barSize={14}
                        />

                        <Bar
                            dataKey="amazon"
                            stackId="a"
                            fill="var(--chart-secondary)"
                            radius={[10, 10, 10, 10]}
                            barSize={14}
                        />
                    </BarChart>
                </ResponsiveContainer>
            </div>

            {/* CUSTOM LEGEND */}
            <div className="mt-4 space-y-2">
                <div className="flex items-center justify-between text-sm text-[var(--text-secondary)]">
                    <div className="flex items-center gap-2">
                        <span className="w-3 h-3 rounded-full border-2 border-[var(--chart-primary)]" />
                        Paypal
                    </div>
                    <span>52%</span>
                </div>

                <div className="flex items-center justify-between text-sm text-[var(--text-secondary)]">
                    <div className="flex items-center gap-2">
                        <span className="w-3 h-3 rounded-full border-2 border-[var(--chart-secondary)]" />
                        Amazon
                    </div>
                    <span>48%</span>
                </div>
            </div>

        </div>
    );
};

export default EarningCard;
