import React from 'react'
import UsersHeader from "./UsersHeader";
import UsersTable from "./UsersTable";


const Users = () => {
    return (
        <div className="space-y-6" >
            <UsersHeader />
            <UsersTable />
        </div>
    )
}

export default Users