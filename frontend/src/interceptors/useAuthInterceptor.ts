import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";

/**
 * Intercepts HTTP requests and adds the authentication token to the headers.
 */
export const useAuthInterceptor = () => {
  // uses the Auth0 SDK to obtain an access token if the user is authenticated 
  const { isAuthenticated, getAccessTokenSilently } = useAuth0();

  // and adds it to the Authorization header of all outgoing requests.
  axios.interceptors.request.use(async (request) => {
    if (isAuthenticated) {
      const token = await getAccessTokenSilently();
      request.headers.Authorization = `Bearer ${token}`;
    }

    return request;
  });

  // handles response errors by extracting the error data from the response.
  axios.interceptors.response.use(
    (response) => response,
    (error) => {
      return Promise.reject(error?.response?.data || error);
    },
  );
};
