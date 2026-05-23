import { Navigate } from "react-router-dom";

interface Props {
    children: React.ReactNode;
}

const ProtectedAdminRoute = ({ children }: Props) => {
    const token = localStorage.getItem("adminToken");
    if (!token) {
        return <Navigate to="/admin/login" replace />;
    }
    return children;
}

export default ProtectedAdminRoute;