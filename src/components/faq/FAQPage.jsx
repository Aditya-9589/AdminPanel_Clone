
import { useState } from "react";
import Accordion from "./Accordion";
import { faqData } from "../../chartData/faq/faqData";
import DeleteConfirmPortal from "../portal/DeleteConfirmPortal";
import UpdateFAQModal from "../portal/UpdateFAQModal";
import AddFAQModal from "../portal/AddFAQModal";



const FAQPage = () => {
    const [isAddOpen, setIsAddOpen] = useState(false);
    const [selectedFAQ, setSelectedFAQ] = useState(null);
    const [isDeleteOpen, setIsDeleteOpen] = useState(false);
    const [isUpdateOpen, setIsUpdateOpen] = useState(false);

    return (
        <div className="bg-[var(--bg-card)] rounded-2xl p-6 shadow-sm">

            {/* Header with action */}
            <div className="flex items-start justify-between pb-4 border-b border-[var(--border-color)]">
                <div>
                    <h1 className="text-lg font-semibold text-[var(--text-primary)]">
                        Frequently Asked Questions and Answers
                    </h1>
                    <p className="text-sm text-[var(--text-secondary)]">
                        Manage common questions shown to users
                    </p>
                </div>

                <button
                    onClick={() => setIsAddOpen(true)}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg
                            bg-[var(--color-brand)] text-white text-sm font-medium
                            hover:bg-[var(--color-brand-dark)]"
                >
                    + Add Question
                </button>
            </div>

            {/* <div className="pb-4 border-b border-[var(--border-color)]">
                <h1 className="text-lg font-semibold text-[var(--text-primary)]">
                    Frequently Asked Questions and Answers
                </h1>
            </div> */}

            <div className="grid grid-cols-[80px_1fr_40px] py-3 text-sm font-medium
                        text-[var(--text-secondary)] border-b border-[var(--border-color)]">
                <div>S. No.</div>
                <div>Questions and Answers</div>
                <div></div>
            </div>

            <Accordion
                items={faqData}
                onEdit={(faq) => {
                    setSelectedFAQ(faq);
                    setIsUpdateOpen(true);
                }}
                onDelete={(faq) => {
                    setSelectedFAQ(faq);
                    setIsDeleteOpen(true);
                }}
            />


            {/* Add FAQ */}
            <AddFAQModal
                open={isAddOpen}
                onClose={() => setIsAddOpen(false)}
                onSave={(newFAQ) => {
                    console.log("Add FAQ:", newFAQ);
                    setIsAddOpen(false);
                }}
            />

            {/* Delete */}
            {/* <DeleteConfirmPortal
                open={isDeleteOpen}
                onClose={() => {
                    setIsDeleteOpen(false);
                    setSelectedFAQ(null);
                }}
                onConfirm={() => {
                    console.log("Deleted FAQ:", selectedFAQ?.id);
                    setIsDeleteOpen(false);
                    setSelectedFAQ(null);
                }}
            /> */}
            <DeleteConfirmPortal
                open={isDeleteOpen}
                title="Delete Question"
                description="Are you sure you want to delete this question and answer?"
                warningText="This action cannot be undone."
                onClose={() => {
                    setIsDeleteOpen(false);
                    setSelectedFAQ(null);
                }}
                onConfirm={() => {
                    console.log("Deleted FAQ:", selectedFAQ?.id);
                    setIsDeleteOpen(false);
                    setSelectedFAQ(null);
                }}
            />


            {/* Update */}
            <UpdateFAQModal
                open={isUpdateOpen}
                faq={selectedFAQ}
                onClose={() => {
                    setIsUpdateOpen(false);
                    setSelectedFAQ(null);
                }}
                onSave={(updatedFAQ) => {
                    console.log("Updated FAQ:", updatedFAQ);
                    setIsUpdateOpen(false);
                    setSelectedFAQ(null);
                }}
            />
        </div>
    );
};

export default FAQPage;
