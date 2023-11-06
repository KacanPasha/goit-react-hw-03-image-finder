import { useState } from 'react';
import { ImSearch } from 'react-icons/im';
import './Serchbar.css';


export const SearchBar = ({ onAddSearchQuery }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    if (searchQuery === '') {
      alert('Please fill in the search field.');
    } else {
      onAddSearchQuery({ searchQuery });
      setSearchQuery('');
    }
  };

  const handleInputChange = event => {
    setSearchQuery(event.target.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="searchQuery"></label>
        <input
          id="searchQuery"
          name="searchQuery"
          value={searchQuery}
          onChange={handleInputChange}
          placeholder="Search images and photos"
        />
        <button type="submit">
          <ImSearch />
        </button>
      </form>
    </div>
  );
};
