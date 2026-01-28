// import React from 'react'

// const login = () => {
//     return (
//         <div>login Mike</div>
//     )
// }

// export default login

// ==========================================================

import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        // TEMP: replace with real auth later
        console.log("Login payload:", { email, password });

        // After successful login
        navigate("/");
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-[var(--bg-body)] px-4">
            <div className="w-full max-w-md bg-[var(--bg-card)] border border-[var(--border-color)] rounded-2xl p-8 shadow-sm">

                {/* Header */}
                <div className="mb-6 text-center">
                    <h1 className="text-2xl font-semibold text-[var(--text-primary)]">
                        Sign in
                    </h1>
                    <p className="text-sm text-[var(--text-secondary)] mt-1">
                        Welcome back! Please login to your account
                    </p>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-5">

                    {/* Email */}
                    <div className="space-y-1.5">
                        <label className="text-sm font-medium text-[var(--text-secondary)]">
                            Email address
                        </label>
                        <input
                            type="email"
                            placeholder="you@example.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="
                                w-full
                                px-4 py-2.5
                                rounded-lg
                                border border-[var(--border-color)]
                                bg-transparent
                                text-sm
                                text-[var(--text-primary)]
                                outline-none
                                focus:ring-2
                                focus:ring-[var(--color-brand)]
                            "
                        />
                    </div>

                    {/* Password */}
                    <div className="space-y-1.5">
                        <label className="text-sm font-medium text-[var(--text-secondary)]">
                            Password
                        </label>
                        <input
                            type="password"
                            placeholder="Enter your password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            className="
                                w-full
                                px-4 py-2.5
                                rounded-lg
                                border border-[var(--border-color)]
                                bg-transparent
                                text-sm
                                text-[var(--text-primary)]
                                outline-none
                                focus:ring-2
                                focus:ring-[var(--color-brand)]
                            "
                        />
                    </div>

                    {/* Submit */}
                    <button
                        type="submit"
                        className="
                            w-full
                            py-2.5
                            rounded-lg
                            bg-[var(--color-brand)]
                            text-white
                            text-sm
                            font-medium
                            hover:opacity-90
                            transition
                        "
                    >
                        Sign in
                    </button>
                </form>

                {/* Footer */}
                <div className="mt-6 text-center text-sm text-[var(--text-secondary)]">
                    © {new Date().getFullYear()} Your Company. All rights reserved.
                </div>
            </div>
        </div>
    );
};

export default Login;
