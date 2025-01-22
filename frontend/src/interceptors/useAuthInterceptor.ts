import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";

export const useAuthInterceptor = () => {
  const { isAuthenticated, getAccessTokenSilently } = useAuth0();

  axios.interceptors.request.use(async (request) => {
    if (isAuthenticated) {
      const token = await getAccessTokenSilently();
      request.headers.Authorization = `Bearer ${token}`;
    }

    return request;
  });

  axios.interceptors.response.use(
    (response) => response,
    (error) => {
      return Promise.reject(error?.response?.data || error);
    },
  );
};
