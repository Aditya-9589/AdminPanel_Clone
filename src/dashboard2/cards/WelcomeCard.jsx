import React from "react";
import welcomeBgImage from "../../assets/welcome_bg_image/welcome_bg_image.png"

const WelcomeCard = () => {
    return (
        <div
            className="
                relative h-full overflow
                rounded-2xl p-6
                bg-white dark:bg-[var(--bg-card)]
                shadow-sm dark:shadow-dark-sm
            "
        >
            <div className="flex h-full flex-col justify-between md:flex-row md:items-center gap-6">

                {/* LEFT CONTENT */}
                <div className="flex flex-col gap-4 z-10">
                    <div>
                        {/* <h4 className="text-xl font-semibold text-gray-900 dark:text-white flex items-center gap-2"> */}
                        <h5 className="text-xl font-semibold text-black-900 flex items-center gap-2">
                            Good Morning, Mike
                            {/* <span className="flex items-center justify-center h-8 w-8 rounded-full bg-blue-100 dark:bg-blue-900/40">
                                ☀️
                            </span> */}
                        </h5>

                        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                            Welcome to SpikeAdmin!
                        </p>
                    </div>

                    <button
                        className="
                            w-fit rounded-full px-6 py-2.5 text-sm font-medium
                            bg-[var(--color-brand)] text-white
                            hover:bg-[var(--color-brand-dark)]
                            transition-colors
                        "
                        // className="
                        //     w-fit rounded-full px-6 py-2.5 text-sm font-medium
                        //     bg-#2563EB text-white
                        //     hover:bg-blue-700
                        //     transition-colors
                        // "
                    >
                        Visit Now
                    </button>
                </div>

                {/* RIGHT IMAGE */}
                <img
                    // src="/assets/welcome-bg.png"
                    src={welcomeBgImage}
                    alt="Welcome Illustration"
                    className="
                        hidden md:block
                        absolute right-4 bottom-0
                        h-44 object-contain
                        pointer-events-none
                    "
                />
            </div>
        </div>
    );
};

export default WelcomeCard;
