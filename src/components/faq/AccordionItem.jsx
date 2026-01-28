import { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";


const AccordionItem = ({ item, index }) => {
    const [open, setOpen] = useState(false);

    return (
        <div className="border-b border-[var(--border-color)] last:border-none">

            {/* Question Row */}
            <button
                type="button"
                onClick={() => setOpen(!open)}
                className="
                        grid grid-cols-[80px_1fr_40px]
                        w-full py-4 text-left
                        hover:bg-[var(--icon-hover-bg)]
                        transition
                    "
            >
                <div className="text-[var(--text-secondary)]">
                    {index}
                </div>

                <div className="font-medium text-[var(--text-primary)]">
                    Q{index}: {item.question}
                </div>

                <div className="flex justify-end text-[var(--text-secondary)]">
                    {open ? <FiChevronUp /> : <FiChevronDown />}
                </div>
            </button>

            {/* Answer */}
            {open && (
                <div className="grid grid-cols-[80px_1fr] pb-4 text-sm">
                    <div></div>
                    <div className="text-[var(--text-secondary)]">
                        <span className="font-medium text-[var(--text-primary)]">
                            Ans:
                        </span>{" "}
                        {item.answer}
                    </div>
                </div>
            )}
        </div>
    );
};

export default AccordionItem;
