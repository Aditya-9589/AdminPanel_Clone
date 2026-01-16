import React from 'react'
import { employees } from '../../chartData/dashboard2/TopEmployeesData'

import ActionMenu from "../../components/ui/ActionMenu";

import {
    ArrowPathIcon,
    ChartBarIcon,
    EyeIcon,
} from "@heroicons/react/24/outline";


// Status Style map 
const STATUS_STYLES = {
    Available: {
        bg: "bg-green-50",
        text: "text-green-500",
        border: "border-green-400"
    },
    "On Holiday": {
        bg: "bg-blue-50",
        text: "text-blue-500",
        border: "border-blue-400",
    },
    Absent: {
        bg: "bg-red-50",
        text: "text-red-500",
        border: "border-red-400",
    },
    "On Leave": {
        bg: "bg-orange-50",
        text: "text-orange-500",
        border: "border-orange-400",
    },
};

const TopEmployees = () => {

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

        <div className="bg-[var(--bg-card)] rounded-2xl p-4 shadow-md h-full">

            {/* HEADER  */}
            <div className="flex justify-between items-center mb-4 ">
                {/* <h5 className="card-title text-lg font-semibold" > */}
                <h5 className="text-lg font-semibold text-[var(--text-primary)]" >
                    Top Employees
                </h5>

                <button className="h-9 w-9 rounded-full hover:bg-lightprimary flex items-center justify-center" >

                    <ActionMenu items={menuItems} />

                </button>
            </div>

            {/* TABLE  */}
            < div className="overflow-x-auto">
                {/* <table className="w-full text-sm" > */}
                {/* <thead className="border-b border-[var(--border-color)] " > */}
                {/* <thead className="border-b border-[var(--border-color)] text-[var(--text-primary)]" >
                        <tr>
                        <th className="font-semibold" >Profile</th>
                        <th className="font-semibold" >Hour Rate</th>
                        <th className="font-semibold" >Skills</th>
                        <th className="font-semibold" >Status</th>
                        </tr>
                        </thead> */}

                <table className="w-full text-sm table-fixed" >
                    <colgroup>
                        <col className="w-[40%]" />
                        <col className="w-[20%]" />
                        <col className="w-[20%]" />
                        <col className="w-[20%]" />
                    </colgroup>

                    <thead className="border-b border-[var(--border-color)] text-[var(--text-primary)]">
                        <tr>
                            {/* <th className="py-3 px-4 font-semibold">Profile</th>
                            <th className="py-3 px-4 font-semibold">Hour Rate</th>
                            <th className="py-3 px-4 font-semibold">Skills</th>
                            <th className="py-3 px-4 font-semibold">Status</th> */}
                            <th className="py-3 px-4 font-semibold text-left">Profile</th>
                            <th className="py-3 px-4 font-semibold text-left">Hour Rate</th>
                            <th className="py-3 px-4 font-semibold text-left">Skills</th>
                            <th className="py-3 px-4 font-semibold text-left">Status</th>
                        </tr>
                    </thead>


                    <tbody className="divide-y divide-[var(--border-color)]">
                        {employees.map((emp, index) => {
                            const statusStyle = STATUS_STYLES[emp.status];

                            return (
                                <tr key={index}>
                                    {/* Profile */}
                                    <td className="py-4 px-4">
                                        <div className="flex items-center gap-4">
                                            <img
                                                src={emp.image}
                                                alt={emp.name}
                                                className="h-12 w-12 rounded-full object-cover"
                                            />
                                            <div>
                                                <p className="font-medium text-[var(--text-primary)]">
                                                    {emp.name}
                                                </p>
                                                <p className="text-xs text-[var(--text-secondary)]">
                                                    {emp.role}
                                                </p>
                                            </div>
                                        </div>
                                    </td>

                                    {/* Hour Rate */}
                                    <td className="py-4 px-4 text-[var(--text-primary)]">
                                        {emp.rate}
                                    </td>

                                    {/* Skills */}
                                    <td className="py-4 px-4 text-[var(--text-primary)]">
                                        {emp.skill}
                                    </td>

                                    {/* Status */}
                                    <td className="py-4 px-4">
                                        <span
                                            className={`inline-flex items-center px-3 py-1 text-xs font-medium rounded-full border
                                                    ${statusStyle.bg}
                                                    ${statusStyle.text}
                                                    ${statusStyle.border}
                                            `}
                                        >
                                            {emp.status}
                                        </span>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>

                    {/* <tbody className="divide-y divide-[var(--border-color)]">
                        {employees.map((emp, index) => {
                            const statusStyle = STATUS_STYLES[emp.status];

                            return (
                                <tr key={index}>
                                    Profile
                                    <td className="py-4">
                                        <td className="">
                                        <div className="flex items-center gap-4">
                                            <img
                                                src={emp.image}
                                                alt={emp.name}
                                                className="h-12 w-12 rounded-full object-cover"
                                            />
                                            <div>
                                                <p className="font-medium text-[var(--text-primary)]">
                                                    {emp.name}
                                                </p>
                                                <p className="text-xs text-[var(--text-secondary)]">
                                                    {emp.role}
                                                </p>
                                            </div>
                                        </div>
                                    </td>

                                    Hour Rate
                                    <td className="py-4 text-[var(--text-primary)]">
                                        {emp.rate}
                                    </td>

                                    Skill
                                    <td className="py-4 text-[var(--text-primary)]">
                                        {emp.skill}
                                    </td>

                                    Status
                                    <td className="py-4">
                                        <span
                                            className={`inline-flex items-center px-3 py-1 text-xs font-medium rounded-full border
                                                    ${statusStyle.bg}
                                                    ${statusStyle.text}
                                                    ${statusStyle.border}
                                                `}
                                        >
                                            {emp.status}
                                        </span>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody> */}

                </table>
            </div>

        </div>

    )
}

export default TopEmployees