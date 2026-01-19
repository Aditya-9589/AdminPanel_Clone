import { FiHome, FiLayout, FiUsers, FiShoppingCart } from "react-icons/fi";

export const sidebarSections = [
    {
        title: "Home",
        items: [
            {
                label: "Dashboard 1",
                path: "/dashboard",
                // icon: <FiHome />
                icon: FiHome ,
            },
            {
                label: "Dashboard 2",
                path: "/dashboard2",
                icon: FiLayout,
            },
        ],
    },
    {
        title: "Apps",
        items: [
            {
                label: "Users",
                path: "/users",
                icon: FiUsers,
            },
            {
                label: "Ecommerce",
                path: "/ecommerce",
                icon: FiShoppingCart,
            },
        ],
    },
];
