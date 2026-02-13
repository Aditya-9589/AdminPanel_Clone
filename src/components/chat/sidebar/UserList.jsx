
// LIST WRAPPER :-

import React from 'react'
import UserListItem from './UserListItem'

// dummy users (will move to chartData later)

const USERS = [
    { id: 1, name: "Aditya Hariharno" },
    { id: 2, name: "Ayushi Sonwane" },
    { id: 3, name: "Adishi Kumar" },
    { id: 4, name: "Neil Sharma" },
    { id: 5, name: "Aman Mishra" },
    { id: 6, name: "Harsh Parouha" },
    { id: 7, name: "Kapil Pachori" },
    { id: 8, name: "Deepak Tiwari" },
    { id: 9, name: "Utkarsh Malviya" },
    { id: 10, name: "Satyam Singh" },
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
                    // onClick={() => onSelectUser(user.id)}
                    onClick={() => onSelectUser(user)}
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