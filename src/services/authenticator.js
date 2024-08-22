import { REDIRECT_URI, SCOPE } from "../utils/constants";

/**
 * Initiates the Spotify authorization flow by generating a code verifier, computing
 * the code challenge, and redirecting the user to the Spotify authorization endpoint.
 *
 * The code verifier is stored in the browser's local storage for later use in the
 * token exchange process.
 *
 * @returns {void}
 */
export async function requestAuthorization() {
  const generateRandomString = (length) => {
    const possible =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    const values = crypto.getRandomValues(new Uint8Array(length));
    return values.reduce((acc, x) => acc + possible[x % possible.length], "");
  };

  const codeVerifier = generateRandomString(64);
  window.localStorage.setItem("code_verifier", codeVerifier);

  const sha256 = async (plain) => {
    const encoder = new TextEncoder();
    const data = encoder.encode(plain);
    return window.crypto.subtle.digest("SHA-256", data);
  };

  const base64encode = (input) => {
    return btoa(String.fromCharCode(...new Uint8Array(input)))
      .replace(/=/g, "")
      .replace(/\+/g, "-")
      .replace(/\//g, "_");
  };

  const hashed = await sha256(codeVerifier);
  const codeChallenge = base64encode(hashed);

  const authUrl = new URL("https://accounts.spotify.com/authorize");

  const params = {
    response_type: "code",
    client_id: import.meta.env.VITE_CLIENT_ID,
    scope: SCOPE,
    code_challenge_method: "S256",
    code_challenge: codeChallenge,
    redirect_uri: REDIRECT_URI,
  };

  authUrl.search = new URLSearchParams(params).toString();
  window.location.href = authUrl.toString();
}

/**
 * Exchanges the authorization code received from the Spotify authorization flow
 * for an access token. The code verifier stored in the browser's local storage
 * is used in the token exchange process.
 *
 * The access token is then stored in the browser's local storage for later use.
 *
 * @param {string} code - The authorization code received from the Spotify
 * authorization flow.
 * @returns {Promise<void>}
 */
export async function getToken(code) {
  const codeVerifier = localStorage.getItem("code_verifier");
  const url = new URL("https://accounts.spotify.com/api/token");

  const payload = {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      client_id: import.meta.env.VITE_CLIENT_ID,
      grant_type: "authorization_code",
      code,
      redirect_uri: REDIRECT_URI,
      code_verifier: codeVerifier,
    }),
  };

  const body = await fetch(url, payload);
  const response = await body.json();

  localStorage.setItem("access_token", response.access_token);
  window.location.href = "/";
}
