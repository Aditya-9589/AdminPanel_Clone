// SINGLE USER ROW

import React from 'react'

const UserListItem = ({ user, isActive, onClick }) => {
    return (
        // <div>UserListItem</div>

        <button
            onClick={onClick}
            className={`
                w-full text-left px-4 py-3 text-sm
                flex items-center gap-3
                border-b border-[var(--border-color)]
                transition-colors
                ${isActive
                    ? "bg-[var(--chat-selected-bg)] text-[var(--chat-selected-text)]"
                    : "hover:bg-[var(--icon-hover-bg)] text-[var(--text-primary)]"
                }

            `}
        >
            {/* Avatar placeholder  */}
            <div
                className="
                    h-8 w-8 rounded-full
                    flex items-center justify-center
                    bg-[var(--icon-hover-bg)]
                    text-xs font-medium
                "
            >
                {user.name.charAt(0)}
            </div>

            <span className='truncate' >{user.name}</span>
        </button>

    )
}

export default UserListItem