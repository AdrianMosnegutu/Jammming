import PropTypes from "prop-types";
import { FaFrown } from "react-icons/fa";
import { Track } from "../Track";

const Tracklist = ({ className, messageIfEmpty, trackObjectArray }) =>
  trackObjectArray.length === 0 ? (
    <div className={`${className} divide-y-0`}>
      <h3 className="text-light-secondary mt-3 text-center text-xl">
        {messageIfEmpty}
      </h3>
      <FaFrown className="text-dark-tertiary m-auto mt-52" size={350} />
    </div>
  ) : (
    <ul className={className}>
      {trackObjectArray.map((trackObject) => (
        <Track key={trackObject.id} trackObject={trackObject} />
      ))}
    </ul>
  );

Tracklist.propTypes = {
  className: PropTypes.string,
  messageIfEmpty: PropTypes.string.isRequired,
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
