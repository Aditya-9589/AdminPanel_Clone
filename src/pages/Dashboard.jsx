import EarningCard from "../dashboard/sections/EarningCard"
import TotalOrdersChart from "../dashboard/sections/TotalOrdersChart";
import ProfitDonutChart from "../dashboard/sections/ProfitDonutChart"
import LatestDealCard from "../dashboard/cards/LatestDealCard"
import CustomersChart from "../dashboard/sections/CustomersChart";
import VisitFromUSA from "../dashboard/visitFromUSA/VisitFromUSA";
import LatestProducts from "../dashboard/latestProducts/LatestProducts";
import LatestReviews from "../dashboard/LatestReviews";


const Dashboard = () => {
    return (
        <div className="space-y-6">

            {/* ROW 1 — Earning (full on mobile, 4/12 on desktop) + TotalOrders */}
            <div className="grid grid-cols-12 gap-6 items-stretch">
                <div className="col-span-12 md:col-span-6 lg:col-span-4">
                    <EarningCard />
                </div>
                <div className="col-span-12 md:col-span-6 lg:col-span-8">
                    <TotalOrdersChart />
                </div>
            </div>

            {/* ROW 2 — 3 cards: 1 per col on mobile, 2 on tablet, 3 on desktop */}
            <div className="grid grid-cols-12 gap-6">
                <div className="col-span-12 md:col-span-6 lg:col-span-4">
                    <ProfitDonutChart className="h-full" />
                </div>
                <div className="col-span-12 md:col-span-6 lg:col-span-4">
                    <LatestDealCard className="h-full" />
                </div>
                <div className="col-span-12 md:col-span-12 lg:col-span-4">
                    <CustomersChart className="h-full" />
                </div>
            </div>

            {/* ROW 3 — VisitFromUSA + LatestProducts, stacked on mobile */}
            <div className="grid grid-cols-12 gap-6">
                <div className="col-span-12 md:col-span-5 lg:col-span-4">
                    <VisitFromUSA />
                </div>
                <div className="col-span-12 md:col-span-7 lg:col-span-8">
                    <LatestProducts />
                </div>
            </div>

            {/* ROW 4 — Full width */}
            <div className="grid grid-cols-12 gap-6 items-stretch">
                <div className="col-span-12">
                    <LatestReviews />
                </div>
            </div>

        </div>
    );
};


export default Dashboard;
