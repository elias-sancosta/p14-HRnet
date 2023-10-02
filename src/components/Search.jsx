import PropTypes from 'prop-types';

/**
 * Search component that displays a label and an input
 * @component
 * @param {string} label - Label to be display for search input
 * @param {function} onChange - Function to call when the user types in search input
 * @param {string} customStyle - Custom style for search component
 * @returns {JSX.Element}
 */
const Search = ({ onChange }) => {
  return (
    <div className="text-end">
      <label htmlFor="search" id="search" className="search__label">
        <i className="ri-search-line text-white text-xl pr-4"></i>
      </label>
      <input
        name="search"
        type="text"
        className="py-2 bg-[#c6d0ac] border outline-none px-4"
        onChange={onChange}
        placeholder="Search..."
        aria-labelledby="search"
      />
    </div>
  );
};

Search.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default Search;
