
import { Routes, Route, Navigate } from "react-router-dom";
import DashboardLayout from "../layouts/DashboardLayout";
import Dashboard from "../pages/Dashboard";
import Dashboard2 from "../pages/Dashboard2";
import Users from "../pages/UsersWrapper";
import Ecommerce from "../pages/EcommerceWrapper";
import Profile from "../pages/profile/Profile"
import Login from "../pages/login/login";
import FAQWrapper from "../pages/faq/FAQWrapper";
import CategoryWrapper from "../pages/category/CategoryWrapper";
import CompanyDetailsWrapper from "../pages/companyDetails/CompanyDetailsWrapper";


const AppRoutes = () => {
    return (
        <Routes>
            {/* Layout Route  */}
            <Route element={<DashboardLayout />}  >
                <Route path="/" element={<Navigate to="/dashboard" replace />} ></Route>
                <Route path="/login" element={<Login />} ></Route>
                <Route path="/dashboard" element={<Dashboard />} ></Route>
                <Route path="/dashboard2" element={<Dashboard2 />} ></Route>
                <Route path="/users" element={<Users />} ></Route>
                <Route path="/ecommerce" element={<Ecommerce />} ></Route>
                <Route path="/profile" element={<Profile />} ></Route>
                <Route path="/faq" element={<FAQWrapper />} ></Route>
                {/* <Route path="/category" element={<CategoryWrapper />} ></Route> */}
                <Route path="/category" element={<CategoryWrapper />} >
                    <Route index element={<CategoryWrapper />} ></Route>
                    <Route path=":id" element={<CategoryWrapper />} ></Route>
                </Route>
                <Route path="/companyDetails" element={<CompanyDetailsWrapper />} ></Route>
            </Route>

            {/* Fallback  */}
            <Route path="*" element={<h1>404 - Page Not Found</h1>} ></Route>
        </Routes>
    )
}
export default AppRoutes;