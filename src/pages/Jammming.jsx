import { useState } from "react";
import { Main } from "../components/Main";
import { Navigation } from "../components/Navigation";
import { ProfileProvider } from "../contexts/ProfileContext";
import { SearchProvider } from "../contexts/SearchContext";
import { TracklistProvider } from "../contexts/TracklistContext";
import mockProfile from "../mock/mockProfile.json";
import mockTrack from "../mock/mockTrack.json";

const Jammming = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filter, setFilter] = useState("track");
  const [searchResults, setSearchResults] = useState([mockTrack, mockTrack]);

  return (
    <ProfileProvider mockProfile={mockProfile}>
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
    </ProfileProvider>
  );
};

export default Jammming;
