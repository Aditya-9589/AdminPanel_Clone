
import {
    PieChart,
    Pie,
    Cell,
    ResponsiveContainer,
    Tooltip,
} from "recharts";

import { profitData } from "../../chartData/ProfitData";
import BaseTooltip from "../../charts/tooltips/BaseTooltip";
import { tooltipVariants } from "../../charts/tooltips/Variants";

const ProfitDonutChart = () => {
    return (
        // <div className="bg-[var(--bg-card)] rounded-xl p-6 shadow-sm w-[25rem]">
        <div className="bg-[var(--bg-card)] rounded-xl p-6 shadow-sm h-full flex flex-col">


            {/* HEADER */}
            <div className="flex items-start justify-between mb-6">
                <div>
                    <h3 className="text-lg font-semibold text-[var(--text-primary)]">
                        Profit
                    </h3>
                    <p className="text-sm text-[var(--text-secondary)]">
                        Years
                    </p>
                </div>

                <div className="text-right">
                    <p className="text-lg font-semibold text-[var(--text-primary)]">
                        432
                    </p>
                    <span
                        className="inline-block text-xs font-medium px-2 py-0.5 rounded-full border
                                bg-green-100 border-green-400 text-green-600        
                        "
                    // style={{
                    //     background: "",
                    //     color: "#fff",
                    //     borderColor: "var(--chart-success)",
                    // }}
                    >
                        +26.5%
                    </span>
                </div>
            </div>

            {/* DONUT CHART */}
            {/* <div className="h-[220px]"> */}
            <div className="flex-1 min-h-0 flex items-center justify-center">
                <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                        <Pie
                            data={profitData}
                            dataKey="value"
                            innerRadius={50}
                            outerRadius={70}
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
                            cursor={{ fill: "var(--border-color)" }}
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
            <div className="flex justify-center gap-6 mt-4 text-sm text-[var(--text-secondary)]">
                {profitData.map((item) => (
                    <div
                        key={item.name}
                        className="flex items-center gap-2"
                    >
                        <span
                            className="w-3 h-3 rounded-full border-2"
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
