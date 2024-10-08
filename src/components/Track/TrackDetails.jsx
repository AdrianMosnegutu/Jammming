import PropTypes from "prop-types";
import { useContext } from "react";
import TracklistContext from "../../contexts/TracklistContext";

const TrackDetails = ({ name, artists, album, previewAudio }) => {
  const { currentPlayingPreview } = useContext(TracklistContext);
  const trackIsPlaying =
    previewAudio && currentPlayingPreview?.src === previewAudio.src;

  return (
    <div className="flex h-full w-full flex-col xl:gap-2">
      <h2
        className={`text-xl transition xl:text-3xl ${trackIsPlaying && "text-spotify-green underline"} ease-in group-hover:text-spotify-green`}
      >
        {name}
      </h2>
      <p className="text-xs xl:text-base">
        <strong>Artists:</strong> {artists.join(", ")}
        <br />
        <strong>Album:</strong> {album}
      </p>
    </div>
  );
};

TrackDetails.propTypes = {
  name: PropTypes.string.isRequired,
  artists: PropTypes.arrayOf(PropTypes.string).isRequired,
  album: PropTypes.string.isRequired,
  previewAudio: PropTypes.shape({
    src: PropTypes.string,
  }),
};

export default TrackDetails;
