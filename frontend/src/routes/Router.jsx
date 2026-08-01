import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Dashboard from "../pages/Dashboard";
import ProtectedRoute from "../components/ProtectedRoute";
import NotFound from "../pages/NotFound";

function Router() {
    return (
        <BrowserRouter> 
        <Routes>
            <Route path="/" element={<ProtectedRoute> <Dashboard /> </ProtectedRoute>} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
        </BrowserRouter>
    );
}

export default Router;