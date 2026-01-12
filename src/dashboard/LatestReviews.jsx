import React from "react";
import { reviewsData } from "../chartData/LatestReviewsData";
import ActionMenu from "../components/ui/ActionMenu";


const LatestReviews = () => {
    return (
        <div className="bg-[var(--bg-card)] rounded-xl shadow-sm p-6 w-full">

            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">

                <div>
                    <h3 className="text-lg font-semibold text-[var(--text-primary)]">
                        Latest Reviews
                    </h3>
                    <p className="text-sm text-[var(--text-secondary)]">
                        Review received across all channels
                    </p>
                </div>

                {/* Actions */}
                <div className="flex items-center gap-3">

                    {/* Search */}
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Search"
                            className="
                                h-9 w-52 pl-9 pr-3 text-sm rounded-full
                                bg-transparent
                                border border-[var(--border-color)]
                                text-[var(--text-primary)]
                                placeholder:text-[var(--text-secondary)]
                                focus:outline-none focus:ring-0
                                focus:border-[var(--text-secondary)]
                            "
                        />
                        <svg
                            className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[var(--text-secondary)]"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M21 21l-4.35-4.35M10.5 18a7.5 7.5 0 100-15 7.5 7.5 0 000 15z"
                            />
                        </svg>
                    </div>

                    {/* More */}
                    <button className="h-9 w-9 flex items-center justify-center rounded-full hover:bg-[var(--icon-hover-bg)] transition">
                        <svg
                            className="h-5 w-5 text-[var(--text-secondary)]"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                        >
                            <circle cx="12" cy="5" r="1.5" />
                            <circle cx="12" cy="12" r="1.5" />
                            <circle cx="12" cy="19" r="1.5" />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Table */}
            <div className="overflow-visible">
                <table className="w-full text-left text-sm">

                    <thead className="border-b border-[var(--border-color)] text-[var(--text-primary)] text-base">
                        <tr>
                            <th className="py-3 pr-4 w-10">#</th>
                            <th className="py-3 pr-6 font-semibold">Products</th>
                            <th className="py-3 pr-6 font-semibold">Customer</th>
                            <th className="py-3 pr-6 font-semibold">Reviews</th>
                            <th className="py-3 pr-6 font-semibold">Status</th>
                            <th className="py-3 pr-6 font-semibold">Date</th>
                            <th className="py-3 text-right w-12"></th>
                        </tr>
                    </thead>

                    <tbody className="divide-y divide-[var(--border-color)]">
                        {reviewsData.map((review) => (
                            <tr
                                key={review.id}
                                className="transition hover:bg-[var(--icon-hover-bg)]/40"
                            >
                                {/* Checkbox */}
                                <td className="py-5 pr-4">
                                    <input
                                        type="checkbox"
                                        className="
                                            h-4 w-4 rounded-md
                                            border border-[var(--border-color)]
                                            bg-transparent
                                            cursor-pointer
                                        "
                                    />

                                    {/* <input
                                        type="checkbox"
                                        className="
                                                h-4 w-4 rounded-md
                                                border border-[var(--border-color)]
                                                bg-transparent
                                                cursor-pointer
                                                accent-[var(--chart-primary)]
                                            "
                                    /> */}



                                </td>

                                {/* Product */}
                                <td className="py-5 pr-6">
                                    <div className="flex items-center gap-3">
                                        <img
                                            src={review.product.image}
                                            alt={review.product.name}
                                            className="h-12 w-12 rounded-md object-cover"
                                        />
                                        <p className="max-w-[200px] text-sm font-medium text-[var(--text-primary)] line-clamp-2">
                                            {review.product.name}
                                        </p>
                                    </div>
                                </td>

                                {/* Customer */}
                                <td className="py-5 pr-6">
                                    <div className="flex items-center gap-3">
                                        <img
                                            src={review.customer.avatar}
                                            alt={review.customer.name}
                                            className="h-9 w-9 rounded-full object-cover"
                                        />
                                        <div>
                                            <p className="text-sm font-medium text-[var(--text-primary)]">
                                                {review.customer.name}
                                            </p>
                                            <p className="text-xs text-[var(--text-secondary)]">
                                                {review.customer.email}
                                            </p>
                                        </div>
                                    </div>
                                </td>

                                {/* Review */}
                                <td className="py-5 pr-6 max-w-[260px]">
                                    <div className="flex items-center gap-1 mb-1">
                                        {[1, 2, 3, 4, 5].map((star) => (
                                            <span
                                                key={star}
                                                className="text-sm"
                                                style={{
                                                    color:
                                                        star <= review.rating
                                                            ? "#facc15"   // yellow-400
                                                            : "#a1a19fff",
                                                }}
                                            >
                                                ★
                                            </span>

                                        ))}
                                    </div>
                                    <p className="text-xs text-[var(--text-secondary)] line-clamp-2">
                                        {review.review}
                                    </p>
                                </td>

                                {/* Status */}
                                <td className="py-5 pr-6">
                                    <span
                                        className={`inline-flex px-3 py-1 text-xs font-medium rounded-full border ${review.status === "confirmed"
                                            ? "bg-green-50 text-green-400 border-green-400"
                                            : "bg-red-50 text-red-400 border-red-400"
                                            }`}
                                    >
                                        {review.status === "confirmed" ? "Confirmed" : "Pending"}
                                    </span>
                                </td>

                                {/* Date */}
                                <td className="py-5 pr-6 text-sm text-[var(--text-secondary)]">
                                    {review.date}
                                </td>

                                {/* Actions */}
                                <td className="py-5 text-right">
                                    {/* <button className="h-9 w-9 flex items-center justify-center rounded-full hover:bg-[var(--icon-hover-bg)] transition">
                                        <svg
                                            className="h-5 w-5 text-[var(--text-secondary)]"
                                            viewBox="0 0 24 24"
                                            fill="currentColor"
                                        >
                                            <circle cx="12" cy="5" r="1.5" />
                                            <circle cx="12" cy="12" r="1.5" />
                                            <circle cx="12" cy="19" r="1.5" />
                                        </svg>
                                    </button> */}
                                    <ActionMenu
                                        onAdd={() => console.log("Add review")}
                                        onEdit={() => console.log("Edit review", review.id)}
                                        onDelete={() => console.log("Delete review", review.id)}
                                    />

                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default LatestReviews;



