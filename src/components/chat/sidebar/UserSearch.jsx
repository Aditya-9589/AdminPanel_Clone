// SEARCH INPUT :-

import React from 'react'

const UserSearch = ({ value, onChange }) => {
    return (
        // <div>UserSearch</div>

        <input 
            type="text" 
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder="Search users..."
            className="
                w-full rounded-lg px-3 py-2 text-sm
                bg-[var(--bg-page)]
                text-[var(--text-primary)]
                placeholder:text-[var(--text-secondary)]
                border border-[var(--border-color)]
                focus:outline-none focus:ring-1
                focus:ring-[var(--accent-color)]
            "
        />
    )
}

export default UserSearch