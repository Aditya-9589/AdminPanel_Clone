export default function NewGoalsCard() {
    return (
        <div className="relative rounded-2xl p-6 bg-[var(--color-new-goals-bg)] overflow-hidden flex-1">
            <div className="h-12 w-12 rounded-full bg-[var(--color-brand)] flex items-center justify-center text-white">
                💡
            </div>

            <div className="mt-6">
                <div className="flex justify-between mb-2">
                    <h6 className="font-medium">New Goals</h6>
                    <span className="text-[var(--color-brand)] font-semibold">
                        83%
                    </span>
                </div>

                <div className="h-1.5 rounded-full bg-white/50">
                    <div
                        className="h-full rounded-full bg-[var(--color-brand)]"
                        style={{ width: "83%" }}
                    />
                </div>
            </div>
        </div>
    );
}
