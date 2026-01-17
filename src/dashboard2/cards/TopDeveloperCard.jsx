
import avatar from "../../assets/avatar/avatar-1.png"

export default function TopDeveloperCard() {
    return (
        <div className="bg-[var(--bg-card)] rounded-2xl p-6 shadow-sm flex-1">
            <div className="flex justify-between items-center">
                <img
                    // src="/assets/user-3.jpg"
                    src={avatar}
                    className="h-14 w-14 rounded-full"
                />
                <span className="text-warning font-semibold text-[#F9BE74]">#1 in DevOps</span>
            </div>

            <div className="mt-4">
                <h5 className="font-semibold text-lg">Adam Johnson</h5>
                <p className="text-sm text-[var(--text-secondary)]">
                    Top Developer
                </p>
            </div>
        </div>
    );
}
