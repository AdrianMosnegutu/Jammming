import { useState } from "react";
import { Navigation } from "../components/Navigation";
import { ProfileProvider } from "../contexts/ProfileContext";
import { SearchProvider } from "../contexts/SearchContext";
import mockProfile from "../mock/mockProfile.json";

const Jammming = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filter, setFilter] = useState("track");

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
    </ProfileProvider>
  );
};

export default Jammming;
