
import { useState } from "react";

import ActionMenu from "../components/ui/ActionMenu";
import { productsData } from "../chartData/ecommerce/productsData";
import {
    PencilSquareIcon,
    TrashIcon,
} from "@heroicons/react/24/outline";
import DeleteConfirmPortal from "../components/portal/DeleteConfirmPortal"
import UpdateProductModal from "../components/portal/UpdateProductModal";

const ITEMS_PER_PAGE = 10;

const PAGE_WINDOW = 2;

const ProductsTable = () => {

    const [currentPage, setCurrentPage] = useState(1);

    const [deleteProductId, setDeleteProductId] = useState(null);
    const [isDeleteOpen, setIsDeleteOpen] = useState(false);

    const [isUpdateOpen, setIsUpdateOpen] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);


    const totalPages = Math.ceil(productsData.length / ITEMS_PER_PAGE);

    const startPage = Math.max(
        1,
        currentPage
    );

    const endPage = Math.min(
        totalPages,
        startPage + PAGE_WINDOW - 1
    );

    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const currentItems = productsData.slice(
        startIndex,
        startIndex + ITEMS_PER_PAGE,
    )

    return (
        <div className="bg-[var(--bg-card)] rounded-2xl p-6 shadow-sm">

            {/* Top controls */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
                <input
                    type="text"
                    placeholder="Search products..."
                    className="w-full sm:w-64 px-3 py-2 rounded-lg
                            border border-[var(--border-color)]
                            bg-transparent text-sm
                            text-[var(--text-primary)]
                            placeholder:text-[var(--text-secondary)]
                            focus:outline-none focus:ring-1 focus:ring-[var(--color-brand)]"
                />

                <button
                    className="px-4 py-2 rounded-lg
                            border border-[var(--border-color)]
                            text-sm font-medium
                            text-[var(--text-primary)]
                            hover:bg-[var(--icon-hover-bg)] transition"
                >
                    Filters
                </button>
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
                <table className="w-full text-sm">
                    <thead className="border-b border-[var(--border-color)]">
                        <tr className="text-left text-[var(--text-secondary)]">
                            <th className="py-3">Product</th>
                            <th className="py-3">Category</th>
                            <th className="py-3">Brand</th>
                            <th className="py-3">Price</th>
                            <th className="py-3">Stock</th>
                            <th className="py-3">Created</th>
                            <th className="py-3 text-right">Actions</th>
                        </tr>
                    </thead>

                    <tbody className="divide-y divide-[var(--border-color)]">
                        {/* {productsData.map((product) => ( */}
                        {currentItems.map((product) => (
                            <tr key={product.id}>

                                {/* Product */}
                                <td className="py-4">
                                    <div className="flex items-center gap-3">
                                        <img
                                            src={product.image}
                                            alt={product.name}
                                            className="h-10 w-10 rounded-md object-cover"
                                        />
                                        <span className="font-medium text-[var(--text-primary)]">
                                            {product.name}
                                        </span>
                                    </div>
                                </td>

                                <td className="py-4 text-[var(--text-primary)]">
                                    {product.category}
                                </td>

                                <td className="py-4 text-[var(--text-primary)]">
                                    {product.brand}
                                </td>

                                <td className="py-4 text-[var(--text-primary)]">
                                    {/* {product.price} */}
                                    $ {product.price}
                                </td>

                                {/* Stock badge */}
                                <td className="py-4">
                                    <span
                                        className={`px-3 py-1 rounded-full text-xs font-medium border
                                            ${product.stock === "In Stock"
                                                ? "bg-green-50 text-green-600 border-green-400"
                                                : "bg-red-50 text-red-600 border-red-400"
                                            }`}
                                    >
                                        {product.stock}
                                    </span>
                                </td>

                                <td className="py-4 text-[var(--text-secondary)]">
                                    {product.createdAt}
                                </td>

                                {/* Actions */}
                                <td className="py-4 text-right">
                                    <ActionMenu
                                        items={[
                                            {
                                                label: "Update",
                                                icon: <PencilSquareIcon className="h-4 w-4" />,
                                                onClick: () => {
                                                    setSelectedProduct(product);
                                                    setIsUpdateOpen(true);
                                                    console.log("Update product:", (product.id));
                                                },
                                            },
                                            {
                                                label: "Delete",
                                                icon: <TrashIcon className="h-4 w-4" />,
                                                danger: true,
                                                onClick: () => {
                                                    setDeleteProductId(product.id);
                                                    setIsDeleteOpen(true);
                                                    console.log("Product Deleted: ", (product.id));
                                                },
                                            },

                                        ]}
                                    />
                                </td>

                            </tr>

                        ))}
                    </tbody>
                </table>

                {/* Pagination */}
                < div className="flex items-center justify-between mt-6 text-sm" >
                    <p className="text-[var(--text-secondary)]">
                        Showing {startIndex + 1} to{" "}
                        {Math.min(startIndex + ITEMS_PER_PAGE, productsData.length)} of{" "}
                        {productsData.length}
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

            </div>

            {/* <DeleteConfirmPortal
                open={isDeleteOpen}
                onClose={() => {
                    setIsDeleteOpen(false);
                    setDeleteProductId(null);
                }}
                onConfirm={() => {
                    console.log("Confirm delete:", deleteProductId);
                    setIsDeleteOpen(false);
                    setDeleteProductId(null);
                }}
            /> */}

            <DeleteConfirmPortal
                open={isDeleteOpen}
                title="Delete Product"
                description="Are you sure you want to delete this product?"
                warningText="This action cannot be undone."
                onClose={() => {
                    setIsDeleteOpen(false);
                    setDeleteProductId(null);
                }}
                onConfirm={() => {
                    console.log("Confirm delete:", deleteProductId);
                    setIsDeleteOpen(false);
                    setDeleteProductId(null);
                }}
            />


            <UpdateProductModal
                open={isUpdateOpen}
                product={selectedProduct}
                onClose={() => {
                    setIsUpdateOpen(false);
                    setSelectedProduct(null);
                }}
                onSave={(updatedData) => {
                    console.log("Updated Product:", selectedProduct.id, updatedData);
                    setIsUpdateOpen(false);
                    setSelectedProduct(null);
                }}
            />


        </div >
    );
};

export default ProductsTable;

