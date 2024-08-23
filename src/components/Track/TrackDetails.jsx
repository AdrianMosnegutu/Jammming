import PropTypes from "prop-types";

const TrackDetails = ({ name, artists, album }) => (
  <div className="flex h-full w-full flex-col gap-2">
    <h2 className="text-3xl transition ease-in group-hover:text-spotify-green">
      {name}
    </h2>
    <p>
      <strong>Artists:</strong> {artists.join(", ")}
      <br />
      <strong>Album:</strong> {album}
    </p>
  </div>
);

TrackDetails.propTypes = {
  name: PropTypes.string.isRequired,
  artists: PropTypes.arrayOf(PropTypes.string).isRequired,
  album: PropTypes.string.isRequired,
};

export default TrackDetails;
