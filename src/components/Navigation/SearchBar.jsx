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
    <form onSubmit={handleSubmit}>
      <InputField
        searchQuery={localSearchQuery}
        onSearchQueryChange={setLocalSearchQuery}
      />
      <Filter filter={localFilter} onFilterChange={setLocalFilter} />
      <button type="submit">
        <FaSearch />
      </button>
    </form>
  );
};

export default SearchBar;
