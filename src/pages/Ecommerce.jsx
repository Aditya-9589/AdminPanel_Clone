import React from 'react'
import ECommerce from "../ecommerce/Ecommerce"

const Ecommerce = () => {
    return (
        // <div>Ecommerce</div>

        <ECommerce />
    )
}

export default Ecommerce


// ####################################################################################


// import { useState } from "react";
// import ConfirmDelete from "../../components/overlays/ConfirmDelete";

// const [deleteOpen, setDeleteOpen] = useState(false);
// const [selectedProduct, setSelectedProduct] = useState(null);

// {
//     label: "Delete",
//         danger: true,
//             onClick: () => {
//                 setSelectedProduct(product);
//                 setDeleteOpen(true);
//             },
// }

// <ConfirmDelete
//     open={deleteOpen}
//     message={`Are you sure you want to delete "${selectedProduct?.name}"?`}
//     onCancel={() => {
//         setDeleteOpen(false);
//         setSelectedProduct(null);
//     }}
//     onConfirm={() => {
//         console.log("Deleting product:", selectedProduct?.id);

//         // FUTURE: API call here
//         // await deleteProduct(selectedProduct.id)

//         setDeleteOpen(false);
//         setSelectedProduct(null);
//     }}
// />

// ⏭️ NEXT STEP (Step 3)

// 👉 Update Product Overlay (Portal-based form)

// Editable fields

// Confirm / Cancel

// Same overlay system

// Reusable for Users later