// left + right layout wrapper 

import React, { useState } from "react";
import ChatSidebar from "../sidebar/ChatSidebar";
import ChatWindow from "../conversation/ChatWindow";

const ChatLayout = () => {

    const [activeUser, setActiveUser] = useState(null);

    return (
        <div className="h-full w-full flex rounded-2xl overflow-hidden
                    bg-[var(--bg-card)]
                    border border-[var(--border-color)]">

            {/* LEFT: CHAT SIDEBAR */}
            {/* On mobile: Hide if activeUser is selected. On desktop: Always show (flex-[0.3]) */}
            <aside
                className={`
                    ${activeUser ? "hidden md:block" : "w-full md:w-auto"}
                    md:flex-[0.3]
                    md:max-w-sm
                    md:min-w-[14rem]
                    border-r border-[var(--border-color)]
                    bg-[var(--bg-muted)]
                    h-full
                `}
            >
                {/* ChatSidebar will be mounted here */}
                <ChatSidebar
                    activeUser={activeUser}
                    onSelectUser={setActiveUser}
                />
            </aside>

            {/* RIGHT: CHAT CONVERSATION */}
            {/* On mobile: Show only if activeUser is selected. On desktop: Always show (flex-[0.7]) */}
            <section
                className={`
                    ${activeUser ? "flex w-full" : "hidden md:flex"}
                    md:flex-[0.7] flex-col h-full
                `}
            >
                {/* Pass onBack to clear activeUser and return to list on mobile */}
                <ChatWindow
                    activeUser={activeUser}
                    onBack={() => setActiveUser(null)}
                />

            </section>
        </div>
    );
};

export default ChatLayout;
