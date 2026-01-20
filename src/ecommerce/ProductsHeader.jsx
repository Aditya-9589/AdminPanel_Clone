import { PlusIcon, ArrowDownTrayIcon } from "@heroicons/react/24/outline";

const ProductsHeader = ({ onAddProduct }) => {
    return (
        <div className="bg-[var(--bg-card)] rounded-2xl p-6 shadow-sm">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">

                {/* Left */}
                <div>
                    <h2 className="text-xl font-semibold text-[var(--text-primary)]">
                        Products
                    </h2>
                    <p className="text-sm text-[var(--text-secondary)]">
                        Track your store’s progress to boost your sales
                    </p>
                </div>

                {/* Right */}
                <div className="flex items-center gap-3">
                    <button
                        className="flex items-center gap-2 px-4 py-2 rounded-lg
                            border border-[var(--border-color)]
                            text-sm font-medium text-[var(--text-primary)]
                            hover:bg-[var(--icon-hover-bg)] transition"
                    >
                        <ArrowDownTrayIcon className="h-4 w-4" />
                        Export
                    </button>

                    <button
                        onClick={onAddProduct}
                        className="flex items-center gap-2 px-4 py-2 rounded-lg
                            bg-[var(--color-brand)] text-white
                            text-sm font-medium hover:opacity-90 transition"
                    >
                        <PlusIcon className="h-4 w-4" />
                        Add Product
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductsHeader;
