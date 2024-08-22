import PropTypes from "prop-types";

const Filter = ({ filter, onFilterChange }) => (
  <select value={filter} onChange={(e) => onFilterChange(e.target.value)}>
    <option value="track">Tracks</option>
    <option value="artist">Artists</option>
    <option value="album">Albums</option>
    <option value="genre">Genres</option>
  </select>
);

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onFilterChange: PropTypes.func.isRequired,
};

export default Filter;
