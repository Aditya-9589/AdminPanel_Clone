// import ProfitExpensesChart from "./charts/ProfitExpensesChart";
import { profitExpensesData } from "../../chartData/dashboard2/ProfitExpensesChart"
import { Tooltip } from "recharts";
import { tooltipVariants } from "../../charts/tooltips/Variants";
import { getChartTooltip } from "../../charts/helpers/ChartTooltip";

import ActionMenu from "../../components/ui/ActionMenu";

import {
    ArrowPathIcon,
    ChartBarIcon,
    EyeIcon,
} from "@heroicons/react/24/outline";

import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    ResponsiveContainer,
    CartesianGrid,
} from "recharts";

const StatRow = ({ label, value, iconBg }) => (
    <div className="flex items-center justify-between">
        <div>
            <p className="text-sm text-[var(--text-secondary)]">{label}</p>
            <p className="text-xl font-semibold text-[var(--color-text-primary)]">
                {value}
            </p>
        </div>
        {/* <div className={`h-9 w-9 rounded-full flex items-center justify-center ${iconBg}`} /> */}
        <div className={`h-9 w-9 rounded-full  ${iconBg}`} />
    </div>
);

export default function ProfitExpensesCard() {

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
    ]

    return (
        <div className="bg-[var(--color-bg-card)] rounded-2xl p-6 shadow-sm">
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-[var(--color-text-primary)]">Profit & Expenses</h3>
                

                {/* <span className="text-[var(--text-secondary)]">⋮</span> */}
                <ActionMenu items={menuItems} />

            </div>

            <div className="grid grid-cols-12 gap-6">
                {/* Chart */}
                <div className="col-span-12 lg:col-span-7">
                    <ResponsiveContainer width="100%" height={280}>
                        <BarChart data={profitExpensesData} barGap={6}>

                            <CartesianGrid
                                horizontal
                                vertical={false}
                                stroke="var(--chart-grid)"
                                strokeDasharray="3 3"
                            />

                            <XAxis
                                dataKey="month"
                                axisLine={false}
                                tickLine={false}
                            />

                            {/* <YAxis /> */}

                            <Tooltip {...getChartTooltip(tooltipVariants.profitExpenses)} />

                            <Bar
                                dataKey="profit"
                                fill="var(--chart-primary"
                                radius={[10, 10, 10, 10]}
                                barSize={12}
                            />

                            <Bar
                                dataKey="expense"
                                fill="var(--chart-secondary"
                                radius={[10, 10, 10, 10]}
                                barSize={12}
                            />
                        </BarChart>
                    </ResponsiveContainer>
                </div>

                {/* Stats */}
                <div className="col-span-12 lg:col-span-5 flex flex-col gap-6">
                    <StatRow label="Profit" value="$63,489.50" iconBg="bg-blue-200" />
                    <StatRow label="Expenses" value="$48,820.00" iconBg="bg-orange-200" />
                    <StatRow label="Overall earnings" value="$103,582.50" iconBg="bg-green-200" />

                    <button className="
                            mt-2 rounded-full py-3
                            bg-[var(--color-brand)]
                            text-white font-medium
                            hover:bg-[var(--color-brand-dark)] transition
                        ">
                        View Full Report
                    </button>
                </div>
            </div>

        </div>
    );
}
