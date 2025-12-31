import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import { SidebarProvider } from "../context/SidebarContext";

const DashboardLayout = () => {
    return (
        <SidebarProvider>
            {/* <div className="flex min-h-screen bg-gray-100"> */}
            {/* <div className="min-h-screen bg-gray-100 p-4"> */}
            <div className="min-h-screen bg-[var(--bg-app)] p-4">

                {/* <div className="flex h-full gap-4"> */}
                <div className="flex h-[calc(100vh-2rem)] gap-4">

                    <Sidebar />

                    {/* <div className="flex flex-col flex-1"> */}
                    <div className="flex flex-col flex-1 gap-4">

                        <Navbar />
                        {/* <main className="p-6"> */}

                        <main className="flex-1 bg-gray-100 rounded-2xl p-4">
                            <Outlet />
                        </main>

                    </div>

                </div>

            </div>
        </SidebarProvider>
    );
};

export default DashboardLayout;
