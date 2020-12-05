import React from 'react';

const SearchBar = ({searchChange}) => {
    return (
      <div className='search'>
        <input
        type="text"
        placeholder='search playlist'
        onChange={searchChange} />
      </div>
    );
  }

export default SearchBar;