import { useEffect, useState } from "react";
import { FiPlus, FiEdit2, FiTrash2 } from "react-icons/fi";
import RolesFormModal from "../portal/RolesFormModal";
import DeleteConfirmPortal from "../portal/DeleteConfirmPortal";

const ITEMS_PER_PAGE = 9;
const PAGE_WINDOW = 2;


// Mock users List :-
const mockUsers = [
    {
        id: 1,
        name: "Aditya Hariharno",
        email: "aditya@example.com",
        phone: "9589030366",
        image:
            "https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=200&h=200&fit=crop",
        permissions: ["Dashboard 1", "Dashboard 2", "Users", "Ecommerce", "FAQ", "Category", "Company Details", "Chat Us", "Blogs", "Roles & Permissions"],
    },
    {
        id: 2,
        name: "John Doe",
        email: "john@example.com",
        phone: "9876543210",
        image:
            "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop",
        permissions: ["Dashboard 1", "Dashboard 2", "Users", "Blogs"],
    },
    {
        id: 3,
        name: "Sarah Wilson",
        email: "sarah@example.com",
        phone: "9123456780",
        image:
            "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop",
        permissions: ["Company Details", "Chat Us"],
    },
    {
        id: 4,
        name: "Michael Lee",
        email: "michael@example.com",
        phone: "9988776655",
        image:
            "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=200&h=200&fit=crop",
        permissions: ["Company Details", "Chat Us"],
    },
    {
        id: 5,
        name: "Emily Clark",
        email: "emily@example.com",
        phone: "9012345678",
        image:
            "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&h=200&fit=crop",
        permissions: ["Dashboard 2", "FAQ"],
    },
    {
        id: 6,
        name: "David Kim",
        email: "david@example.com",
        phone: "9870011223",
        image:
            "https://images.unsplash.com/photo-1552058544-f2b08422138a?w=200&h=200&fit=crop",
        permissions: ["Dashboard 2", "Company Details", "FAQ"],
    },
    {
        id: 7,
        name: "Sophia Brown",
        email: "sophia@example.com",
        phone: "9090909090",
        image:
            "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=200&h=200&fit=crop",
        permissions: ["Dashboard 2", "Company Details", "Blogs"],
    },
];


// Permissions List for Users :-
// const ALL_PERMISSIONS = [
//     "Dashboard 1",
//     "Dashboard 2",
//     "Users",
//     "Ecommerce",
//     "FAQ",
//     "Category",
//     "Company Details",
//     "Chat Us",
//     "Blogs",
//     "Roles & Permissions",
// ];


