// single message bubble 

import React from "react";

const MessageItem = ({ message }) => {
    const isAdmin = message.sender === "admin";

    return (
        <div className={`flex ${isAdmin ? "justify-end" : "justify-start"}`}>
            <div
                className={`
                    max-w-[70%] rounded-xl px-4 py-2 text-sm shadow-sm
                    ${isAdmin
                        ? "bg-[var(--chat-admin-bg)] text-[var(--chat-admin-text)] border-[var(--chat-admin-border)]"
                        : "bg-[var(--chat-user-bg)] text-[var(--chat-user-text)] border-[var(--chat-user-border)]"}
                `}
            >
                {message.text && <p>{message.text}</p>}

                {message.image && (
                    <img
                        src={message.image}
                        alt="attachment"
                        className="mt-2 max-h-40 rounded-lg"
                    />
                )}
            </div>
        </div>
    );
};

export default MessageItem;
