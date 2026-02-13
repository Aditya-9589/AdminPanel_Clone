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
                <ChatSidebar
                    activeUser={activeUser}
                    onSelectUser={setActiveUser}
                />
            </aside>

            {/* RIGHT: CHAT CONVERSATION */}
            <section className="flex-[0.7] flex flex-col">

                <ChatWindow activeUser={activeUser} />

            </section>
        </div>
    );
};

export default ChatLayout;
