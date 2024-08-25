import PropTypes from "prop-types";
import { useContext } from "react";
import { FaFrown } from "react-icons/fa";
import { Tracklist } from ".";
import TracklistContext from "../../contexts/TracklistContext";
import { PlaylistCreator } from "../PlaylistCreator";

const Main = ({ searchResults }) => {
  const { tracklist } = useContext(TracklistContext);

  return (
    <main className="relative top-20 flex h-fit flex-col-reverse justify-start bg-dark-main text-light-main lg:top-24 xl:h-[calc(100vh-6rem)] xl:min-h-[calc(900px-6rem)] xl:flex-row">
      <Tracklist
        className="z-40 h-fit w-full divide-y-[1px] divide-light-main overflow-scroll bg-dark-secondary px-10 py-10 lg:px-40 xl:h-full xl:w-5/12 xl:px-10 xl:py-4"
        messageIfEmpty="No tracks found..."
        iconIfEmpty={
          <FaFrown className="m-auto mt-52 text-dark-tertiary" size={350} />
        }
        trackObjectArray={searchResults}
      />
      <div className="flex h-full w-full flex-col xl:w-7/12">
        <PlaylistCreator />
        <Tracklist
          className="z-20 h-fit max-h-[calc(84px*6)] divide-y-[1px] divide-light-main overflow-scroll px-10 py-10 lg:px-40 xl:h-full xl:max-h-none xl:px-10 xl:py-6 2xl:px-20"
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
