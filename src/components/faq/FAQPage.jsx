
import Accordion from "./Accordion";
import { faqData } from "../../chartData/faq/faqData";

const FAQPage = () => {
    return (
        <div className="bg-[var(--bg-card)] rounded-2xl p-6 shadow-sm">

            {/* Header */}
            <div className="pb-4 border-b border-[var(--border-color)]">
                <h1 className="text-lg font-semibold text-[var(--text-primary)]">
                    Frequently Asked Questions and Answers
                </h1>
            </div>

            {/* Table Head */}
            <div className="
                    grid grid-cols-[80px_1fr_40px]
                    py-3 text-sm font-medium
                    text-[var(--text-secondary)]
                    border-b border-[var(--border-color)]
                ">
                <div>S. No.</div>
                <div>Questions and Answers</div>
                <div></div>
            </div>

            <Accordion items={faqData} />
        </div>
    );
};

export default FAQPage;
