import React from 'react';

const Search = ({searchPerson,handleSearchChange,searchNumber}) => {
    return (
        <div>
            <input type="number"
                   onChange={handleSearchChange} 
                   value={searchNumber}
                   placeholder="Enter entry number"/>
            <button onClick={searchPerson}>Search</button>
        </div>
    );
}

export default Search;
