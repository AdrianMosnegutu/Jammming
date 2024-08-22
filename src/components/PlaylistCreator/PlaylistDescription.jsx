import PropTypes from "prop-types";

const PlaylistDescription = ({ description, onDescriptionChange }) => {
  return (
    <textarea
      name="playlistDescription"
      id="playlistDescription"
      placeholder="Write description..."
      value={description}
      onChange={(e) => onDescriptionChange(e.target.value)}
    />
  );
};

PlaylistDescription.propTypes = {
  description: PropTypes.string.isRequired,
  onDescriptionChange: PropTypes.func.isRequired,
};

export default PlaylistDescription;
