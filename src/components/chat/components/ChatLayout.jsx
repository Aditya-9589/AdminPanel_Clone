// left + right layout wrapper 

import React from "react";
import ChatSidebar from "../sidebar/ChatSidebar";

const ChatLayout = () => {
    return (
        <div className="h-full w-full flex rounded-2xl overflow-hidden
                    bg-[var(--bg-card)]
                    border border-[var(--border-color)]">

            {/* LEFT: CHAT SIDEBAR */}
            <aside
                className="
                    flex-[0.3]
                    max-w-sm
                    min-w-[14rem]
                    border-r border-[var(--border-color)]
                    bg-[var(--bg-muted)]
                "
            >
                {/* ChatSidebar will be mounted here */}
                <ChatSidebar />
            </aside>

            {/* RIGHT: CHAT CONVERSATION */}
            <section className="flex-[0.7] flex flex-col">

                {/* Header */}
                <header
                    className="
                        h-14
                        flex items-center
                        px-4
                        border-b border-[var(--border-color)]
                        text-sm font-medium
                        text-[var(--text-primary)]
                        bg-[var(--bg-card)]
                    "
                >
                    Select a user to start chatting
                </header>

                {/* Messages */}
                <main className="flex-1 overflow-y-auto p-4 
                            bg-[var(--bg-page)]">
                    {/* MessageList */}
                </main>

                {/* Input */}
                <footer
                    className="
                        h-14
                        px-4
                        flex items-center
                        border-t border-[var(--border-color)]
                        bg-[var(--bg-card)]
                    "
                >
                    {/* ChatInput */}
                </footer>

            </section>
        </div>
    );
};

export default ChatLayout;
