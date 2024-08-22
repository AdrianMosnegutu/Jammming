import PropTypes from "prop-types";
import { Track } from "../Track";

const Tracklist = ({
  className,
  messageIfEmpty,
  iconIfEmpty,
  trackObjectArray,
}) =>
  trackObjectArray.length === 0 ? (
    <div
      className={`${className
        .split(" ")
        .filter((className) => className !== "divide-y-[1px]")
        .join(" ")}`}
    >
      <h3 className="text-light-secondary mt-5 text-center text-xl">
        {messageIfEmpty}
      </h3>
      {iconIfEmpty}
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
  iconIfEmpty: PropTypes.node,
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
