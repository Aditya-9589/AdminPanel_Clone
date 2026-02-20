import React from 'react'
import { FiMoreVertical, FiPhone, FiVideo, FiArrowLeft } from "react-icons/fi";

const ConversationHeader = ({ user, onBack }) => {
    return (
        <div className="px-4 py-3 border-b border-[var(--border-color)] bg-[var(--bg-card)] flex items-center justify-between">
            <div className="flex items-center gap-3">
                {/* Back Button (Mobile only) */}
                <button
                    onClick={onBack}
                    className="md:hidden p-2 -ml-2 text-[var(--text-secondary)] hover:text-[var(--text-primary)] rounded-full hover:bg-[var(--icon-hover-bg)]"
                >
                    <FiArrowLeft size={20} />
                </button>


                <div className="relative">
                    <div className="
                        w-10 h-10 rounded-full
                        flex items-center justify-center
                        bg-[var(--chat-selected-bg)]
                        text-[var(--chat-selected-text)]
                        font-medium text-sm
                    ">
                        {user?.name?.charAt(0)?.toUpperCase()}
                    </div>
                    <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-[var(--bg-card)] rounded-full"></span>
                </div>

                <div className="flex flex-col">
                    <h2 className="text-[var(--text-primary)] font-semibold text-sm">
                        {user?.name}
                    </h2>
                    <p className="text-xs text-[var(--text-secondary)]">
                        Online
                    </p>
                </div>
            </div>

            <div className="flex items-center gap-1 text-[var(--text-secondary)]">
                <button className="p-2 hover:bg-[var(--icon-hover-bg)] rounded-full transition">
                    <FiPhone className="w-4 h-4" />
                </button>
                <button className="p-2 hover:bg-[var(--icon-hover-bg)] rounded-full transition">
                    <FiVideo className="w-5 h-5" />
                </button>
                <button className="p-2 hover:bg-[var(--icon-hover-bg)] rounded-full transition">
                    <FiMoreVertical className="w-5 h-5" />
                </button>
            </div>

        </div>
    )
}

export default ConversationHeader