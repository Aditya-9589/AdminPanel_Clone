
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ActionMenu from "../ui/ActionMenu";
import {
    PencilSquareIcon,
    TrashIcon,
    EyeIcon,
} from "@heroicons/react/24/outline";

import { categoryData } from "../../chartData/catalog/CategoryData";

const ITEMS_PER_PAGE = 10;
const PAGE_WINDOW = 2;

const CategoryTable = ({ categoryId, onEdit, onDelete }) => {
    const navigate = useNavigate();
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        setCurrentPage(1);
    }, [categoryId]);

    // Filter data based on route
    const filteredData = categoryId
        ? categoryData.filter((item) => item.id === categoryId)
        : categoryData;

    const totalPages = Math.ceil(filteredData.length / ITEMS_PER_PAGE);

    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const currentItems = filteredData.slice(
        startIndex,
        startIndex + ITEMS_PER_PAGE
    );

    const startPage = Math.max(1, currentPage);
    const endPage = Math.min(totalPages, startPage + PAGE_WINDOW - 1);

    return (
        <div className="mt-4 overflow-x-auto">

            {/* Table  */}
            <table className="w-full text-sm">
                {/* Table Head */}
                <thead className="border-b border-[var(--border-color)]">
                    <tr className="text-left text-[var(--text-secondary)]">
                        {/* <th className="py-3">Product</th>
                        <th className="py-3">Category</th>
                        <th className="py-3">Created</th>
                        <th className="py-3 text-right">Actions</th> */}

                        <th>Image</th>
                        <th>Category</th>
                        <th>Created</th>
                        <th className="text-right">Actions</th>

                    </tr>
                </thead>

                {/* Table Body */}
                <tbody className="divide-y divide-[var(--border-color)]">
                    {currentItems.map((item) => (
                        <tr key={item.id}>

                            {/* Product */}
                            <td className="py-4">
                                <div className="flex items-center gap-3">
                                    {/* <img
                                        src={item.image}
                                        alt={item.product}
                                        className="h-10 w-10 rounded-md object-cover"
                                    />
                                    <span className="font-medium text-[var(--text-primary)]">
                                        {item.product}
                                    </span> */}

                                    <img 
                                        src={item.image} 
                                        alt={item.name}
                                        className="h-10 w-10 rounded-md object-cover" 
                                    />
                                    <span className="font-medium text-[var(--text-primary)]" >
                                        {item.name}
                                    </span>
                                </div>
                            </td>

                            {/* Category */}
                            {/* <td className="py-4 text-[var(--text-primary)]">
                                {item.category}
                            </td> */}
                            <td className="text-[var(--text-secondary)]" >
                                {item.name}
                            </td>

                            {/* Created */}
                            <td className="py-4 text-[var(--text-secondary)]">
                                {item.createdAt}
                            </td>

                            {/* Actions */}
                            <td className="py-4 text-right">
                                <ActionMenu
                                    items={[
                                        // View only on main category page
                                        !categoryId && {
                                            label: "View",
                                            icon: <EyeIcon className="h-4 w-4" />,
                                            onClick: () => navigate(`/category/${item.id}`),
                                        },
                                        {
                                            label: "Edit",
                                            icon: <PencilSquareIcon className="h-4 w-4" />,
                                            onClick: () => onEdit?.(item),
                                        },
                                        {
                                            label: "Delete",
                                            icon: <TrashIcon className="h-4 w-4" />,
                                            danger: true,
                                            onClick: () => onDelete?.(item),
                                        },
                                    ].filter(Boolean)}
                                />
                            </td>

                        </tr>
                    ))}
                </tbody>
            </table>

            {/* Pagination  */}
            {filteredData.length > 0 && (
                <div className="flex items-center justify-between mt-6 text-sm" >
                    <p className="text-[var(--text-secondary)]" >
                        showing {startIndex + 1} to {" "}
                        {Math.min(startIndex + ITEMS_PER_PAGE, filteredData.length)} of{" "}
                        {filteredData.length}
                    </p>

                    <div className="flex items-center gap-2" >
                        <button
                            disabled={currentPage === 1}
                            onClick={() => setCurrentPage((p) => p - 1)}
                            className="px-3 py-1 rounded-md border border-[var(--border-color)]
                                disabled:opacity-50 hover:bg-[var(--icon-hover-bg)]"
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
                                className={`px-3 py-1 rounded-md border
                                    ${currentPage === page
                                        ? "bg-[var(--color-brand)] text-white"
                                        : "border-[var(--border-color)] hover:bg-[var(--icon-hover-bg)]"
                                    }
                                    `}
                            >
                                {page}
                            </button>
                        ))}

                        <button
                            disabled={currentPage === totalPages}
                            onClick={() => setCurrentPage((p) => p + 1)}
                            className="px-3 py-1 rounded-md border border-[var(--border-color)]
                                disabled:opacity-50 hover:bg-[var(--icon-hover-bg)]
                            "
                        >
                            Next
                        </button>
                    </div>
                </div>

            )}

            {/* Empty state */}
            {filteredData.length === 0 && (
                <div className="py-10 text-center text-sm text-[var(--text-secondary)]">
                    No categories found.
                </div>
            )}
        </div>
    );
};

export default CategoryTable;
