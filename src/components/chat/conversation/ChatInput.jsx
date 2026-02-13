// message area + input 

import React, { useState, useRef } from "react";
import ImagePreview from "./ImagePreview";

const ChatInput = ({ onSend }) => {
    const [text, setText] = useState("");
    const [image, setImage] = useState(null);
    const fileInputRef = useRef(null);

    const handleSubmit = () => {
        if (!text && !image) return;

        let imageUrl = null;

        if (image) {
            imageUrl = URL.createObjectURL(image);
        }

        onSend({
            text: text || null,
            image: imageUrl,
        })

        setText("");
        setImage(null);

        if(fileInputRef.current) {
            fileInputRef.current.value = "";
        }
    };

    const handleKeyDown = (e) => {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            handleSubmit();
        }
    };

    return (
        // <div className="p-3 border-t border-[var(--border-color)] bg-[var(--bg-card)]">
        <div className="p-3 border-t border-[var(--chat-input-border)] bg-[var(--chat-input-bg)]">
            {image && <ImagePreview file={image} onRemove={() => setImage(null)} />}

            <div className="flex items-center gap-2">
                {/* <label className="cursor-pointer text-[var(--text-secondary)] hover:text-[var(--text-primary)]"> */}
                {/* <label className="cursor-pointer p-2 rounded-lg border border-[var(--chat-input-filed-border)] bg-[var(--chat-input-filed-bg)] text-[var(--text-secondary)] hover:bg-[var(--icon-hover-bg)] transition"> */}
                <label className="cursor-pointer p-2 rounded-lg border border-[var(--chat-attach-border)] bg-[var(--chat-attach-bg)] text-[var(--chat-attach-text)] hover:bg-[var(--chat-attach-hover-bg)] hover:border-[var(--chat-attach-hover-border)] transition">
                    📎
                    {/* + */}
                    <input
                    ref={fileInputRef}
                        type="file"
                        accept="image/*"
                        hidden
                        onChange={(e) => setImage(e.target.files[0])}
                    />
                </label>

                <input
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder="Type a message..."
                    className="
                        flex-1 px-4 py-2 text-sm rounded-lg
                        bg-[var(--chat-input-filed-bg)]
                        border border-[var(--chat-input-filed-border)]
                        text-[var(--text-primary)]
                        focus:outline-none
                        focus:ring-1 
                        focus:ring-[var(--chat-send-bg)]/30
                        "
                />

                <button
                    onClick={handleSubmit}
                    className="
                        px-5 py-2 rounded-lg text-sm font-medium
                        bg-[var(--chat-send-bg)]
                        text-[var(--chat-send-text)]
                        border border-transparent
                        hover:bg-[var(--chat-send-hover)]
                        transition
                    "
                >
                    Send
                </button>
            </div>
        </div>
    );
};

export default ChatInput;
