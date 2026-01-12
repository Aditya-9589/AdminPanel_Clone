import React from "react";
import { locationsData } from "../../chartData/LocationsData";
import usaImage from "../../assets/usa_image/usa_image.png";

const VisitFromUSA = () => {
    return (
        // <div className="bg-[var(--bg-card)] rounded-xl shadow-sm p-6 w-full">
        <div className="bg-[var(--bg-card)] rounded-xl shadow-sm p-6 w-full h-full flex flex-col">

            {/* HEADER */}
            <div className="mb-4">
                <h3 className="text-lg font-semibold text-[var(--text-primary)]">
                    Visit From USA
                </h3>
                <p className="text-sm text-[var(--text-secondary)]">
                    Top Locations
                </p>
            </div>

            {/* MAP SECTION */}
            {/* <div className="relative flex justify-center mb-6"> */}
            <div className="relative flex justify-center mb-8">
                <img
                    src={usaImage}
                    alt="USA Map"
                    className="w-full max-w-[20rem] z-0"
                />

                {/* MAP DOTS */}
                {locationsData.map((location) => (
                    <span
                        key={location.id}
                        className="
                            absolute z-10
                            w-3.5 h-3.5
                            rounded-full
                            border-2 border-[var(--bg-card)]
                            shadow-sm
                            transition-transform
                            hover:scale-110
                            cursor-pointer
                        "
                        style={{
                            top: location.position.top,
                            left: location.position.left,
                            backgroundColor: location.color,
                        }}
                    />
                ))}
            </div>

            {/* PROGRESS BARS */}
            {/* <div className="space-y-4"> */}
            <div className="space-y-3">
                {locationsData.map((location) => (
                    <div key={location.id} className="flex items-center gap-3">
                        <span className="text-xs font-medium text-[var(--text-primary)] w-6">
                            {location.label}
                        </span>

                        {/* <div className="flex-1 h-2 bg-[var(--border-color)] rounded-full overflow-hidden"> */}
                        <div className="flex-1 h-1.5 bg-[var(--border-color)] rounded-full overflow-hidden">
                            <div
                                className="h-full"
                                style={{
                                    width: `${location.percentage}%`,
                                    backgroundColor: location.color,
                                }}
                            />
                        </div>

                        <span className="text-xs font-medium text-[var(--text-secondary)] w-8 text-right">
                            {location.percentage}%
                        </span>
                    </div>
                ))}
            </div>

        </div>
    );
};

export default VisitFromUSA;
