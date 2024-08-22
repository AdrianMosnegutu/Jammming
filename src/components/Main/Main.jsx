import PropTypes from "prop-types";
import { useContext } from "react";
import { Tracklist } from ".";
import TracklistContext from "../../contexts/TracklistContext";
import { PlaylistCreator } from "../PlaylistCreator";

const Main = ({ searchResults }) => {
  const { tracklist } = useContext(TracklistContext);

  return (
    <main>
      <Tracklist trackObjectArray={searchResults} />
      <div>
        <PlaylistCreator />
        <Tracklist trackObjectArray={tracklist} />
      </div>
    </main>
  );
};

Main.propTypes = {
  searchResults: PropTypes.arrayOf(
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

export default Main;
