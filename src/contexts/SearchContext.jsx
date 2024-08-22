import PropTypes from "prop-types";
import { createContext } from "react";

const SearchContext = createContext(null);

export const SearchProvider = ({
  searchQuery,
  setSearchQuery,
  filter,
  setFilter,
  children,
}) => (
  <SearchContext.Provider
    value={{ searchQuery, setSearchQuery, filter, setFilter }}
  >
    {children}
  </SearchContext.Provider>
);

SearchProvider.propTypes = {
  searchQuery: PropTypes.string,
  setSearchQuery: PropTypes.func.isRequired,
  filter: PropTypes.string,
  setFilter: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default SearchContext;
