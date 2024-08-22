import PropTypes from "prop-types";
import { Track } from "../Track";

const Tracklist = ({ trackObjectArray }) => (
  <ul>
    {trackObjectArray.map((trackObject) => (
      <Track key={trackObject.id} trackObject={trackObject} />
    ))}
  </ul>
);

Tracklist.propTypes = {
  trackObjectArray: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      uri: PropTypes.string.isRequired,
      coverArt: PropTypes.string,
      name: PropTypes.string.isRequired,
      artists: PropTypes.arrayOf(PropTypes.string).isRequired,
      album: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default Tracklist;
