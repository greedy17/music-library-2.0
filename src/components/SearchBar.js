import React from 'react';

const SearchBar = ({searchChange}) => {
    return (
      <div style={{display: 'flex', justifyContent: 'center'}}
      className='pa4 ma4'>
        <input
        style={{width: '400px'}}
        type="text"
        className='bg-light-yellow pa1 ma1 br-pill'
        placeholder='search the playlist here!'
        onChange={searchChange} />
      </div>
    );
  }

export default SearchBar;