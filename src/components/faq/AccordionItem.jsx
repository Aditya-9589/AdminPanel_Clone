import { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { PencilSquareIcon, TrashIcon } from "@heroicons/react/24/outline";
import ActionMenu from "../ui/ActionMenu";


const AccordionItem = ({
    item,
    index,
    onEdit,
    onDelete
}) => {
    const [open, setOpen] = useState(false);

    return (
        <div className="border-b border-[var(--border-color)] last:border-none">

            {/* Question Row */}
            <div className="flex items-start mx hover:bg-[var(--icon-hover-bg)] transition">

                <button
                    type="button"
                    onClick={() => setOpen(!open)}
                    className="flex-1"
                >
                    <div className="flex items-start gap-4 px-4 py-4 sm:px-6 text-left">
                        {/* Index — hidden on mobile */}
                        <div className="hidden sm:block w-[50px] shrink-0 text-[var(--text-secondary)]">
                            {index}
                        </div>

                        {/* Question */}
                        <div className="flex-1 font-medium text-[var(--text-primary)]">
                            <span className="sm:hidden font-bold text-[var(--text-secondary)] mr-2">
                                Q{index}.
                            </span>
                            {item.question}
                        </div>

                        {/* Icon */}
                        <div className="flex shrink-0 text-[var(--text-secondary)] mt-1">
                            {open ? <FiChevronUp /> : <FiChevronDown />}
                        </div>
                    </div>
                </button>

                {/* Actions */}
                <div className="pr-4 pt-4">
                    <ActionMenu
                        items={[
                            {
                                label: "Update",
                                icon: <PencilSquareIcon className="h-4 w-4" />,
                                onClick: () => onEdit(item),
                            },
                            {
                                label: "Delete",
                                icon: <TrashIcon className="h-4 w-4" />,
                                danger: true,
                                onClick: () => onDelete(item),
                            },
                        ]}
                    />
                </div>
            </div>

            {/* Answer */}
            {open && (
                <div className="flex items-start gap-4 px-4 pb-4 sm:px-6 text-sm">
                    {/* Spacer for index alignment */}
                    <div className="hidden sm:block w-[50px] shrink-0"></div>

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
