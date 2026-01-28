import ProfileOverviewCard from "../../components/profile/ProfileOverviewCard";
import PersonalInfoCard from "../../components/profile/PersonalInfoCard"
import AddressInfoCard from "../../components/profile/AddressInfoCard"

import { useState } from "react";
import EditProfileModal from "../../components/portal/EditProfileModal";



const Profile = () => {

    const [profile, setProfile] = useState({
        firstName: "Nike",
        lastName: "Nielsen",
        email: "nielsenmike@email.com",
        phone: "+1 (702) 555-0122",
        bio: "Team manager with 7+ years Experience",
        role: "Team Manager",
        location: "Arizona, United States",
        avatar: "/src/assets/avatar/avatar_images_3.jpeg",

        address: {
            country: "United States",
            state: "Arizona",
            postalCode: "85001",
            taxId: "TX-984758",
        },

        socials: {
            facebook: "#",
            twitter: "#",
            linkedin: "#",
            instagram: "#",
        },
    });

    const [isEditOpen, setIsEditOpen] = useState(false);


    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex items-center justify-between">
                <h1 className="text-2xl font-semibold">Profile</h1>
                <p className="text-sm text-[var(--text-secondary)]">
                    Home &gt; Profile
                </p>
            </div>

            {/* Overview */}
            <ProfileOverviewCard
                profile={{
                    name: `${profile.firstName} ${profile.lastName}`,
                    role: profile.role,
                    location: profile.location,
                    avatar: profile.avatar,
                    socials: profile.socials,
                }}
                onEdit={() => setIsEditOpen(true)}
            />

            <PersonalInfoCard
                profile={profile}
                onEdit={() => setIsEditOpen(true)}
            />

            <AddressInfoCard
                address={profile.address}
                onEdit={() => setIsEditOpen(true)}
            />

            <EditProfileModal
                isOpen={isEditOpen}
                profile={profile}
                onClose={() => setIsEditOpen(false)}
                onSave={setProfile}
            />

        </div>


    );
};

export default Profile;
