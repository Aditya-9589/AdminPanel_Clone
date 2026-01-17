import {
    PieChart,
    Pie,
    Cell,
    ResponsiveContainer,
    Tooltip
} from "recharts";

import BaseTooltip from "../../charts/tooltips/BaseTooltip";
import { tooltipVariants } from "../../charts/tooltips/Variants";

import { trafficDistributionData } from "../../chartData/dashboard2/TrafficDistributionData";

import ActionMenu from "../../components/ui/ActionMenu";

import {
    ArrowPathIcon,
    ChartBarIcon,
    EyeIcon,
} from "@heroicons/react/24/outline";

export default function TrafficDistributionCard() {
    const menuItems = [
        {
            label: "Refresh data",
            // label: "Action",
            icon: <ArrowPathIcon className="h-4 w-4" />,
            onClick: () => console.log("Refresh traffic"),
        },
        {
            label: "View details",
            // label: "Some Action",
            icon: <EyeIcon className="h-4 w-4" />,
            onClick: () => console.log("View traffic details"),
        },
        {
            label: "Open analytics",
            // label: "Another Action",
            icon: <ChartBarIcon className="h-4 w-4" />,
            onClick: () => console.log("Open analytics"),
        },
    ];

    return (
        <div className="bg-[var(--bg-card)] rounded-2xl p-6 shadow-sm h-full flex flex-col">
            {/* Header */}
            <div className="flex justify-between mb-6">
                <h5 className="font-semibold text-lg">Traffic Distribution</h5>

                {/* ✅ Replace your 3-dots button with ActionMenu */}
                <ActionMenu items={menuItems} />
            </div>

            <div className="flex flex-col md:flex-row gap-6 items-center">
                {/* Donut */}
                <div className="h-[260px] w-[260px]">
                    <ResponsiveContainer>
                        <PieChart>
                            <Pie
                                data={trafficDistributionData}
                                dataKey="value"
                                innerRadius={85}
                                outerRadius={110}
                                paddingAngle={2}
                            >
                                {trafficDistributionData.map((item, i) => (
                                    <Cell key={i} fill={item.color} />
                                ))}
                            </Pie>

                            <Tooltip
                                cursor={{ fill: "var(--border-color)" }}
                                content={(props) => (
                                    <BaseTooltip
                                        {...props}
                                        {...tooltipVariants.traffic}
                                    />
                                )}
                            />


                        </PieChart>
                    </ResponsiveContainer>
                </div>

                {/* Legend */}
                <div className="flex flex-col gap-6">
                    {trafficDistributionData.map((item, i) => (
                        <div key={i} className="flex gap-3 items-start">
                            <span
                                className="h-5 w-5 rounded-full border-2"
                                style={{ borderColor: item.color }}
                            />

                            <div>
                                <h6 className="font-medium">
                                    {item.value.toLocaleString()}
                                    {item.name === "Organic Traffic" && (
                                        <span className="ml-2 text-success text-xs">+23%</span>
                                    )}
                                </h6>

                                <p className="text-sm text-[var(--text-secondary)]">
                                    {item.name}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
