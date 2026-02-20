import { Outlet } from "react-router-dom";
import Sidebar from "../components/sidebar/Sidebar";
import Navbar from "../components/Navbar";
import { SidebarProvider } from "../context/SidebarContext";

const DashboardLayout = () => {
    return (
        <SidebarProvider>

            {/* Root container */}
            <div className="h-screen w-full bg-[var(--bg-app)] overflow-hidden p-4">

                {/* Sidebar — on mobile renders as a fixed overlay, on desktop sits in the flex row */}
                <div className="flex h-full gap-4">

                    {/* Desktop sidebar (stays in flow)  */}
                    <Sidebar />

                    {/* RIGHT SIDE  */}
                    <div className="flex flex-col flex-1 gap-4 min-w-0">

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


