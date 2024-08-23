import PropTypes from "prop-types";
import { useContext } from "react";
import { FaFrown } from "react-icons/fa";
import { Tracklist } from ".";
import TracklistContext from "../../contexts/TracklistContext";
import { PlaylistCreator } from "../PlaylistCreator";

const Main = ({ searchResults }) => {
  const { tracklist } = useContext(TracklistContext);

  return (
    <main className="flex h-[calc(100vh-6rem)] bg-dark-main text-light-main">
      <Tracklist
        className="z-40 h-full w-5/12 divide-y-[1px] divide-light-main overflow-scroll bg-dark-secondary px-8 py-4"
        messageIfEmpty="No tracks found..."
        iconIfEmpty={
          <FaFrown className="m-auto mt-52 text-dark-tertiary" size={350} />
        }
        trackObjectArray={searchResults}
      />
      <div className="flex h-full w-7/12 flex-col">
        <PlaylistCreator />
        <Tracklist
          className="z-20 h-full divide-y-[1px] divide-light-main overflow-scroll px-20 py-6"
          messageIfEmpty="Playlist is empty..."
          trackObjectArray={tracklist}
        />
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
