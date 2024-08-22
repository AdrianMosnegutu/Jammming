import PropTypes from "prop-types";

const PlaylistName = ({ name, onNameChange }) => {
  return (
    <input
      type="text"
      name="playlistName"
      id="playlistName"
      placeholder="Playlist name"
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
