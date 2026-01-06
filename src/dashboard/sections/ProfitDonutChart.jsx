import {
    PieChart,
    Pie,
    Cell,
    ResponsiveContainer,
    Tooltip,
} from "recharts";

import { profitData } from "../../chartData/ProfitData"
import BaseTooltip from "../../charts/tooltips/BaseTooltip";
import { tooltipVariants } from "../../charts/tooltips/Variants";


const ProfitDonutChart = () => {
    return (
        <div className="bg-white rounded-xl p-6 shadow-sm w-[400px]">

            {/* HEADER */}
            <div className="flex items-start justify-between mb-6">
                <div>
                    <h3 className="text-lg font-semibold text-gray-900">Profit</h3>
                    <p className="text-sm text-gray-400">Years</p>
                </div>

                <div className="text-right">
                    <p className="text-lg font-semibold text-gray-900">432</p>
                    <span className='inline-block text-xs  font-medium text-green-600 bg-green-100 
                        border border-green-300 px-2 py-0.5 rounded-full transition-colors
                        hover:bg-green-400 hover:text-white' >
                        +26.5%
                    </span>
                </div>
            </div>

            {/* DONUT CHART */}
            <div className="h-[220px]">
                <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                        <Pie
                            data={profitData}
                            dataKey="value"
                            innerRadius={70}
                            outerRadius={90}
                            // paddingAngle={4}
                            // stroke="none"
                            // stroke="#ffffff"
                            // strokeWidth={3}
                            startAngle={90}
                            endAngle={-270}
                            isAnimationActive={false}
                        >
                            {profitData.map((entry, index) => (
                                <Cell 
                                    key={index} 
                                    fill={entry.color} 
                                />
                            ))}
                        </Pie>

                        <Tooltip
                            content={(props) => (
                                <BaseTooltip
                                    {...props}
                                    {...tooltipVariants.profit}
                                    valueFormatter={(v) => `${v}%`}
                                />
                            )}
                        />
                    </PieChart>
                </ResponsiveContainer>
            </div>

            {/* LEGEND */}
            <div className="flex justify-center gap-6 mt-4 text-sm">
                {profitData.map((item) => (
                    <div
                        key={item.name}
                        className="flex items-center gap-2"
                        style={{ color: item.color }}
                    >
                        <span
                            className="w-3 h-3 rounded-full border-2"
                            // style={{ backgroundColor: item.color }}
                            style={{ borderColor: item.color }}
                        />
                        {item.name}
                    </div>
                ))}
            </div>

        </div>
    );
};

export default ProfitDonutChart;
