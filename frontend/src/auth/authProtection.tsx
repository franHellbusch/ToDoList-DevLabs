import Loader from "@/components/Loader/Loader";
import { useAppDispatch } from "@/hooks/redux";
import { setUser } from "@/store/states/auth";
import { useAuth0 } from "@auth0/auth0-react";
import { ReactNode } from "react";

interface IAuthProtetionProps {
  children?: ReactNode;
}

const AuthProtection: React.FC<IAuthProtetionProps> = ({ children }) => {
  const { isAuthenticated, isLoading, user } = useAuth0();
  const dispatch = useAppDispatch();

  if (isLoading) return <Loader />;

  if (user && isAuthenticated) dispatch(setUser(user));

  return children;
};

export default AuthProtection;
