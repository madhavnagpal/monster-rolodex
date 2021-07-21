import React from 'react';
import './search-box.styles.css';

function SearchBox({ placeholder, value, handleChange }) {
  return (
    <input
      className="search"
      type="search"
      value={value}
      placeholder={placeholder}
      onChange={handleChange}
    />
  );
}

export default SearchBox;
