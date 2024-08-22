import { useContext, useEffect, useState } from "react";
import { Main } from "../components/Main";
import { Navigation } from "../components/Navigation";
import ProfileContext from "../contexts/ProfileContext";
import { SearchProvider } from "../contexts/SearchContext";
import { TracklistProvider } from "../contexts/TracklistContext";
import mockTrack from "../mock/mockTrack.json";
import { getProfileData } from "../services/spotify-api";

const Jammming = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filter, setFilter] = useState("track");
  const [searchResults, setSearchResults] = useState([mockTrack, mockTrack]);
  const { setProfile } = useContext(ProfileContext);

  useEffect(() => {
    getProfileData()
      .then((data) => setProfile(data))
      .catch((error) => console.log(error));
  }, [setProfile]);

  return (
    <>
      <SearchProvider
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        filter={filter}
        setFilter={setFilter}
      >
        <Navigation />
      </SearchProvider>
      <TracklistProvider>
        <Main searchResults={searchResults} />
      </TracklistProvider>
    </>
  );
};

export default Jammming;
