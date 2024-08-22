import PropTypes from "prop-types";
import { useContext } from "react";
import { Tracklist } from ".";
import TracklistContext from "../../contexts/TracklistContext";
import { PlaylistCreator } from "../PlaylistCreator";

const Main = ({ searchResults }) => {
  const { tracklist } = useContext(TracklistContext);

  return (
    <main className="bg-dark-main text-light-main flex h-[calc(100vh-6rem)]">
      <Tracklist
        className="divide-light-main bg-dark-secondary h-full w-5/12 divide-y-[1px] overflow-scroll px-8 py-4"
        messageIfEmpty="No tracks found..."
        trackObjectArray={searchResults}
      />
      <div className="flex h-full w-7/12 flex-col">
        <PlaylistCreator />
        <Tracklist
          className="divide-light-main h-full divide-y-[1px] overflow-scroll px-32 py-6"
          messageIfEmpty="No tracks selected..."
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
