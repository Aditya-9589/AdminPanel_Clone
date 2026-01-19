import WelcomeCard from "../dashboard2/cards/WelcomeCard";
import KpiCard from "../dashboard2/cards/KpiCard";

import ProfitExpensesChart from "../dashboard2/charts/ProfitExpensesCard";
import ProductSalesChart from "../dashboard2/charts/ProductSalesCard";

import UpcomingSchedules from "../dashboard2/cards/UpcomingSchedules";
import TopEmployees from "../dashboard2/cards/TopEmployees";

import { DollarSign, ArrowDownLeft, TrendingUp } from "lucide-react";
// import KpiCard from "../dashboard2/cards/KpiCard";

import EngagementSection from "../dashboard2/sections/EngagementSection";

// import Portal from "../components/portal/Portal"

const Dashboard2 = () => {
    return (
        <div className="space-y-6">

            {/* ================= ROW 1 ================= */}
            <div className="grid grid-cols-12 gap-6 items-stretch">

                {/* LEFT: Welcome Card */}
                <div className="col-span-12 lg:col-span-6">
                    <WelcomeCard />
                </div>

                {/* RIGHT: KPI CARDS */}
                <div className="col-span-12 lg:col-span-6">
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 h-full">

                        <KpiCard
                            icon={<TrendingUp size={20} />}
                            value="235"
                            percentage={23}
                            label="Sales"
                            bgColor="bg-blue-600"
                        // accent="bg-yellow-400"
                        />

                        <KpiCard
                            icon={<DollarSign size={20} />}
                            value="356"
                            percentage={8}
                            label="Refunds"
                            bgColor="bg-blue-600"
                        // accent="bg-orange-400"
                        />

                        <KpiCard
                            icon={<ArrowDownLeft size={20} />}
                            value="280"
                            percentage={-3}
                            label="Earnings"
                            bgColor="bg-blue-600"
                        // accent="bg-cyan-400"
                        />

                    </div>
                </div>
            </div>


            {/* ================= ROW 2 ================= */}
            <div className="grid grid-cols-12 gap-6">

                <div className="col-span-12 lg:col-span-8">
                    <ProfitExpensesChart />
                </div>

                <div className="col-span-12 lg:col-span-4">
                    <ProductSalesChart />
                </div>

            </div>

            {/* ================= ROW 3 ================= */}
            <div className="grid grid-cols-12 gap-6">

                <div className="col-span-12 ">
                    <EngagementSection />
                </div>

            </div>

            {/* ================= ROW 4 ================= */}
            <div className="grid grid-cols-12 gap-6">

                <div className="col-span-12 lg:col-span-4">
                    <UpcomingSchedules />
                </div>

                <div className="col-span-12 lg:col-span-8">
                    <TopEmployees />
                </div>

            </div>

            {/* import Portal from "../components/portal/Portal"; */}

            {/* <Portal>
                <div className="fixed inset-0 bg-black/40 z-[9999] flex items-center justify-center">
                    <div className="bg-[var(--bg-card)] p-6 rounded-xl">
                        Portal works 🎉
                    </div>
                </div>
            </Portal> */}


        </div>
    );
};

export default Dashboard2;
