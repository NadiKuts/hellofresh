import React, { Component } from 'react';
import './Search.css';
import searchIcon from '../../images/search.png';

class Search extends Component {
  render() {
    return (
      <div className="Search">
        <img className="SearchIcon" src={searchIcon} alt="search" />
        <input className='SearchInput' type='text' name='search' placeholder='Search all recipes'/>
      </div>
    );
  }
}

export default Search;