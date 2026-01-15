
import { Routes, Route, Navigate } from "react-router-dom";
import DashboardLayout from "../layouts/DashboardLayout";
import Dashboard from "../pages/Dashboard";
import Dashboard2 from "../pages/Dashboard2";
// import FrontPages from "../pages/FrontPages";

const AppRoutes = () => {
    return (
        <Routes>
            {/* Layout Route  */}
            <Route element={<DashboardLayout />}  >
                <Route path="/" element={<Navigate to="/dashboard" replace />} ></Route>
                <Route path="/dashboard" element={<Dashboard />} ></Route>
                <Route path="/dashboard2" element={<Dashboard2 />} ></Route>
                {/* <Route path="/front-pages" element={<FrontPages />} ></Route> */}
            </Route>

            {/* Fallback  */}
            <Route path="*" element={<h1>404 - Page Not Found</h1>} ></Route>
        </Routes>
    )
}
export default AppRoutes;