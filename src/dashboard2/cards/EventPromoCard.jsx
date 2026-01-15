import avatar1 from "../../assets/avatar/avatar-1.png";
import avatar2 from "../../assets/avatar/avatar-2.jpg";
import avatar3 from "../../assets/avatar/avatar-3.jpg";
import avatar4 from "../../assets/avatar/avatar-4.jpg";
// import avatar5 from "../../assets/avatar/avatar-5.jpg";

import gift from "../../assets/gifts/gift.png"


const avatars = [avatar1, avatar2, avatar3, avatar4];



export default function EventPromoCard() {
    return (
        <div className="bg-[var(--color-bg-card)] rounded-2xl overflow-hidden shadow-sm h-full flex flex-col">
            <div className="bg-pink-50 flex justify-center py-6">
                <img src={gift} alt="promo" />
            </div>

            <div className="p-6">
                <h5 className="font-semibold">
                    Figma Tips and Tricks with Stephan
                </h5>
                <p className="text-sm text-[var(--text-secondary)] mt-2">
                    Checkout latest events going to happen in USA.
                </p>

                <div className="flex mt-4">
                    {avatars.map((src, idx) => (
                        <img
                            key={idx}
                            src={src}
                            alt={`avatar-${idx + 1}`}
                            className="-ml-2 h-10 w-10 rounded-full border-2 border-white dark:border-darkborder"
                        />
                    ))}

                    <div className="-ml-2 h-10 w-10 rounded-full bg-sky-200  flex items-center justify-center text-sm font-medium">
                        +8
                    </div>
                </div>

            </div>
        </div>
    );
}
