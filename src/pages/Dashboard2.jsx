import WelcomeCard from "../dashboard2/cards/WelcomeCard";
import KpiCard from "../dashboard2/cards/KpiCard";

import ProfitExpensesChart from "../dashboard2/charts/ProfitExpensesCard";
import ProductSalesChart from "../dashboard2/charts/ProductSalesCard";

import UpcomingSchedules from "../dashboard2/cards/UpcomingSchedules";
import TopEmployees from "../dashboard2/cards/TopEmployees";

import { DollarSign, ArrowDownLeft, TrendingUp } from "lucide-react";

import EngagementSection from "../dashboard2/sections/EngagementSection";


const Dashboard2 = () => {
    return (
        <div className="space-y-6">

            {/* ================= ROW 1 — Welcome + KPI cards ================= */}
            <div className="grid grid-cols-12 gap-6 items-stretch">

                {/* Welcome Card: full on mobile, half on lg */}
                <div className="col-span-12 lg:col-span-6">
                    <WelcomeCard />
                </div>

                {/* KPI Cards: full on mobile, 1 per row on xs, 3 per row on sm+ */}
                <div className="col-span-12 lg:col-span-6">
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-6 h-full">

                        <KpiCard
                            icon={<TrendingUp size={20} />}
                            value="235"
                            percentage={23}
                            label="Sales"
                            bgColor="bg-blue-600"
                        />

                        <KpiCard
                            icon={<DollarSign size={20} />}
                            value="356"
                            percentage={8}
                            label="Refunds"
                            bgColor="bg-blue-600"
                        />

                        <KpiCard
                            icon={<ArrowDownLeft size={20} />}
                            value="280"
                            percentage={-3}
                            label="Earnings"
                            bgColor="bg-blue-600"
                        />

                    </div>
                </div>
            </div>


            {/* ================= ROW 2 — Charts, stacked on tablet/mobile ================= */}
            <div className="grid grid-cols-12 gap-6">

                <div className="col-span-12 lg:col-span-8">
                    <ProfitExpensesChart />
                </div>

                <div className="col-span-12 lg:col-span-4">
                    <ProductSalesChart />
                </div>

            </div>

            {/* ================= ROW 3 — EngagementSection (has own internal grid) ================= */}
            <div className="grid grid-cols-12 gap-6">
                <div className="col-span-12">
                    <EngagementSection />
                </div>
            </div>

            {/* ================= ROW 4 — Schedules + TopEmployees, stacked on mobile ================= */}
            <div className="grid grid-cols-12 gap-6">

                <div className="col-span-12 lg:col-span-4">
                    <UpcomingSchedules />
                </div>

                <div className="col-span-12 lg:col-span-8">
                    <TopEmployees />
                </div>

            </div>

        </div>
    );
};

export default Dashboard2;
