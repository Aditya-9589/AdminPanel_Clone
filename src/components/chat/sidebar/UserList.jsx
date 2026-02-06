
// LIST WRAPPER :-

import React from 'react'
import UserListItem from './UserListItem'

// dummy users (will move to chartData later)

const USERS = [
    { id: 1, name: "Ayushi" },
    { id: 2, name: "Aditya" },
    { id: 3, name: "Adishi" },
    { id: 4, name: "Neil" },
    { id: 5, name: "Aman" },
    { id: 6, name: "Harsh" },
    { id: 7, name: "Kapil" },
];

const UserList = ({ search, activeUserId, onSelectUser }) => {

    const filteredUsers = USERS.filter((user) =>
        user.name.toLowerCase().startsWith(search.toLowerCase())
    );

    return (
        <div className="flex flex-col" >
            {filteredUsers.map((user) => (
                <UserListItem 
                    key={user.id}
                    user={user}
                    isActive={user.id === activeUserId}
                    onClick={() => onSelectUser(user.id)}
                />
            ))}

            {filteredUsers.length === 0 && (
                <p className="text-sm text-[var(--text-secondary)] px-4 py-6" >
                    No users found
                </p>
            )}
        </div>
    )
}

export default UserList