

// ========================================================

import { useState, useEffect } from "react";
import BaseModal from "./BaseModal";

const UpdateFAQModal = ({ open, faq, onClose, onSave }) => {
    const [question, setQuestion] = useState("");
    const [answer, setAnswer] = useState("");

    useEffect(() => {
        if (faq) {
            setQuestion(faq.question || "");
            setAnswer(faq.answer || "");
        }
    }, [faq]);

    return (
        <BaseModal open={open} onClose={onClose} title="Update FAQ" size="md">
            <div className="space-y-4 p-4">

                <input
                    value={question}
                    onChange={(e) => setQuestion(e.target.value)}
                    className="form-input"
                    placeholder="Question"
                />

                <textarea
                    value={answer}
                    onChange={(e) => setAnswer(e.target.value)}
                    className="form-input"
                    rows={4}
                    placeholder="Answer"
                />

                <div className="pt-4 flex justify-end gap-3 border-t border-[var(--border-color)]">
                    <button
                        onClick={onClose}
                        className="
                                px-4 py-2 rounded-lg border
                                border-[var(--border-color)]
                                hover:bg-[var(--icon-hover-bg)]
                            "
                    >
                        Cancel
                    </button>

                    <button
                        onClick={() => onSave({ ...faq, question, answer })}
                        className="px-5 py-2 rounded-lg
                            bg-[var(--color-brand)]
                            text-white font-medium
                        "
                    >
                        Save
                    </button>
                </div>

            </div>
        </BaseModal>
    );
};

export default UpdateFAQModal;

