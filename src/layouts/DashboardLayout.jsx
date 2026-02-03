import { Outlet } from "react-router-dom";
import Sidebar from "../components/sidebar/Sidebar";
import Navbar from "../components/Navbar";
import { SidebarProvider } from "../context/SidebarContext";

const DashboardLayout = () => {
    return (
        <SidebarProvider>

            {/* Root container */}
            <div className="h-screen w-full bg-[var(--bg-app)] overflow-hidden p-4">
            {/* <div className="h-screen w-full bg-[var(--bg-app)] overflow-hidden px-4"> */}

                <div className="flex h-full gap-4">

                    {/* SIDEBAR  */}
                    <Sidebar />

                    {/* RIGHT SIDE  */}
                    <div className="flex flex-col flex-1 gap-4">

                        {/* NAVBAR */}
                        <Navbar />

                        {/* MAIN CONTENT (SCROLLABLE)  */}
                        <main className="flex-1 overflow-y-auto rounded-xl p-4">
                        {/* <main className="flex-1 overflow-y-auto rounded-xl py-4"> */}
                            <Outlet />
                        </main>

                    </div>

                </div>

            </div>
        </SidebarProvider>
    );
};

export default DashboardLayout;


