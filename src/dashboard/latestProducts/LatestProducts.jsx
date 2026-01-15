import React from "react";
import { productsData } from "../../chartData/LatestProductsData";
import ActionMenu from "../../components/ui/ActionMenu";
import {
    PlusIcon,
    PencilSquareIcon,
    TrashIcon,
} from "@heroicons/react/24/outline";


const LatestProducts = () => {
    return (
        // <div className="bg-[var(--bg-card)] rounded-xl shadow-sm p-6 w-full">
        <div className="bg-[var(--bg-card)] rounded-xl shadow-sm p-6 w-full h-full flex flex-col">

            {/* Header */}
            <div className="mb-4">
                <h3 className="text-lg font-semibold text-[var(--text-primary)]">
                    Latest Products
                </h3>
                <p className="text-sm text-[var(--text-secondary)]">
                    Explore our newest arrivals
                </p>
            </div>


            {/* Table Container */}
            <div className="max-h-[420px] overflow-y-auto latest-products-scroll">

                <table className="w-full text-left text-sm">
                    <thead className="border-b border-[var(--border-color)] text-[var(--text-primary)] text-base">
                        <tr>
                            <th className="py-3 font-semibold">Products</th>
                            <th className="py-3 pr-6 font-semibold">Payment</th>
                            <th className="py-3 pl-6 font-semibold">Status</th>
                            <th className="py-3"></th>
                        </tr>
                    </thead>

                    <tbody className="divide-y divide-[var(--border-color)]">
                        {productsData.map((product) => {
                            const percentage = Math.round(
                                (product.paid / product.total) * 100
                            );

                            return (
                                <tr key={product.id}>
                                    {/* Product */}
                                    {/* <td className="py-4"> */}
                                    <td className="py-3">
                                        <div className="flex items-center gap-3">
                                            <img
                                                src={product.image}
                                                alt={product.name}
                                                // className="h-14 w-14 rounded-md object-cover"
                                                className="h-12 w-12 rounded-md object-cover"
                                            />
                                            <p className="max-w-[220px] text-sm font-medium text-[var(--text-primary)] line-clamp-2">
                                                {product.name}
                                            </p>
                                        </div>
                                    </td>

                                    {/* Payment */}
                                    <td className="py-4 pr-6">
                                        <p className="font-medium text-[var(--text-primary)]">
                                            ${product.paid}
                                            <span className="text-[var(--text-secondary)]">
                                                {" "} / {product.total}
                                            </span>
                                        </p>

                                        {/* <p className="text-xs text-[var(--text-secondary)] mb-2"> */}
                                        <p className="text-xs text-[var(--text-secondary)] mb-1">
                                            {percentage === 100
                                                ? "Full paid"
                                                : product.status === "cancelled"
                                                    ? "Cancelled"
                                                    : "Partially paid"}
                                        </p>

                                        <div className="h-1 w-full bg-[var(--border-color)] rounded-full overflow-hidden">
                                            <div
                                                className="h-full rounded-full"
                                                style={{
                                                    width: `${percentage}%`,
                                                    background:
                                                        product.status === "cancelled"
                                                            ? "var(--chart-danger)"
                                                            : percentage === 100
                                                                ? "var(--chart-success)"
                                                                : "var(--chart-primary)",
                                                }}
                                            />
                                        </div>
                                    </td>

                                    {/* Status */}
                                    <td className="py-4 pl-6">
                                        <span
                                            className={`inline-flex items-center px-3 py-1 text-xs font-medium rounded-full border ${product.status === "confirmed"
                                                ? "bg-green-50 text-green-600 border-green-400"
                                                : "bg-red-50 text-red-600 border-red-400"
                                                }`}
                                        >
                                            {product.status === "confirmed"
                                                ? "Confirmed"
                                                : "Cancelled"}
                                        </span>
                                    </td>

                                    {/* Actions */}
                                    <td className="py-3 text-right">
                                        {/* <ActionMenu
                                            onAdd={() => console.log("Add product")}
                                            onEdit={() =>
                                                console.log("Edit product", product.id)
                                            }
                                            onDelete={() =>
                                                console.log("Delete product", product.id)
                                            }
                                        /> */}

                                        <ActionMenu
                                            items={[
                                                {
                                                    label: "Add",
                                                    icon: <PlusIcon className="h-4 w-4" />,
                                                    onClick: () => console.log("Add"),
                                                },
                                                {
                                                    label: "Edit",
                                                    icon: <PencilSquareIcon className="h-4 w-4" />,
                                                    onClick: () => console.log("Edit"),
                                                },
                                                {
                                                    label: "Delete",
                                                    icon: <TrashIcon className="h-4 w-4" />,
                                                    danger: true,
                                                    onClick: () => console.log("Delete"),
                                                },
                                            ]}
                                        />
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>

        </div >
    );
};

export default LatestProducts;

