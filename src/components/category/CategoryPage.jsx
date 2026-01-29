import { useState } from "react";
import CategoryTable from "./CategoryTable";
import AddCategoryModal from "../portal/AddCategoryModal"
import UpdateCategoryModal from "../portal/UpdateCategoryModal";
import DeleteConfirmPortal from "../portal/DeleteConfirmPortal";
// import CategoryRow from "./CategoryRow";

const CategoryPage = ({ categoryId }) => {

    const [isAddOpen, setIsAddOpen] = useState(false);

    const [isUpdateOpen, setIsUpdateOpen] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [isDeleteOpen, setIsDeleteOpen] = useState(false);

    return (
        <div className="bg-[var(--bg-card)] rounded-2xl p-6 shadow-sm">

            {/* Header */}
            <div className="flex items-start justify-between pb-4 border-b border-[var(--border-color)]">
                <div>
                    <h1 className="text-lg font-semibold text-[var(--text-primary)]">
                        Category{categoryId ? ` / ${categoryId}` : ""}
                    </h1>
                    <p className="text-sm text-[var(--text-secondary)]">
                        Manage product categories
                    </p>
                </div>

                <button
                    onClick={() => setIsAddOpen(true)}
                    className="px-4 py-2 rounded-lg
                            bg-[var(--color-brand)]
                            text-white text-sm font-medium"
                >
                    + Add Category
                </button>
            </div>

            {/* <CategoryTable categoryId={categoryId} /> */}
            <CategoryTable
                categoryId={categoryId}
                onEdit={(category) => {
                    setSelectedCategory(category);
                    setIsUpdateOpen(true);
                }}
                onDelete={(category) => {
                    setSelectedCategory(category);
                    setIsDeleteOpen(true);
                }}
            />

            <AddCategoryModal
                open={isAddOpen}
                onClose={() => setIsAddOpen(false)}
                onSave={(data) => {
                    console.log("Add Category:", data);
                    setIsAddOpen(false);
                }}
            />

            <UpdateCategoryModal
                open={isUpdateOpen}
                category={selectedCategory}
                onClose={() => {
                    setIsUpdateOpen(false);
                    setSelectedCategory(null);
                }}
                onSave={(updatedCategory) => {
                    console.log("Updated Category:", updatedCategory);
                    setIsUpdateOpen(false);
                    setSelectedCategory(null);
                }}
            />

            <DeleteConfirmPortal
                open={isDeleteOpen}
                title="Delete Category"
                description="Are you sure you want to delete this category?"
                warningText="This action will permanently remove the category."
                onClose={() => {
                    setIsDeleteOpen(false);
                    setSelectedCategory(null);
                }}
                onConfirm={() => {
                    console.log("Deleted Category:", selectedCategory);
                    setIsDeleteOpen(false);
                    setSelectedCategory(null);
                }}
            />


        </div>
    );
};

export default CategoryPage;
