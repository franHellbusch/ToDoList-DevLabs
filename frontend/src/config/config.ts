const config = {
  apiUrl: import.meta.env.VITE_API_URL,
  auth: {
    domain: import.meta.env.VITE_AUTH_DOMAIN,
    clientId: import.meta.env.VITE_AUTH_CLIENT_ID,
    audience: import.meta.env.VITE_AUTH_AUDIENCE,
  },
};

export default config;
