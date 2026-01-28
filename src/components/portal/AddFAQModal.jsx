import { useState } from "react";
import BaseModal from "./BaseModal";

const AddFAQModal = ({ open, onClose, onSave }) => {
    const [question, setQuestion] = useState("");
    const [answer, setAnswer] = useState("");

    const handleSave = () => {
        if (!question.trim() || !answer.trim()) return;
        onSave({ question, answer });
        setQuestion("");
        setAnswer("");
    };

    return (
        <BaseModal open={open} onClose={onClose} title="Add Question & Answer" size="md">
            <div className="space-y-4 p-4">

                <input
                    value={question}
                    onChange={(e) => setQuestion(e.target.value)}
                    className="form-input"
                    placeholder="Enter question"
                />

                <textarea
                    value={answer}
                    onChange={(e) => setAnswer(e.target.value)}
                    className="form-input"
                    rows={4}
                    placeholder="Enter answer"
                />

                <div className="pt-4 flex justify-end gap-3 border-t border-[var(--border-color)]">
                    <button
                        onClick={onClose}
                        className="px-4 py-2 rounded-lg border
                            border-[var(--border-color)]
                            hover:bg-[var(--icon-hover-bg)]"
                    >
                        Cancel
                    </button>

                    <button
                        onClick={handleSave}
                        className="px-5 py-2 rounded-lg
                            bg-[var(--color-brand)]
                            text-white font-medium"
                    >
                        Add
                    </button>
                </div>

            </div>
        </BaseModal>
    );
};

export default AddFAQModal;
