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

/**
 * Creates a new Spotify playlist for the specified user.
 *
 * @param {string} userID - The ID of the Spotify user to create the playlist for.
 * @param {string} name - The name of the new playlist.
 * @param {string} description - The description of the new playlist.
 * @param {boolean} isPublic - Whether the new playlist should be public or private.
 * @returns {Promise<string>} - The ID of the newly created playlist.
 */
export async function createPlaylist(userID, name, description, isPublic) {
  const accessToken = localStorage.getItem("access_token");
  const url = new URL(`https://api.spotify.com/v1/users/${userID}/playlists`);

  const playlistInfo = {
    name,
    description,
    public: isPublic,
  };

  const response = await axios.post(url, playlistInfo, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
    },
  });

  return response.data.id;
}

/**
 * Sets the cover image for a Spotify playlist.
 *
 * @param {string} playlistID - The ID of the Spotify playlist to set the cover image for.
 * @param {string} coverImageBase64 - The base64-encoded image data for the new cover image.
 * @returns {Promise<void>} - A Promise that resolves when the cover image has been set.
 */
export async function setPlaylistCover(playlistID, coverImageBase64) {
  const accessToken = localStorage.getItem("access_token");
  const url = new URL(
    `https://api.spotify.com/v1/playlists/${playlistID}/images`,
  );

  await axios.put(url, coverImageBase64, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "text/plain",
    },
  });
}

/**
 * Adds a list of tracks to a Spotify playlist.
 *
 * @param {string} playlistID - The ID of the Spotify playlist to add the tracks to.
 * @param {string[]} trackURIS - An array of Spotify track URIs to add to the playlist.
 * @returns {Promise<void>} - A Promise that resolves when the tracks have been added to the playlist.
 */
export async function addTracksToPlaylist(playlistID, trackURIS) {
  const accessToken = localStorage.getItem("access_token");
  const url = new URL(
    `https://api.spotify.com/v1/playlists/${playlistID}/tracks`,
  );

  const tracksToAdd = {
    uris: trackURIS,
    position: 0,
  };

  await axios.post(url, tracksToAdd, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
    },
  });
}
