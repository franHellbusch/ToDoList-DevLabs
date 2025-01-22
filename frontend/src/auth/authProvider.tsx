import { Auth0Provider } from "@auth0/auth0-react";
import config from "../config/config";
import { ReactNode } from "react";

interface IAuthProviderProps {
  children?: ReactNode;
}

const AuthProvider: React.FC<IAuthProviderProps> = ({ children }) => {
  return (
    <Auth0Provider
      domain={config.auth.domain}
      clientId={config.auth.clientId}
      authorizationParams={{
        redirect_uri: window.location.origin,
        audience: config.auth.audience,
      }}
    >
      {children}
    </Auth0Provider>
  );
};
export default AuthProvider;
