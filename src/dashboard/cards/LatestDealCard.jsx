const LatestDealCard = () => {
    const progress = 80; // percentage

    return (
        <div className="bg-white rounded-2xl p-6 shadow-sm w-full max-w-sm">

            {/* HEADER */}
            <div className="flex justify-between items-start mb-4">
                <div>
                    <h3 className="text-lg font-semibold text-gray-900">
                        Latest Deal
                    </h3>
                    <p className="text-sm text-gray-400">
                        Last 7 days
                    </p>
                </div>

                <span className="
                    inline-flex items-center
                    text-xs font-medium
                    text-green-600
                    bg-green-100
                    border border-green-300
                    px-2.5 py-0.5
                    rounded-full
                    transition-colors
                    hover:bg-green-500 hover:text-white
                ">
                    86.5%
                </span>
            </div>

            {/* AMOUNTS + PROGRESS */}
            <div className="my-6">
                <div className="flex justify-between mb-2">
                    <span className="text-base font-semibold text-gray-900">
                        $98,500
                    </span>
                    <span className="text-base font-semibold text-gray-900">
                        $1,22,900
                    </span>
                </div>

                {/* PROGRESS BAR */}
                <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div
                        className="h-full bg-blue-600 rounded-full transition-all"
                        style={{ width: `${progress}%` }}
                    />
                </div>

                <p className="text-sm text-gray-500 mt-2 font-medium">
                    Coupons used: 18/22
                </p>
            </div>

            {/* RECENT PURCHASERS */}
            <h4 className="text-sm font-semibold text-gray-900 mb-3">
                Recent Purchasers
            </h4>

            <div className="flex items-center">
                {[
                    // "/assets/user-1.jpg",
                    "https://spike-react-tailwind-main.netlify.app/assets/user-2-idGLMY7R.jpg",
                    "https://spike-react-tailwind-main.netlify.app/assets/user-3-HJ3opN5n.jpg",
                    "https://spike-react-tailwind-main.netlify.app/assets/user-4-Bw2gSpv_.jpg",
                    "https://spike-react-tailwind-main.netlify.app/assets/user-5-TcGtWTp3.jpg",
                ].map((src, i) => (
                    <img
                        key={i}
                        src={src}
                        alt="user"
                        className="
                            w-10 h-10 rounded-full
                            border-2 border-white
                            -ml-2 first:ml-0
                            object-cover
                        "
                    />
                ))}

                {/* +8 */}
                <div
                    className="
                        w-10 h-10 -ml-2
                        flex items-center justify-center
                        rounded-full
                        bg-blue-50
                        text-blue-600
                        text-sm font-semibold
                        border-2 border-white
                    "
                >
                    +8
                </div>
            </div>
        </div>
    );
};

export default LatestDealCard;
