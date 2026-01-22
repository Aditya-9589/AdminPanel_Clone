import { Outlet } from "react-router-dom";
import Sidebar from "../components/sidebar/Sidebar";
import Navbar from "../components/Navbar";
import { SidebarProvider } from "../context/SidebarContext";

const DashboardLayout = () => {
    return (
        <SidebarProvider>

            {/* Root container */}
            <div className="h-screen w-full bg-[var(--bg-app)] overflow-hidden p-4">

                <div className="flex h-full gap-4">

                    {/* SIDEBAR  */}
                    <Sidebar />

                    {/* RIGHT SIDE  */}
                    <div className="flex flex-col flex-1 gap-4">

                        {/* NAVBAR */}
                        <Navbar />

                        {/* MAIN CONTENT (SCROLLABLE)  */}
                        <main className="flex-1 overflow-y-auto rounded-xl p-4">
                            <Outlet />
                        </main>

                    </div>

                </div>

            </div>
        </SidebarProvider>
    );
};

export default DashboardLayout;


// import { Outlet } from "react-router-dom";
// import Sidebar from "../components/sidebar/Sidebar";
// import Navbar from "../components/Navbar";

// const DashboardLayout = () => {
//     return (
//         <div className="flex h-screen overflow-hidden">

//             {/* Sidebar (fixed) */}
//             <Sidebar />

//             {/* Right section */}
//             <div className="flex flex-col flex-1">

//                 {/* Navbar (fixed) */}
//                 <Navbar />

//                 {/* ONLY SCROLLABLE AREA */}
//                 <main className="flex-1 overflow-y-auto p-6 dashboard-scroll">
//                     <Outlet />
//                 </main>

//             </div>
//         </div>
//     );
// };

// export default DashboardLayout;

