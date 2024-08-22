import PropTypes from "prop-types";
import { useContext } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import { TrackDisplay } from ".";
import TracklistContext from "../../contexts/TracklistContext";

const Track = ({ trackObject }) => {
  const { tracklist, setTracklist } = useContext(TracklistContext);
  const isOnTracklist = tracklist.some((track) => track.id === trackObject.id);

  const addToTracklist = () => {
    setTracklist((prev) => [trackObject, ...prev]);
  };

  const removeFromTracklist = () => {
    setTracklist((prev) => prev.filter((track) => track.id !== trackObject.id));
  };

  const buttonIcon = isOnTracklist ? <FaMinus /> : <FaPlus />;
  const onClick = isOnTracklist ? removeFromTracklist : addToTracklist;

  return (
    <TrackDisplay
      trackObject={trackObject}
      buttonIcon={buttonIcon}
      onClick={onClick}
    />
  );
};

Track.propTypes = {
  trackObject: PropTypes.shape({
    id: PropTypes.string.isRequired,
    uri: PropTypes.string.isRequired,
    coverArt: PropTypes.string,
    name: PropTypes.string.isRequired,
    artists: PropTypes.arrayOf(PropTypes.string).isRequired,
    album: PropTypes.string.isRequired,
  }).isRequired,
};

export default Track;
