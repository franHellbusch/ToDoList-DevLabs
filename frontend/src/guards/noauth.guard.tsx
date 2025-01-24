import { Navigate, Outlet } from "react-router-dom";
import { PrivateRoutes } from "@/types/routes";
import { useAppSelector } from "@/hooks/redux";

/**
 * Restricts access to routes for authenticated users.
 */
const NoAuthGuard: React.FC = () => {
  const authState = useAppSelector((store) => store.auth);
  return !authState.isAuthenticated ? (
    <Outlet />
  ) : (
    <Navigate to={`/${PrivateRoutes.PRIVATE}`} replace />
  );
};

export default NoAuthGuard;
