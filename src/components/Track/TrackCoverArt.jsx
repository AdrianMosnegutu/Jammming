import PropTypes from "prop-types";
import { useContext } from "react";
import { FaPlay, FaStop } from "react-icons/fa";
import TracklistContext from "../../contexts/TracklistContext";

const TrackCoverArt = ({ coverArt, previewAudio }) => {
  const { currentPlayingPreview } = useContext(TracklistContext);
  const trackIsPlaying =
    previewAudio && currentPlayingPreview?.src === previewAudio.src;

  return (
    coverArt && (
      <div className="flex aspect-square w-14 flex-shrink-0 items-center overflow-hidden rounded-md xl:w-24">
        <img
          className={`h-full w-full object-cover opacity-100 ${trackIsPlaying && "opacity-50"} ${previewAudio && "transition-opacity ease-in group-hover:opacity-50"}`}
          src={coverArt}
          alt="cover art"
        />
        {previewAudio &&
          (currentPlayingPreview?.src === previewAudio?.src ? (
            <div className="player-icon-container">
              <FaStop className="player-icon" size={30} />
            </div>
          ) : (
            <div className="player-icon-container opacity-0 group-hover:opacity-100">
              <FaPlay className="player-icon relative left-[2px]" size={30} />
            </div>
          ))}
      </div>
    )
  );
};

TrackCoverArt.propTypes = {
  coverArt: PropTypes.string.isRequired,
  previewAudio: PropTypes.shape({
    src: PropTypes.string,
  }),
};

export default TrackCoverArt;
