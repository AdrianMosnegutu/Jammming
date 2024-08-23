import PropTypes from "prop-types";
import { createContext, useEffect, useState } from "react";

const TracklistContext = createContext(null);

export const TracklistProvider = ({ children }) => {
  const [tracklist, setTracklist] = useState([]);
  const [currentPlayingPreview, setCurrentPlayingPreview] = useState(null);

  useEffect(() => {
    if (!currentPlayingPreview) return;

    currentPlayingPreview.addEventListener("ended", () =>
      setCurrentPlayingPreview(null),
    );
    currentPlayingPreview.play();
  }, [currentPlayingPreview]);

  return (
    <TracklistContext.Provider
      value={{
        tracklist,
        setTracklist,
        currentPlayingPreview,
        setCurrentPlayingPreview,
      }}
    >
      {children}
    </TracklistContext.Provider>
  );
};

TracklistProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default TracklistContext;
