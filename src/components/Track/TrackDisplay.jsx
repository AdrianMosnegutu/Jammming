import PropTypes from "prop-types";

const TrackDisplay = ({ trackObject, buttonIcon, onClick }) => {
  const { id, coverArt, name, artists, album } = trackObject;

  return (
    <li className="flex w-full items-center gap-6 px-2 py-5" key={id}>
      {coverArt && (
        <img
          className="aspect-square w-24 rounded-md"
          src={coverArt}
          alt="cover art"
        />
      )}
      <div className="flex h-full w-full flex-col gap-2">
        <h2 className="text-3xl">{name}</h2>
        <p>
          <strong>Artists:</strong> {artists.join(", ")}
          <br />
          <strong>Album:</strong> {album}
        </p>
      </div>
      <button
        className="bg-light-main relative left-1 rounded-full bg-opacity-0 p-2 transition ease-in hover:bg-opacity-25"
        onClick={onClick}
      >
        {buttonIcon}
      </button>
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
