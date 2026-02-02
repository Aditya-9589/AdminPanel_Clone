import { useState } from "react";
import { useParams } from "react-router-dom";
import ActionMenu from "../ui/ActionMenu";
import {
    PencilSquareIcon,
    TrashIcon,
} from "@heroicons/react/24/outline";

import { categoryData } from "../../chartData/catalog/ProductData";
// import AddSubCategoryModal from "../portal/AddSubCategoryModal";

const ITEMS_PER_PAGE = 10;
const PAGE_WINDOW = 2;

const SubCategoryTable = ({ onEdit, onDelete }) => {
    const { id: categoryId } = useParams();
    const [currentPage, setCurrentPage] = useState(1);

    // 🔑 Filter products by categoryId
    const filteredProducts = categoryData.filter(
        (item) => item.categoryId === categoryId
    );

    const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE);

    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const currentItems = filteredProducts.slice(
        startIndex,
        startIndex + ITEMS_PER_PAGE
    );

    const startPage = Math.max(1, currentPage);
    const endPage = Math.min(totalPages, startPage + PAGE_WINDOW - 1);

    return (
        <div className="mt-4 overflow-x-auto">

            {/* TABLE */}
            <table className="w-full text-sm">
                <thead className="border-b border-[var(--border-color)]">
                    <tr className="text-left text-[var(--text-secondary)]">
                        {/* <th className="py-3">Product</th> */}
                        <th className="py-3">Subcategory</th>
                        <th className="py-3">Created</th>
                        <th className="py-3 text-right">Actions</th>
                    </tr>
                </thead>

                <tbody className="divide-y divide-[var(--border-color)]">
                    {currentItems.map((item) => (
                        <tr key={item.id}>

                            {/* Product */}
                            <td className="py-4">
                                <div className="flex items-center gap-3">
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        className="h-10 w-10 rounded-md object-cover"
                                    />
                                    <span className="font-medium text-[var(--text-primary)]">
                                        {item.name}
                                    </span>
                                </div>
                            </td>

                            {/* Created */}
                            <td className="py-4 text-[var(--text-secondary)]">
                                {item.createdAt}
                            </td>

                            {/* Actions */}
                            <td className="py-4 text-right">
                                <ActionMenu
                                    items={[
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
                                    ]}
                                />
                            </td>

                        </tr>
                    ))}
                </tbody>
            </table>

            {/* PAGINATION */}
            {filteredProducts.length > 0 && (
                <div className="flex items-center justify-between mt-6 text-sm">
                    <p className="text-[var(--text-secondary)]">
                        Showing {startIndex + 1} to{" "}
                        {Math.min(startIndex + ITEMS_PER_PAGE, filteredProducts.length)} of{" "}
                        {filteredProducts.length}
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
                                    }`}
                            >
                                {page}
                            </button>
                        ))}

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
            )}

            {/* EMPTY STATE */}
            {filteredProducts.length === 0 && (
                <div className="py-10 text-center text-sm text-[var(--text-secondary)]">
                    {/* No products found for this category. */}
                    No subcategories found for this category.
                </div>
            )}

            {/* <AddSubCategoryModal
                open={isAddSubOpen}
                onClose={() => setIsAddSubOpen(false)}
                onSave={(data) => {
                    console.log("Add Subcategory:", data);
                }}
            /> */}

        </div>


    );
};

export default SubCategoryTable;
