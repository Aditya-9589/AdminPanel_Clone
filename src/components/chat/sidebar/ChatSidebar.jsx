
// SEARCH + USER LIST CONTAINER :-


import React, { useState } from 'react'
import UserSearch from './UserSearch'
import UserList from './UserList'

const ChatSidebar = ({ activeUser, onSelectUser }) => {

    const [search, setSearch] = useState("");
    // const [activeUserId, setActiveUserId] = useState(null);

    return (
        <div className='h-full flex flex-col' >

            {/* Search  */}
            <div className="p-4 border-b border-[var(--border-color)]" >
                <UserSearch  value={search} onChange={setSearch} />
            </div>

            {/* User List  */}
            <div className="flex-1 overflow-y-auto chat-scroll" >
                <UserList 
                    search={search}
                    activeUserId={activeUser?.id}
                    onSelectUser={onSelectUser}
                />
            </div>

        </div>
    )
}

export default ChatSidebar