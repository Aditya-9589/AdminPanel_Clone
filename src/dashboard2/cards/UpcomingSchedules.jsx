import React from 'react'
import { timeSlots, schedules } from '../../chartData/dashboard2/UpcomingSchedulesData'

import avatar1 from "../../assets/avatar/avatar-1.png";
import avatar2 from "../../assets/avatar/avatar-2.jpg";
import avatar3 from "../../assets/avatar/avatar-3.jpg";
import avatar4 from "../../assets/avatar/avatar-4.jpg";
// import avatar5 from "../../assets/avatar/avatar-5.jpg";

const avatars = [avatar1, avatar2, avatar3, avatar4];

import ActionMenu from "../../components/ui/ActionMenu";

import {
    ArrowPathIcon,
    ChartBarIcon,
    EyeIcon,
} from "@heroicons/react/24/outline";


const UpcomingSchedules = () => {

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
        // <div>UpcomingSchedules</div>

        <div className="bg-white dark:bg-dark rounded-2xl p-6 shadow-md h-full">

            {/* HEADER  */}
            <div className="flex justify-between items-center">
                <h5 className="card-title text-lg font-semibold" >Upcoming Schedule</h5>
                <button className='h-9 w-9 rounded-full hover:bg-lightprimary flex items-center justify-center' >
                    
                    <ActionMenu items={menuItems} />

                </button>
            </div>

            {/* TABS  */}
            <div className="flex justify-between mt-4 rounded-full shadow-md p-1">
                {["1 To 3", "4 To 7", "8 To 10"].map((tab, i) => (
                    <button
                        key={tab}
                        className={`px-4 py-2 rounded-full font-semibold ${i === 0 ? "bg-primary text-white" : "text-ld"}
                        `}
                    >
                        {tab}
                    </button>
                ))}
            </div>

            {/* TIMELINE  */}
            <div className="max-h-[22rem] overflow-y-auto mt-6" >
                <div className="grid grid-cols-12 gap-6">

                    {/* Time Column  */}
                    <div className="col-span-3 md:col-span-2">
                        <ul>
                            {timeSlots.map(t => <li key={t} >{t}</li>)}
                        </ul>
                    </div>

                    {/* Events  */}
                    <div className="col-span-9 md:col-span-10 space-y-6">
                        {schedules.map((item, i) => (
                            <div
                                key={i}
                                className={`p-4 shadow-sm border-s-5 ${item.color}`}
                            >
                                <h6 className="text-base" >{item.title}</h6>
                                <p className="text-sm text-ld" >{item.time}</p>

                                {/* Avatars  */}
                                <div className="flex mt-4 ms-2" >
                                    {avatars.map((src, index) => (
                                        <img
                                            key={index}
                                            src={src}
                                            alt={`avatar-${index + 1}`}
                                            className='h-8 w-8 rounded-full -ms-2'
                                        />
                                    ))}

                                    {/* <div className="h-8 w-8 flex items-center justify-center rounded-full bg-lightinfo text-info text-xs -ms-2" > */}
                                    <div className="-ml-2 h-8 w-8 rounded-full bg-sky-100  flex items-center justify-center text-xs text-sky-300 font-medium">
                                        +18
                                    </div>
                                </div>

                            </div>
                        ))}
                    </div>
                </div>
            </div>

        </div>
    )
}

export default UpcomingSchedules