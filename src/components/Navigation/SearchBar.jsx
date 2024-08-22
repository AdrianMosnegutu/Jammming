import { useContext, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { Filter, InputField } from ".";
import SearchContext from "../../contexts/SearchContext";

const SearchBar = () => {
  const {
    searchQuery: globalSearchQuery,
    setSearchQuery: onSearchQuerySubmit,
    filter: globalFilter,
    setFilter: onFilterSubmit,
  } = useContext(SearchContext);

  const [localSearchQuery, setLocalSearchQuery] = useState(globalSearchQuery);
  const [localFilter, setLocalFilter] = useState(globalFilter);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearchQuerySubmit(localSearchQuery);
    onFilterSubmit(localFilter);
  };

  return (
    <form
      className="border-light-main bg-dark-main flex h-11 w-5/12 rounded-full border"
      onSubmit={handleSubmit}
    >
      <InputField
        searchQuery={localSearchQuery}
        onSearchQueryChange={setLocalSearchQuery}
      />
      <Filter filter={localFilter} onFilterChange={setLocalFilter} />
      <button
        className="bg-spotify-green border-light-main text-dark-main rounded-r-full border-l px-6 transition ease-in hover:bg-opacity-75 active:bg-opacity-50"
        type="submit"
      >
        <FaSearch size={25} />
      </button>
    </form>
  );
};

export default SearchBar;
