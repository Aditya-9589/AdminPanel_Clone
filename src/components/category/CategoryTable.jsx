import { useNavigate } from "react-router-dom";
import ActionMenu from "../ui/ActionMenu";
import {
    PencilSquareIcon,
    TrashIcon,
    EyeIcon,
} from "@heroicons/react/24/outline";

import { categoryData } from "../../chartData/category/CategoryData";

const CategoryTable = ({ categoryId, onEdit, onDelete }) => {
    const navigate = useNavigate();

    // Filter data based on route
    const filteredData = categoryId
        ? categoryData.filter((item) => item.id === categoryId)
        : categoryData;

    return (
        <div className="mt-4 overflow-x-auto">

            <table className="w-full text-sm">
                {/* Table Head */}
                <thead className="border-b border-[var(--border-color)]">
                    <tr className="text-left text-[var(--text-secondary)]">
                        <th className="py-3">Product</th>
                        <th className="py-3">Category</th>
                        <th className="py-3">Created</th>
                        <th className="py-3 text-right">Actions</th>
                    </tr>
                </thead>

                {/* Table Body */}
                <tbody className="divide-y divide-[var(--border-color)]">
                    {filteredData.map((item) => (
                        <tr key={item.id}>

                            {/* Product */}
                            <td className="py-4">
                                <div className="flex items-center gap-3">
                                    <img
                                        src={item.image}
                                        alt={item.product}
                                        className="h-10 w-10 rounded-md object-cover"
                                    />
                                    <span className="font-medium text-[var(--text-primary)]">
                                        {item.product}
                                    </span>
                                </div>
                            </td>

                            {/* Category */}
                            <td className="py-4 text-[var(--text-primary)]">
                                {item.category}
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
