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
                    <div className="grid grid-cols-[80px_1fr_40px] px-6 py-4 text-left">
                        <div className="text-[var(--text-secondary)]">{index}</div>

                        <div className="font-medium text-[var(--text-primary)]">
                            Q{index}: {item.question}
                        </div>

                        <div className="flex justify-end text-[var(--text-secondary)]">
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
                <div className="grid grid-cols-[80px_1fr] px-6 pb-4 text-sm">
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