const RolesAndPermissionsPage = () => {
    const [users, setUsers] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);

    const [selectedUser, setSelectedUser] = useState(null);
    const [isFormOpen, setIsFormOpen] = useState(false);
    const [isDeleteOpen, setIsDeleteOpen] = useState(false);

    // const loadUsers = async () => {
    //     setUsers(mockUsers);
    // };

    // useEffect(() => {
    //     loadUsers();
    // }, []);

    useEffect(() => {
        setUsers(mockUsers);
    }, []);


    const handleSave = (data) => {
        if (selectedUser) {
            // EDIT 
            setUsers((prev) =>
                prev.map((u) =>
                    u.id === selectedUser.id ? { ...u, ...data } : u
                )
            );
        } else {
            // ADD 
            const newUser = {
                ...data,
                id: Date.now(),
            };
            setUsers((prev) => [newUser, ...prev]);
        }

        setIsFormOpen(false);
        setSelectedUser(null);
    }

    // DELETE 
    const handleDelete = () => {
        setUsers((prev) =>
            prev.filter((u) => u.id !== selectedUser.id)
        );

        setIsDeleteOpen(false);
        setSelectedUser(null);
    }


    // Pagination :-
    const totalPages = Math.ceil(users.length / ITEMS_PER_PAGE);
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const currentItems = users.slice(
        startIndex,
        startIndex + ITEMS_PER_PAGE
    );

    const startPage = Math.max(1, currentPage);
    const endPage = Math.min(totalPages, startPage + PAGE_WINDOW - 1);

    return (
        <div className="bg-[var(--bg-card)] rounded-2xl p-6 shadow-sm">
            {/* Header */}
            <div className="flex items-start justify-between pb-4 border-b border-[var(--border-color)]">
                <div>
                    <h1 className="text-lg font-semibold text-[var(--text-primary)]">
                        Roles & Permissions
                    </h1>
                    <p className="text-sm text-[var(--text-secondary)]">
                        Manage user access and permissions
                    </p>
                </div>

                <button
                    onClick={() => {
                        setSelectedUser(null);
                        setIsFormOpen(true);
                    }}
                    className="flex items-center gap-2 px-4 py-2 rounded-lg
                        bg-[var(--color-brand)] text-white text-sm font-medium"
                >
                    <FiPlus />
                    Add User
                </button>
            </div>

            {/* Table */}
            <div className="mt-6 overflow-x-auto">
                <div className="min-w-[900px]">
                    {/* Header Row */}
                    <div className="grid grid-cols-12 px-4 py-3 text-sm font-medium border-b border-[var(--border-color)] text-[var(--text-secondary)]">
                        <div className="col-span-1">S.No.</div>
                        <div className="col-span-4">Name</div>
                        <div className="col-span-5">Permissions</div>
                        <div className="col-span-2">Actions</div>
                    </div>

                    {/* Data Rows */}
                    {currentItems.map((user, index) => (
                        <div
                            key={user.id}
                            className="grid grid-cols-12 px-4 py-4 items-center border-b border-[var(--border-color)] hover:bg-[var(--icon-hover-bg)] transition"
                        >
                            <div className="col-span-1 text-sm text-[var(--text-secondary)]">
                                {startIndex + index + 1}
                            </div>

                            <div className="col-span-4 flex items-center gap-3 cursor-pointer">
                                <img
                                    src={user.image}
                                    alt={user.name}
                                    className="w-10 h-10 rounded-full object-cover"
                                />
                                <div>
                                    <p className="font-medium text-[var(--text-primary)]">
                                        {user.name}
                                    </p>
                                    <p className="text-sm text-[var(--text-secondary)]">
                                        {user.email}
                                    </p>
                                    <p className="text-sm text-[var(--text-secondary)]">
                                        {user.phone}
                                    </p>
                                </div>
                            </div>

                            <div className="col-span-5 flex flex-wrap gap-2">
                                {user.permissions.map((perm, i) => (
                                    <span
                                        key={i}
                                        className="px-3 py-1 text-xs rounded-full bg-green-100 text-green-700"
                                    >
                                        {perm}
                                    </span>
                                ))}
                            </div>

                            <div className="col-span-2 flex gap-3">
                                <button
                                    onClick={() => {
                                        setSelectedUser(user);
                                        setIsFormOpen(true);
                                    }}
                                    className="p-2 rounded-md hover:bg-[var(--icon-hover-bg)] text-[var(--color-brand)] cursor-pointer"
                                    title="Edit"
                                >
                                    <FiEdit2 size={16} />
                                </button>

                                <button
                                    onClick={() => {
                                        setSelectedUser(user);
                                        setIsDeleteOpen(true);
                                    }}
                                    className="p-2 rounded-md hover:bg-[var(--icon-hover-bg)] text-red-500 cursor-pointer"
                                    title="Delete"
                                >
                                    <FiTrash2 size={16} />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Pagination */}
            {users.length > 0 && (
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between mt-6 text-sm gap-4">
                    <p className="text-[var(--text-secondary)]">
                        Showing {startIndex + 1} to{" "}
                        {Math.min(startIndex + ITEMS_PER_PAGE, users.length)} of{" "}
                        {users.length}
                    </p>

                    <div className="flex items-center gap-2">
                        <button
                            disabled={currentPage === 1}
                            onClick={() => setCurrentPage((p) => p - 1)}
                            className="px-3 py-1 rounded-md border border-[var(--border-color)]
                                disabled:opacity-50 hover:bg-[var(--icon-hover-bg)] cursor-pointer"
                        >
                            Prev
                        </button>

                        {Array.from(
                            { length: endPage - startPage + 1 },
                            (_, i) => startPage + i
                        ).map((page) => (
                            <button
                                key={page}
                                onClick={() => setCurrentPage(page)}
                                className={`px-3 py-1 rounded-md border cursor-pointer
                                    ${currentPage === page
                                        ? "bg-[var(--color-brand)] text-white"
                                        : "border-[var(--border-color)] hover:bg-[var(--icon-hover-bg)]"
                                    }`}
                            >
                                {page}
                            </button>
                        ))}

                        <button
                            disabled={currentPage === totalPages}
                            onClick={() => setCurrentPage((p) => p + 1)}
                            className="px-3 py-1 rounded-md border border-[var(--border-color)]
                                disabled:opacity-50 hover:bg-[var(--icon-hover-bg)] cursor-pointer"
                        >
                            Next
                        </button>
                    </div>
                </div>
            )}


            {/* Form Modal  */}
            <RolesFormModal
                open={isFormOpen}
                user={selectedUser}
                onClose={() => {
                    setIsFormOpen(false);
                    setSelectedUser(null);
                }}
                onSave={handleSave}
            />

            {/* Delete Modal */}
            <DeleteConfirmPortal
                open={isDeleteOpen}
                title="Delete User"
                description="Are you sure you want to delete this user?"
                warningText="This action cannot be undone."
                onClose={() => {
                    setIsDeleteOpen(false);
                    setSelectedUser(null);
                }}
                onConfirm={handleDelete}
            />
        </div>
    );
};

export default RolesAndPermissionsPage;