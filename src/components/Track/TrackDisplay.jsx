import PropTypes from "prop-types";

const TrackDisplay = ({ trackObject, buttonIcon, onClick }) => {
  const { id, coverArt, name, artists, album } = trackObject;

  return (
    <li key={id}>
      {coverArt && <img src={coverArt} alt="cover art" />}
      <div>
        <h2>{name}</h2>
        <p>
          <strong>Artists:</strong> {artists.join(", ")}
          <br />
          <strong>Album:</strong> {album}
        </p>
      </div>
      <button onClick={onClick}>{buttonIcon}</button>
    </li>
  );
};

TrackDisplay.propTypes = {
  trackObject: PropTypes.shape({
    id: PropTypes.string.isRequired,
    uri: PropTypes.string.isRequired,
    coverArt: PropTypes.string,
    name: PropTypes.string.isRequired,
    artists: PropTypes.arrayOf(PropTypes.string).isRequired,
    album: PropTypes.string.isRequired,
  }).isRequired,
  buttonIcon: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default TrackDisplay;
