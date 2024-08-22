import PropTypes from "prop-types";

const InputField = ({ searchQuery, onSearchQueryChange }) => (
  <input
    className="w-full rounded-l-full bg-transparent px-5"
    type="text"
    name="inputField"
    id="inputField"
    placeholder="Search..."
    value={searchQuery}
    onChange={(e) => onSearchQueryChange(e.target.value)}
  />
);

InputField.propTypes = {
  searchQuery: PropTypes.string.isRequired,
  onSearchQueryChange: PropTypes.func.isRequired,
};

export default InputField;
