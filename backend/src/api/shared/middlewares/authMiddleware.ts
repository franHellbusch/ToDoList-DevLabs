import { auth } from "express-oauth2-jwt-bearer";
import config from "../config/config";

export const authMiddleware = auth({
  audience: config.auth0.AUDIENCE,
  issuerBaseURL: config.auth0.ISSUER_BASE_URL,
  tokenSigningAlg: config.auth0.TOKEN_SIGNING_ALG,
});
