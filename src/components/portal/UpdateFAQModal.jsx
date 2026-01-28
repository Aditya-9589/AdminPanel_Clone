
// import { useState } from "react";


// const UpdateFAQModal = ({ open, faq, onClose, onSave }) => {
//     const [question, setQuestion] = useState(faq?.question || "");
//     const [answer, setAnswer] = useState(faq?.answer || "");

//     if (!open) return null;

//     return (
//         <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
//             <div className="bg-[var(--bg-card)] p-6 rounded-xl w-full max-w-md">

//                 <h2 className="text-lg font-semibold mb-4 text-[var(--text-primary)]">
//                     Update FAQ
//                 </h2>

//                 <input
//                     value={question}
//                     onChange={(e) => setQuestion(e.target.value)}
//                     className="w-full mb-3 px-3 py-2 border border-[var(--border-color)]
//                             rounded-md bg-transparent"
//                     placeholder="Question"
//                 />

//                 <textarea
//                     value={answer}
//                     onChange={(e) => setAnswer(e.target.value)}
//                     className="w-full mb-4 px-3 py-2 border border-[var(--border-color)]
//                             rounded-md bg-transparent"
//                     rows={4}
//                     placeholder="Answer"
//                 />

//                 <div className="flex justify-end gap-2">
//                     <button onClick={onClose} className="px-4 py-2 rounded-lg border
//                                 border-[var(--border-color)]
//                                 hover:bg-[var(--icon-hover-bg)]
//                             ">
//                         Cancel
//                     </button>
//                     <button
//                         onClick={() => onSave({ ...faq, question, answer })}
//                         className="px-4 py-2 bg-[var(--color-brand)] text-white rounded-md"
//                     >
//                         Save
//                     </button>
//                 </div>

//             </div>
//         </div>
//     );
// };

// export default UpdateFAQModal;

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

