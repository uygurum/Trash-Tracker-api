import { auth } from "express-oauth2-jwt-bearer";

const jwtCheck = auth({
  audience: "https://bloggy.hicoders.ch",
  issuerBaseURL: "dev-ffe8mssx5g46vq0i.eu.auth0.com",
  tokenSigningAlg: "RS256",
});

export default jwtCheck;
