import PropTypes from "prop-types";

const PlaylistName = ({ name, onNameChange }) => {
  return (
    <input
      className="border-light-main w-full border-b bg-transparent p-1 text-4xl"
      type="text"
      name="playlistName"
      id="playlistName"
      placeholder="Playlist name"
      maxLength={25}
      required
      value={name}
      onChange={(e) => onNameChange(e.target.value)}
    />
  );
};

PlaylistName.propTypes = {
  name: PropTypes.string.isRequired,
  onNameChange: PropTypes.func.isRequired,
};

export default PlaylistName;
