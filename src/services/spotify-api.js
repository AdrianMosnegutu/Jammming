import axios from "axios";
import { SEARCH_LIMIT } from "../utils/constants";

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

/**
 * Retrieves a list of Spotify tracks based on a search query and filter.
 *
 * @param {string} searchQuery - The search query to use for the Spotify
 *  search.
 * @param {string} filter - The filter to apply to the search query (e.g.
 * "artist", "album", "track").
 * @returns {Promise<{ id: string, uri: string, name: string, artists: string[], album: string, coverArt: string | null }[]>} -
 *  An array of objects containing the search results, including the track ID, URI, name, artists, album, and cover art URL.
 */
export async function getSearchResults(searchQuery, filter) {
  const accessToken = localStorage.getItem("access_token");
  const url = new URL("https://api.spotify.com/v1/search?");

  const searchParams = new URLSearchParams({
    q: `${filter}:${searchQuery}`,
    type: "track",
    limit: SEARCH_LIMIT,
  });

  const response = await axios.get(url + searchParams, {
    headers: { Authorization: `Bearer ${accessToken}` },
  });

  return response.data.tracks.items.map((track) => ({
    id: track.id,
    uri: track.uri,
    name: track.name,
    artists: track.artists.map((artist) => artist.name),
    album: track.album.name,
    coverArt: track.album.images[0]?.url,
  }));
}
