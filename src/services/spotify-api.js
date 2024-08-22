import axios from "axios";

/**
 * Retrieves the user's Spotify profile data, including their user ID,
 * display name, and profile image URL.
 *
 * @returns {Promise<{ id: string, username: string, icon: string | null }>} -
 * An object containing the user's profile data.
 */
export async function getProfileData() {
  const accessToken = localStorage.getItem("access_token");
  const url = new URL("https://api.spotify.com/v1/me");

  const response = await axios.get(url, {
    headers: { Authorization: `Bearer ${accessToken}` },
  });

  return {
    id: response.data.id,
    username: response.data.display_name,
    icon: response.data.images[1]?.url,
  };
}
