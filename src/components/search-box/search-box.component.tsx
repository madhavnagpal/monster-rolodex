import { ChangeEventHandler } from 'react';
import './search-box.styles.css';

type SearchBoxProps = {
  placeholder?: string;
  value: string;
  handleChange: ChangeEventHandler<HTMLInputElement>;
};

function SearchBox({ placeholder, value, handleChange }: SearchBoxProps) {
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
