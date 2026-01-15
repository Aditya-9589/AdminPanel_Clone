import NewGoalsCard from "../cards/NewGoalsCard";
import TopDeveloperCard from "../cards/TopDeveloperCard";
import TrafficDistributionCard from "../charts/TrafficDistributionChart";
import EventPromoCard from "../cards/EventPromoCard";

export default function EngagementSection() {
    return (
        <div className="grid grid-cols-12 gap-6 items-stretch">
            {/* Left */}
            <div className="col-span-12 lg:col-span-3 flex flex-col gap-6 h-full">
                <NewGoalsCard />
                <TopDeveloperCard />
            </div>

            {/* Middle */}
            <div className="col-span-12 lg:col-span-6 h-full">
                <TrafficDistributionCard />
            </div>

            {/* Right */}
            <div className="col-span-12 lg:col-span-3 h-full">
                <EventPromoCard />
            </div>
        </div>
    );
}
