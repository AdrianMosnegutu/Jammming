import PropTypes from "prop-types";

const PlaylistDescription = ({ description, onDescriptionChange }) => {
  return (
    <textarea
      className="bg-dark-tertiary h-full resize-none p-2"
      name="playlistDescription"
      id="playlistDescription"
      placeholder="Write description..."
      maxLength={50}
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
