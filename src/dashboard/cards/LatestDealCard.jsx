import avatar1 from "../../assets/avatar/avatar-1.png";
import avatar2 from "../../assets/avatar/avatar-2.jpg";
import avatar3 from "../../assets/avatar/avatar-3.jpg";
import avatar4 from "../../assets/avatar/avatar-4.jpg";

const avatars = [avatar1, avatar2, avatar3, avatar4];

const LatestDealCard = () => {
    const progress = 80;

    return (
        // <div className="bg-[var(--bg-card)] rounded-2xl p-6 shadow-sm w-full max-w-sm">
        <div className="bg-[var(--bg-card)] rounded-xl p-6 shadow-sm h-full flex flex-col">

            {/* HEADER */}
            <div className="flex justify-between items-start mb-4">
                <div>
                    <h3 className="text-lg font-semibold text-[var(--text-primary)]">
                        Latest Deal
                    </h3>
                    <p className="text-sm text-[var(--text-secondary)]">
                        Last 7 days
                    </p>
                </div>

                <span
                    className="inline-flex items-center text-xs font-medium px-2.5 py-0.5 rounded-full 
                            border transition-colors bg-green-100 text-green-600 border-green-400
                    "
                // style={{
                //     background: "var(--chart-success)",
                //     color: "#fff",
                //     borderColor: "var(--chart-success)",
                // }}
                >
                    86.5%
                </span>
            </div>

            {/* AMOUNTS + PROGRESS */}
            <div className="my-6">
                <div className="flex justify-between mb-2">
                    <span className="text-base font-semibold text-[var(--text-primary)]">
                        $98,500
                    </span>
                    <span className="text-base font-semibold text-[var(--text-primary)]">
                        $1,22,900
                    </span>
                </div>

                {/* PROGRESS BAR */}
                <div className="w-full h-2 bg-[var(--border-color)] rounded-full overflow-hidden">
                    <div
                        className="h-full rounded-full transition-all"
                        style={{
                            width: `${progress}%`,
                            background: "var(--chart-primary)",
                        }}
                    />
                </div>

                <p className="text-sm text-[var(--text-secondary)] mt-2 font-medium">
                    Coupons used: 18/22
                </p>
            </div>

            {/* RECENT PURCHASERS */}
            <h4 className="text-sm font-semibold text-[var(--text-primary)] mb-3">
                Recent Purchasers
            </h4>

            <div className="flex items-center">
                {avatars.map((src, i) => (
                    <img
                        key={i}
                        src={src}
                        alt="user"
                        className="
                            w-10 h-10 rounded-full
                            border-2 border-[var(--bg-card)]
                            -ml-2 first:ml-0
                            object-cover
                        "
                    />
                ))}

                {/* +8 */}
                <div
                    className="w-10 h-10 -ml-2 flex items-center justify-center rounded-full text-sm font-semibold border-2"
                    style={{
                        background: "var(--icon-hover-bg)",
                        color: "var(--icon-hover-text)",
                        borderColor: "var(--bg-card)",
                    }}
                >
                    +8
                </div>
            </div>

        </div>
    );
};

export default LatestDealCard;
