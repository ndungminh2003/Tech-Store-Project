import { useLocation, Navigate, Outlet } from "react-router-dom";
import useAuth from "../hook/useAuth";

const role = {
  guest: "guest",
  admin: "admin",
  user: "user",
  salesperson: "salesperson",
};

const RequireAuth = ({ allowedRoles }) => {
  const auth = useAuth();
  const location = useLocation();
  // console.log(auth);
  // console.log(allowedRoles);
  // console.log(location);
  console.log("auth?.user", auth?.user);
  if (allowedRoles === role.guest && auth?.user && auth?.user?.role) {
    console.log("Hello");
    return <Navigate to={-1} replace />;
  }
  if (!auth?.user || !auth?.user?.role) {
    return allowedRoles === role.user ? (
      <Navigate to={`/login`} state={{ from: location }} replace />
    ) : (
      <Navigate
        to={`/${allowedRoles}-login`}
        state={{ from: location }}
        replace
      />
    );
  }
  if (allowedRoles && allowedRoles !== auth.user.role) {
    return <Navigate to="/unauthorized" state={{ from: location }} replace />;
  }

  return <Outlet />;
};

export default RequireAuth;
