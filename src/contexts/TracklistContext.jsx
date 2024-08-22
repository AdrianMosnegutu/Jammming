import PropTypes from "prop-types";
import { createContext, useState } from "react";

const TracklistContext = createContext(null);

export const TracklistProvider = ({ children }) => {
  const [tracklist, setTracklist] = useState([]);

  return (
    <TracklistContext.Provider value={{ tracklist, setTracklist }}>
      {children}
    </TracklistContext.Provider>
  );
};

TracklistProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default TracklistContext;
