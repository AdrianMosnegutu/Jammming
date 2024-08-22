import { useContext, useState } from "react";
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

const PlaylistCreator = () => {
  const [cover, setCover] = useState(null);
  const [name, setName] = useState("New Playlist");
  const [description, setDescription] = useState("");
  const [isPublic, setIsPublic] = useState(true);

  const { profile } = useContext(ProfileContext);
  const { tracklist, setTracklist } = useContext(TracklistContext);

  const handlePlaylistCreation = (e) => {
    e.preventDefault();

    if (tracklist.length === 0) {
      alert("Playlist is empty!");
      return;
    }

    createPlaylist(profile.id, name, description, isPublic)
      .then((playlistID) => {
        setPlaylistCover(playlistID, cover);
        return playlistID;
      })
      .then((playlistID) =>
        addTracksToPlaylist(
          playlistID,
          tracklist.map((trackObject) => trackObject.uri),
        ),
      )
      .then(() => {
        alert("SUCCESS!");
        window.location = "/";
      })
      .catch((error) => {
        alert("SOMETHING WENT WRONG!");
        {
          console.log(error);
        }
      });
  };

  return (
    <form
      className="z-30 flex w-full flex-col items-center justify-center gap-12 px-32 py-12 shadow-lg"
      onSubmit={handlePlaylistCreation}
    >
      <div className="flex w-full gap-12">
        <PlaylistCover onCoverChange={setCover} />
        <div className="flex w-full flex-col gap-5">
          <PlaylistName name={name} onNameChange={setName} />
          <PlaylistDescription
            description={description}
            onDescriptionChange={setDescription}
          />
          <PlaylistPrivacy isPublic={isPublic} onPrivacyChange={setIsPublic} />
        </div>
      </div>
      <button
        className="border-spotify-green text-spotify-green hover:bg-spotify-green hover:text-dark-main rounded-full border px-6 py-2 text-xl transition ease-in"
        type="submit"
      >
        Export to Spotify
      </button>
    </form>
  );
};

export default PlaylistCreator;
