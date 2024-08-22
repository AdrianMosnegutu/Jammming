import PropTypes from "prop-types";

const Filter = ({ filter, onFilterChange }) => (
  <select
    className="cursor-pointer appearance-none rounded-none rounded-l-md bg-[#323232] px-4 outline-none transition ease-in hover:bg-[hsl(0,0%,30%)]"
    value={filter}
    onChange={(e) => onFilterChange(e.target.value)}
  >
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
