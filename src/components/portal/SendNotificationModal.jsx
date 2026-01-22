import { useState } from "react";
import BaseModal from "./BaseModal";

const SendNotificationModal = ({ open, onClose, user, onSend }) => {
    const [message, setMessage] = useState("");

    if (!user) return null;

    return (
        <BaseModal open={open} onClose={onClose} size="md">
            {/* Header */}
            <div className="px-6 py-4 border-b border-[var(--border-color)]">
                <h2 className="text-lg font-semibold text-[var(--text-primary)]">
                    Hello {user.name}
                </h2>
            </div>

            {/* Body */}
            <div className="p-6 space-y-4">
                <textarea
                    rows={5}
                    placeholder="Write your notification message..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full resize-none rounded-xl
                        border border-[var(--border-color)]
                        bg-[var(--bg-input)]
                        px-4 py-3 text-sm
                        text-[var(--text-primary)]
                        focus:outline-none focus:ring-2
                        focus:ring-[var(--color-brand)]"
                />
            </div>

            {/* Footer */}
            <div className="flex justify-between px-6 py-4 border-t border-[var(--border-color)]">
                <button
                    onClick={onClose}
                    className="px-4 py-2 rounded-lg
                        border border-[var(--border-color)]
                        text-sm font-medium
                        hover:bg-[var(--icon-hover-bg)] transition"
                >
                    Cancel
                </button>

                <button
                    onClick={() => {
                        onSend(message);
                        setMessage("");
                    }}
                    disabled={!message.trim()}
                    className="px-5 py-2 rounded-lg
                        bg-[var(--color-brand)]
                        text-white text-sm font-medium
                        disabled:opacity-50
                        hover:opacity-90 transition"
                >
                    Send
                </button>
            </div>
        </BaseModal>
    );
};

export default SendNotificationModal;
