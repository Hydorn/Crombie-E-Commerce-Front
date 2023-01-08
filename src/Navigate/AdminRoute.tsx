import { Navigate, Outlet } from "react-router-dom";
import { useUserContext } from "Context/userContext";

const AdminRoute = () => {
  const { admin } = useUserContext();
  if (!admin) return <Navigate to={"/login"} />;
  return <Outlet />;
};

export default AdminRoute;
