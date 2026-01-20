import { useState } from "react";
import ProductsHeader from "./ProductsHeader";
import ProductsTable from "./ProductsTable";
import AddProductModal from "../components/portal/AddProductModal";

const Ecommerce = () => {
    const [isAddOpen, setIsAddOpen] = useState(false);

    return (
        <div className="space-y-6">
            <ProductsHeader onAddProduct={() => setIsAddOpen(true)} />
            <ProductsTable />

            {isAddOpen && (
                <AddProductModal
                    isOpen={isAddOpen}
                    onClose={() => setIsAddOpen(false)}
                    onSubmit={(data) => {
                        console.log(data);
                        setIsAddOpen(false);
                    }}
                />
            )}

        </div>
    );
};

export default Ecommerce;
