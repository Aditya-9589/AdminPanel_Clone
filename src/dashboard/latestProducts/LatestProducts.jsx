import React from "react";
import { productsData } from "../../chartData/LatestProductsData";

const LatestProducts = () => {
    return (
        <div className="bg-white rounded-xl shadow-sm p-6 w-full">

            {/* Header */}
            <div className="mb-4">
                <h3 className="text-lg font-semibold text-gray-900">
                    Latest Products
                </h3>
                <p className="text-sm text-gray-500">
                    Explore our newest arrivals
                </p>
            </div>

            {/* Table Container */}
            <div className="max-h-[420px] overflow-y-auto latest-products-scroll">
                <table className="w-full text-left text-sm">
                    {/* Table Head */}
                    <thead className="border-b border-gray-400 text-gray-900 text-base">
                        <tr>
                            <th className="py-3 font-semibold">Products</th>
                            <th className="py-3 pr-6 font-semibold">Payment</th>
                            <th className="py-3 pl-6 font-semibold">Status</th>
                            <th className="py-3"></th>
                        </tr>
                    </thead>

                    {/* Table Body */}
                    <tbody className="divide-y divide-gray-200">
                        {productsData.map((product) => {
                            const percentage = Math.round(
                                (product.paid / product.total) * 100
                            );

                            return (
                                <tr key={product.id}>
                                    {/* Product */}
                                    <td className="py-4">
                                        <div className="flex items-center gap-3">
                                            <img
                                                src={product.image}
                                                alt={product.name}
                                                className="h-14 w-14 rounded-md object-cover"
                                            />
                                            <p className="max-w-[220px] text-sm font-medium text-gray-850 line-clamp-2">
                                                {product.name}
                                            </p>
                                        </div>
                                    </td>

                                    {/* Payment */}
                                    <td className="py-4 pr-6">
                                        <p className="font-medium text-gray-900">
                                            ${product.paid}
                                            <span className="text-gray-400"> / {product.total}</span>
                                        </p>

                                        <p className="text-xs text-gray-500 mb-2">
                                            {percentage === 100
                                                ? "Full paid"
                                                : product.status === "cancelled"
                                                    ? "Cancelled"
                                                    : "Partially paid"}
                                        </p>

                                        <div className="h-1 w-full bg-gray-200 rounded-full overflow-hidden">
                                            <div
                                                className={`h-full rounded-full ${product.status === "cancelled"
                                                    ? "bg-red-400"
                                                    : percentage === 100
                                                        ? "bg-green-500"
                                                        : "bg-orange-400"
                                                    }`}
                                                style={{ width: `${percentage}%` }}
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
                                    {/* <button className="h-8 w-8 flex items-center justify-center rounded-full hover:bg-sky-200">
                                        <span className="text-xl leading-none">⋮</span>
                                    </button> */}

                                    <td className="py-4 text-right">
                                        <button className="h-9 w-9 flex items-center justify-center rounded-full hover:bg-sky-200">
                                            <svg
                                                className="h-5 w-5 block text-gray-700"
                                                viewBox="0 0 24 24"
                                                fill="currentColor"
                                            >
                                                <circle cx="12" cy="5" r="1.5" />
                                                <circle cx="12" cy="12" r="1.5" />
                                                <circle cx="12" cy="19" r="1.5" />
                                            </svg>
                                        </button>
                                    </td>


                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default LatestProducts;
