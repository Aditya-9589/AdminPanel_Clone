import { useState } from "react";
import ActionMenu from "../ui/ActionMenu";
import { usersData } from "../../chartData/users/UsersData";
import {
    BellIcon,
    PencilSquareIcon,
    TrashIcon,
} from "@heroicons/react/24/outline";

import SendNotificationModal from "../portal/SendNotificationModal";

const ITEMS_PER_PAGE = 10;

const PAGE_WINDOW = 2;

const UsersTable = () => {
    const [currentPage, setCurrentPage] = useState(1);

    const [isNotifyOpen, setIsNotifyOpen] = useState(false);
    const [selectedUser, setSelectedUser] = useState(null);


    const totalPages = Math.ceil(usersData.length / ITEMS_PER_PAGE);
    
    const startPage = Math.floor((currentPage - 1) / PAGE_WINDOW) * PAGE_WINDOW + 1;
    
    const endPage = Math.min(startPage + PAGE_WINDOW - 1, totalPages);

    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const currentItems = usersData.slice(
        startIndex,
        startIndex + ITEMS_PER_PAGE
    );

    return (
        <div className="bg-[var(--bg-card)] rounded-2xl p-6 shadow-sm">

            {/* Top Controls */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
                <input
                    type="text"
                    placeholder="Search users..."
                    className="w-full sm:w-64 px-3 py-2 rounded-lg
                        border border-[var(--border-color)]
                        bg-transparent text-sm
                        text-[var(--text-primary)]
                        placeholder:text-[var(--text-secondary)]
                        focus:outline-none focus:ring-1 focus:ring-[var(--color-brand)]"
                />

                <button
                    className="px-4 py-2 rounded-lg border border-[var(--border-color)]
                        text-sm font-medium text-[var(--text-primary)]
                        hover:bg-[var(--icon-hover-bg)] transition"
                >
                    Filters
                </button>
            </div>

            {/* Table */}
            {/* <div
                className="
                overflow-x-auto
                max-h-[70vh]
                overflow-y-auto
                rounded-xl
                "
                > */}

            {/* Table */}
            <div className="overflow-x-auto">

                {/* <table className="w-full text-sm"> */}
                <table className="w-full text-sm min-w-[54rem]">
                    <thead className="border-b border-[var(--border-color)]">
                        <tr className="text-left text-[var(--text-secondary)]">
                            <th className="py-3">User</th>
                            <th className="py-3">Phone</th>

                            {/* <th className="py-3">Role</th> */}
                            <th className="py-3 hidden sm:table-cell">Role</th>

                            <th className="py-3">Status</th>

                            {/* <th className="py-3">Verified</th> */}
                            <th className="py-3 hidden md:table-cell">Verified</th>

                            <th className="py-3">Toggle</th>
                            <th className="py-3 text-right">Actions</th>
                        </tr>
                    </thead>

                    <tbody className="divide-y divide-[var(--border-color)]">
                        {currentItems.map((user) => (
                            <tr key={user.id}>

                                {/* User */}
                                <td className="py-4">
                                    <div className="flex items-center gap-3">
                                        <img
                                            src={user.avatar}
                                            alt={user.name}
                                            className="h-10 w-10 rounded-full object-cover"
                                        />
                                        <div>
                                            <p className="font-medium text-[var(--text-primary)]">
                                                {user.name}
                                            </p>
                                            <p className="text-xs text-[var(--text-secondary)]">
                                                {user.email}
                                            </p>
                                        </div>
                                    </div>
                                </td>

                                {/* Phone */}
                                <td className="py-4 text-[var(--text-primary)]">
                                    {user.phone}
                                </td>

                                {/* Role */}
                                {/* <td className="py-4 text-[var(--text-primary)]"> */}
                                <td className="py-4 hidden sm:table-cell text-[var(--text-primary)]">
                                    {user.role}
                                </td>

                                {/* Status */}
                                <td className="py-4">
                                    <span
                                        className={`px-3 py-1 rounded-full text-xs font-medium border
                                            ${user.status === "Active"
                                                ? "bg-green-50 text-green-600 border-green-400"
                                                : user.status === "Pending"
                                                    ? "bg-yellow-50 text-yellow-600 border-yellow-400"
                                                    : "bg-red-50 text-red-600 border-red-400"
                                            }`}
                                    >
                                        {user.status}
                                    </span>
                                </td>

                                {/* Verified */}
                                {/* <td className="py-4 text-[var(--text-primary)]"> */}
                                <td className="py-4 hidden md:table-cell text-[var(--text-primary)]">
                                    {user.verified ? "Yes" : "No"}
                                </td>

                                {/* Toggle (UI only) */}
                                <td className="py-4">
                                    <label className="inline-flex items-center cursor-pointer">
                                        <input
                                            type="checkbox"
                                            defaultChecked={user.isEnabled}
                                            className="sr-only peer"
                                        />
                                        <div
                                            className="w-10 h-5 rounded-full
                                                bg-gray-300 peer-checked:bg-green-500
                                                relative transition"
                                        >
                                            <span
                                                className="absolute top-0.5 left-0.5
                                                    h-4 w-4 bg-white rounded-full
                                                    transition peer-checked:translate-x-5"
                                            />
                                        </div>
                                    </label>
                                </td>

                                {/* Actions */}
                                <td className="py-4 text-right">
                                    <ActionMenu
                                        items={[
                                            {
                                                label: "Send Notification",
                                                icon: <BellIcon className="h-4 w-4" />,
                                                onClick: () => {
                                                    setSelectedUser(user);
                                                    setIsNotifyOpen(true);
                                                },
                                            },
                                            // {
                                            //     label: "Update",
                                            //     icon: <PencilSquareIcon className="h-4 w-4" />,
                                            //     onClick: () => {
                                            //         console.log("Update user:", user.id);
                                            //     },
                                            // },
                                            // {
                                            //     label: "Delete",
                                            //     icon: <TrashIcon className="h-4 w-4" />,
                                            //     danger: true,
                                            //     onClick: () => {
                                            //         console.log("Delete user:", user.id);
                                            //     },
                                            // },
                                        ]}
                                    />
                                </td>

                            </tr>
                        ))}
                    </tbody>
                </table>


                {/* Pagination */}
                {/* <div className="flex items-center justify-between mt-6 text-sm">
                    <p className="text-[var(--text-secondary)]">
                        Showing {startIndex + 1} to{" "}
                        {Math.min(startIndex + ITEMS_PER_PAGE, usersData.length)} of{" "}
                        {usersData.length}
                    </p>

                    <div className="flex items-center gap-2">
                        <button
                            disabled={currentPage === 1}
                            onClick={() => setCurrentPage((p) => p - 1)}
                            className="px-3 py-1 rounded-md border border-[var(--border-color)]
                                disabled:opacity-50 hover:bg-[var(--icon-hover-bg)]"
                        >
                            Prev
                        </button>

                        <button
                            disabled={currentPage === totalPages}
                            onClick={() => setCurrentPage((p) => p + 1)}
                            className="px-3 py-1 rounded-md border border-[var(--border-color)]
                                disabled:opacity-50 hover:bg-[var(--icon-hover-bg)]"
                        >
                            Next
                        </button>
                    </div>
                </div> */}


                {/* Pagination  */}
                <div className="flex items-center justify-between mt-6 text-sm">
                    <p className="text-[var(--text-secondary)]" >
                        showing {startIndex + 1} to {" "}
                        {Math.min(startIndex + ITEMS_PER_PAGE, usersData.length)} of {" "}
                        {usersData.length}
                    </p>

                    <div className="flex items-center gap-2">
                        {/* Prev  */}
                        <button 
                            disabled={currentPage === 1}
                            onClick={() => setCurrentPage((p) => p - 1)}
                            className="px-3 py-1 rounded-md border border-[var(--border-color)]
                                disabled:opacity-50 hover:bg-[var(--icon-hover-bg)]"
                        >
                            Prev
                        </button>

                        {/* Page Numbers  */}
                        {Array.from(
                            { length: endPage - startPage + 1},
                            (_, i) => startPage + i
                        ).map((page) => (
                            <button
                                key={page}
                                onClick={() => setCurrentPage(page)}
                                className={`px-3 py-1 rounded-md border
                                    ${
                                        currentPage === page 
                                        ? "bg-[var(--color-brand)] text-white"
                                        : "border-[var(--border-color)] hover:bg-[var(--icon-hover-bg)]"
                                    }`}
                            >
                                {page}
                            </button>
                        )) }

                        {/* Next  */}
                        <button 
                            disabled={currentPage === totalPages}
                            onClick={() => setCurrentPage((p) => p + 1)}
                            className="px-3 py-1 rounded-md border border-[var(--border-color)]
                                disabled:opacity-50 hover:bg-[var(--icon-hover-bg)]"
                        >
                            Next
                        </button>
                    </div>
                </div>

            </div>

            <SendNotificationModal
                open={isNotifyOpen}
                user={selectedUser}
                onClose={() => {
                    setIsNotifyOpen(false);
                    setSelectedUser(null);
                }}
                onSend={(message) => {
                    console.log("Notification sent to:", selectedUser.id);
                    console.log("Message:", message);

                    setIsNotifyOpen(false);
                    setSelectedUser(null);
                }}
            />

        </div>
    );
};

export default UsersTable;
