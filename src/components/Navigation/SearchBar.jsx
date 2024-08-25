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
      className="flex h-10 w-full rounded-full border border-light-main bg-dark-main lg:h-11 lg:w-5/12"
      onSubmit={handleSubmit}
    >
      <InputField
        searchQuery={localSearchQuery}
        onSearchQueryChange={setLocalSearchQuery}
      />
      <Filter filter={localFilter} onFilterChange={setLocalFilter} />
      <button
        className="rounded-r-full border-l border-light-main bg-spotify-green px-6 text-dark-main transition ease-in hover:bg-opacity-75 active:bg-opacity-50"
        type="submit"
      >
        <FaSearch size={25} />
      </button>
    </form>
  );
};

export default SearchBar;
