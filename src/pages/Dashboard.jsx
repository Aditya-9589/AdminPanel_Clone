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

            {/* ROW 1 */}
            <div className="grid grid-cols-12 gap-6 items-stretch">
                <div className="col-span-4">
                    <EarningCard />
                </div>

                <div className="col-span-8">
                    <TotalOrdersChart />
                </div>
            </div>

            {/* ROW 2  */}
            <div className="grid grid-cols-12 gap-6 ">
                <div className="col-span-4">
                    <ProfitDonutChart  className="h-full" />
                </div>
                <div className="col-span-4">
                    <LatestDealCard  className="h-full" />
                </div>
                <div className="col-span-4">
                    <CustomersChart className="h-full" />
                </div>
            </div>

            {/* ROW 3  */}
            <div className="grid grid-cols-12 gap-6">
                <div className="col-span-4">
                    <VisitFromUSA />
                </div>
                <div className="col-span-8">
                    <LatestProducts />
                </div>
            </div>

            {/* ROW 4  */}
            <div className="grid grid-cols-12 gap-6 items-stretch">
                <div className="col-span-12">
                    <LatestReviews />
                </div>
            </div>

        </div>
    );
};


export default Dashboard;
