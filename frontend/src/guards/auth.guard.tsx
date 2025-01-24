import { useAppSelector } from "@/hooks/redux";
import { PublicRoutes } from "@/types/routes";
import { Navigate, Outlet } from "react-router-dom";


/**
 * Restricts access to routes for unauthenticated users.
 */
const AuthGuard: React.FC = () => {
  const authState = useAppSelector((store) => store.auth);
  return authState.isAuthenticated ? (
    <Outlet />
  ) : (
    <Navigate to={`/${PublicRoutes.LOGIN}`} replace />
  );
};

export default AuthGuard;
