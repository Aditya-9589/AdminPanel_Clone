import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import { SidebarProvider } from "../context/SidebarContext";

const DashboardLayout = () => {
    return (
        <SidebarProvider>
            {/* <div className="min-h-screen bg-gray-100 p-4"> */}
            {/* <div className="min-h-screen bg-[var(--bg-app)] p-4"> */}
            {/* <div className="min-h-screen bg-#F2F9FD p-4"> */}

            {/* Root container */}
            <div className="h-screen w-full bg-[var(--bg-app)] overflow-hidden p-4">

                {/* <div className="flex h-full gap-4"> */}
                {/* <div className="flex h-[calc(100vh-2rem)] gap-4"> */}
                <div className="flex h-full gap-4">
                {/* <div className="flex h-full"> */}

                    {/* SIDEBAR  */}
                    <Sidebar />

                    {/* RIGHT SIDE  */}
                    {/* <div className="flex flex-col flex-1"> */}
                    {/* <div className="flex flex-col flex-1 gap-4"> */}
                    <div className="flex flex-col flex-1 gap-4">
                    {/* <div className="flex flex-col flex-1"> */}

                        {/* NAVBAR (sticky later)  */}
                        <Navbar />
                        
                        {/* MAIN CONTENT (SCROLLABLE)  */}
                        {/* <main className="flex-1 bg-[var(--bg-app)] rounded-2xl p-4"> */}
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
