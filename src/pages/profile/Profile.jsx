import ProfileOverviewCard from "../../components/profile/ProfileOverviewCard";
import PersonalInfoCard from "../../components/profile/PersonalInfoCard"
import AddressInfoCard from "../../components/profile/AddressInfoCard"


const Profile = () => {
    const adminProfile = {
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
    };

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
                    name: `${adminProfile.firstName} ${adminProfile.lastName}`,
                    role: adminProfile.role,
                    location: adminProfile.location,
                    avatar: adminProfile.avatar,
                    socials: adminProfile.socials,
                }}
                onEdit={() => console.log("Edit overview")}
            />

            {/* Personal Info */}
            <PersonalInfoCard
                profile={adminProfile}
                onEdit={() => console.log("Edit personal info")}
            />

            {/* Address Info */}
            <AddressInfoCard
                address={adminProfile.address}
                onEdit={() => console.log("Edit address info")}
            />
        </div>
    );
};

export default Profile;
