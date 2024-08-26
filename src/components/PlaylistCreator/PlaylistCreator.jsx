import { useContext, useEffect, useState } from "react";
import {
  PlaylistCover,
  PlaylistDescription,
  PlaylistName,
  PlaylistPrivacy,
} from ".";
import ProfileContext from "../../contexts/ProfileContext";
import TracklistContext from "../../contexts/TracklistContext";
import {
  addTracksToPlaylist,
  createPlaylist,
  setPlaylistCover,
} from "../../services/spotify-api";
import PopupWindow from "../PopupWindow";

const PlaylistCreator = () => {
  const [cover, setCover] = useState(null);
  const [name, setName] = useState("New Playlist");
  const [description, setDescription] = useState("");
  const [isPublic, setIsPublic] = useState(true);
  const [popupWindowState, setPopupWindowState] = useState(null);

  const { profile } = useContext(ProfileContext);
  const { tracklist } = useContext(TracklistContext);

  const handlePlaylistCreation = (e) => {
    e.preventDefault();

    if (tracklist.length === 0)
      return setPopupWindowState({
        type: "error",
        message: "Playlist is empty!",
      });

    setPopupWindowState({ type: "loading" });

    createPlaylist(profile.id, name, description, isPublic)
      .then((playlistID) => {
        setPlaylistCover(playlistID, cover);
        addTracksToPlaylist(
          playlistID,
          tracklist.map((trackObject) => trackObject.uri),
        );
      })
      .then(() => {
        setPopupWindowState({
          type: "success",
          message: "Playlist added to Spotify!",
        });
        setTimeout(() => (window.location = "/"), 2000);
      })
      .catch((error) => {
        setPopupWindowState({
          type: "error",
          message: error.message,
        });
      });
  };

  useEffect(() => {
    const timer = setTimeout(() => setPopupWindowState(null), 2000);
    return () => clearTimeout(timer);
  }, [popupWindowState]);

  return (
    <>
      {popupWindowState && <PopupWindow {...popupWindowState} />}
      <form
        className="z-30 flex w-full flex-col items-center justify-center gap-12 px-10 py-12 shadow-lg md:px-10 lg:px-40 xl:px-10 2xl:px-32"
        onSubmit={handlePlaylistCreation}
      >
        <div className="flex w-full flex-col items-center gap-12 md:flex-row">
          <PlaylistCover
            onCoverChange={setCover}
            onError={setPopupWindowState}
          />
          <div className="flex h-full w-full flex-col gap-5">
            <PlaylistName name={name} onNameChange={setName} />
            <PlaylistDescription
              description={description}
              onDescriptionChange={setDescription}
            />
            <PlaylistPrivacy
              isPublic={isPublic}
              onPrivacyChange={setIsPublic}
            />
          </div>
        </div>
        <button
          className="rounded-full border border-spotify-green px-6 py-2 text-xl text-spotify-green transition ease-in hover:bg-spotify-green hover:text-dark-main"
          type="submit"
        >
          Export to Spotify
        </button>
      </form>
    </>
  );
};

export default PlaylistCreator;
