const UsersHeader = () => {
    return (
        <div className="bg-[var(--bg-card)] rounded-2xl p-6 shadow-sm">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                    <h2 className="text-xl font-semibold text-[var(--text-primary)]">
                        Users
                    </h2>
                    <p className="text-sm text-[var(--text-secondary)]">
                        Manage users, roles, and access controls
                    </p>
                </div>
            </div>
        </div>
    );
};

export default UsersHeader;
