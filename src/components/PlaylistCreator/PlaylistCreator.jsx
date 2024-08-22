import { useContext, useState } from "react";
import {
  PlaylistCover,
  PlaylistDescription,
  PlaylistName,
  PlaylistPrivacy,
} from ".";
import ProfileContext from "../../contexts/ProfileContext";
import TracklistContext from "../../contexts/TracklistContext";

const PlaylistCreator = () => {
  const [cover, setCover] = useState(null);
  const [name, setName] = useState("New Playlist");
  const [description, setDescription] = useState("");
  const [isPublic, setIsPublic] = useState(true);

  const { profile } = useContext(ProfileContext);
  const { tracklist } = useContext(TracklistContext);

  const handlePlaylistCreation = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handlePlaylistCreation}>
      <div>
        <PlaylistCover onCoverChange={setCover} />
        <div>
          <PlaylistName name={name} onNameChange={setName} />
          <PlaylistDescription
            description={description}
            onDescriptionChange={setDescription}
          />
          <PlaylistPrivacy isPublic={isPublic} onPrivacyChange={setIsPublic} />
        </div>
      </div>
      <button type="submit">Export to Spotify</button>
    </form>
  );
};

export default PlaylistCreator;
