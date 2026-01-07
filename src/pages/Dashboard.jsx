import EarningCard from "../dashboard/sections/EarningCard"
import TotalOrdersChart from "../dashboard/sections/TotalOrdersChart";
import ProfitDonutChart from "../dashboard/sections/ProfitDonutChart"
import LatestDealCard from "../dashboard/cards/LatestDealCard"
import CustomersChart from "../dashboard/sections/CustomersChart";
import VisitFromUSA from "../dashboard/visitFromUSA/VisitFromUSA";
import LatestProducts from "../dashboard/latestProducts/LatestProducts";


const Dashboard = () => {
    return (
        <div className="space-y-6">

            {/* ROW 1 */}
            <div className="grid grid-cols-12 gap-6">
                <div className="col-span-4">
                    <EarningCard />
                </div>

                <div className="col-span-8">
                    <TotalOrdersChart />
                </div>
            </div>

            {/* ROW 2 (future) */}
            <div className="grid grid-cols-12 gap-6">
                <div className="col-span-4">
                    <ProfitDonutChart />
                </div>
                <div className="col-span-4">
                    <LatestDealCard />
                </div>
                <div className="col-span-4">
                    <CustomersChart />
                </div>
            </div>

            {/* ROW 3 (full width) */}
            <div className="grid grid-cols-12 gap-6">
                <div className="col-span-4">
                    <VisitFromUSA />
                </div>
                <div className="col-span-8">
                    <LatestProducts />
                </div>
            </div>

        </div>
    );
};


export default Dashboard;
