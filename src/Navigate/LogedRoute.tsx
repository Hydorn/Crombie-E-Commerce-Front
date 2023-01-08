import { Navigate, Outlet } from "react-router-dom";
import { useUserContext } from "Context/userContext";

const LogedRoute = () => {
  const { logged } = useUserContext();

  if (!logged) return <Navigate to={"/login"} />;
  return <Outlet />;
};

export default LogedRoute;
