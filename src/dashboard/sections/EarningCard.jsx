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
        <div className="bg-white rounded-xl p-4 w-[400px] shadow-sm">

            {/* HEADER  */}
            <div className="flex items-start justify-between mb-4">
                <div>
                    <h3 className='text-sm font-semibold text-gray-900' >Earning</h3>
                    <p className='text-xs text-gray-400' >Last 7 days</p>
                </div>

                <div className='text-right' >
                    <p className='text-lg font-semibold text-gray-900' >12,389</p>
                    <span className='inline-block text-xs  font-medium text-orange-400 bg-orange-100 
                        border border-orange-400 px-2 py-0. rounded-full transition-colors
                        hover:bg-orange-400 hover:text-white' >
                        -3.8%
                    </span>
                </div>
            </div>

            {/* CHART  */}
            <div className='h-[180px]' >
                <ResponsiveContainer width="100%" height="100%" >
                    <BarChart
                        data={dashboard_1_BarChart}
                        // margin={{ top: 10, right: 0, left: -20, bottom: 0 }}
                        // barGap={6}
                        margin={{ top: 10, right: 0, left: -50, bottom: 0 }}
                        barCategoryGap="20%"
                    >
                        <XAxis
                            dataKey="name"
                            axisLine={false}
                            tickLine={false}
                            tick={{
                                fill: "#9CA3AF",
                                fontSize: 12,
                                fontWeight: 500,
                            }}

                            padding={{ left: 0, right: 0 }}
                        />

                        <YAxis
                            axisLine={false}
                            tickLine={false}
                            tick={false}
                        />

                        {/* <Tooltip 
                            cursor={{ fill: "rgba(0, 0, 0, 0.04)" }}
                        /> */}

                        {/* <Tooltip
                            cursor={{ fill: "rgba(0, 0, 0, 0.04)" }}
                            contentStyle={{
                                backgroundColor: "#ffffff",
                                borderRadius: "12px",
                                border: "1px solid #E5E7EB",
                                boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
                                padding: "12px",
                            }}
                            labelStyle={{
                                fontWeight: 600,
                                marginBottom: "6px",
                            }}
                            itemStyle={{
                                fontSize: "14px",
                            }}
                        /> */}

                        <Tooltip
                            cursor={{ fill: "rgba(0,0,0,0.04)" }}
                            content={(props) => (
                                <BaseTooltip
                                    {...props}
                                    {...tooltipVariants.earning}
                                />
                            )}
                        />


                        {/* PAYPAL TOP  */}
                        <Bar
                            dataKey="paypal"
                            stackId="a"
                            fill="#0084DA"
                            radius={[10, 10, 10, 10]}
                            barSize={14}
                        >
                            {/* <LabelList position="top" fontSize={11} fill="#111827" /> */}
                        </Bar>

                        {/* AMAZON (BOTTOM)  */}
                        <Bar
                            dataKey="amazon"
                            stackId="a"
                            fill="#DFDFDF"
                            radius={[10, 10, 10, 10]}
                            barSize={14}
                        >
                            {/* <LabelList position="top" fontSize={11} fill="#9CA3AF" /> */}
                        </Bar>

                    </BarChart>
                </ResponsiveContainer>
            </div>

            {/* CUSTOm LEGEND  */}
            <div className="mt-4 space-y-2">
                <div className="flex items-center justify-between text-sm text-gray-600 ">
                    <div className="flex items-center gap-2" >
                        <span className="w-3 h-3 rounded-full border-2 border-[#0084DA]" />
                        Paypal
                    </div>
                    <span>52%</span>
                </div>

                <div className="flex items-center justify-between text-sm text-gray-600" >
                    <div className="flex items-center gap-2" >
                        <span className="w-3 h-3 rounded-full border-2 border-gray-300" ></span>
                        Amazon
                    </div>
                    <span>48%</span>
                </div>
            </div>

        </div>
    )
}

export default EarningCard
