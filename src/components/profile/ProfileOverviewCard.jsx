import { FiFacebook, FiTwitter, FiLinkedin, FiInstagram, FiEdit } from "react-icons/fi";

const ProfileOverviewCard = ({ profile, onEdit }) => {
    return (
        <div
            className="
                bg-[var(--bg-card)]
                border border-[var(--border-color)]
                rounded-xl
                p-6
                flex items-center justify-between
                gap-6
            "
        >
            {/* LEFT */}
            <div className="flex items-center gap-5">
                <img
                    src={profile.avatar}
                    alt="profile"
                    className="w-20 h-20 rounded-full object-cover"
                />

                <div>
                    <h2 className="text-lg font-semibold text-[var(--text-primary)]">
                        {profile.name}
                    </h2>

                    <p className="text-sm text-[var(--text-secondary)]">
                        {profile.role} &nbsp;|&nbsp; {profile.location}
                    </p>
                </div>
            </div>

            {/* RIGHT */}
            <div className="flex items-center gap-3">
                <a href={profile.socials.facebook} className="icon-btn">
                    <FiFacebook />
                </a>
                <a href={profile.socials.twitter} className="icon-btn">
                    <FiTwitter />
                </a>
                <a href={profile.socials.linkedin} className="icon-btn">
                    <FiLinkedin />
                </a>
                <a href={profile.socials.instagram} className="icon-btn">
                    <FiInstagram />
                </a>

                <button
                    onClick={onEdit}
                    className="
                        ml-3
                        flex items-center gap-2
                        px-4 py-2
                        rounded-full
                        border
                        text-sm
                        hover:bg-[var(--icon-hover-bg)]
                        transition
                    "
                >
                    <FiEdit />
                    Edit
                </button>
            </div>
        </div>
    );
};

export default ProfileOverviewCard;
