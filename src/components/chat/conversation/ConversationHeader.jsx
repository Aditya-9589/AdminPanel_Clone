import React from 'react'

const ConversationHeader = ({ user }) => {
    return (
        <div className="px-4 py-3 border-b border-[var(--border-color)] bg-[var(--bg-card)] flex items-center gap-3" >

            <div className="
                    w-9 h-9 rounded-full
                    flex items-center justify-center
                    bg-[var(--chat-selected-bg)]
                    text-[var(--chat-selected-text)]
                    font-medium
                ">
                {user?.name?.charAt(0)?.toUpperCase()}
            </div>


            <div className="flex flex-col" >
                <h2 className="text-[var(--text-primary)] font semibold" >
                    {user?.name}
                </h2>

                <p className="text-sm text-[var(--text-secondary)]" >
                    Online
                </p>
            </div>

        </div>
    )
}

export default ConversationHeader