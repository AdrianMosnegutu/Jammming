import PropTypes from "prop-types";
import { useContext } from "react";
import TracklistContext from "../../contexts/TracklistContext";
import { TrackCoverArt, TrackDetails } from "./";

const TrackDisplay = ({ trackObject, buttonIcon, onClick }) => {
  const { id, coverArt, name, artists, album, previewAudio } = trackObject;
  const { currentPlayingPreview, setCurrentPlayingPreview } =
    useContext(TracklistContext);

  const handlePlayPreview = () => {
    if (!previewAudio) return;

    if (!currentPlayingPreview) {
      setCurrentPlayingPreview(previewAudio);
      return;
    }

    currentPlayingPreview.pause();
    currentPlayingPreview.currentTime = 0;

    if (currentPlayingPreview.src === previewAudio.src)
      setCurrentPlayingPreview(null);
    else setCurrentPlayingPreview(previewAudio);
  };

  return (
    <li className="group flex w-full items-center" key={id}>
      <div
        className="flex w-full cursor-pointer items-center gap-6 px-2 py-5"
        onClick={handlePlayPreview}
      >
        <TrackCoverArt coverArt={coverArt} previewAudio={previewAudio} />
        <TrackDetails
          name={name}
          artists={artists}
          album={album}
          previewAudio={previewAudio}
        />
      </div>
      <button
        className="relative left-1 rounded-full bg-light-main bg-opacity-0 p-2 transition ease-in hover:bg-opacity-25"
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
    previewAudio: PropTypes.shape({
      src: PropTypes.string.isRequired,
    }),
  }).isRequired,
  buttonIcon: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default TrackDisplay;
