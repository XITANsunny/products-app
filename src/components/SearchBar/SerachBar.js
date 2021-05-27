import React from 'react';
import './SearchBar.css';

const SearchBar = ({searchTerm, setSearchTerm})=>{

    const handleChange = event=>{
        setSearchTerm(event.target.value);
      }
    return (<div>
        <form action="/" method="get">
            <label htmlFor="header-search">
                <span className="visually-hidden">
                    Search product by name
                </span>
            </label>
            <input
                value={searchTerm}
                onInput={e => setSearchTerm(e.target.value)}
                type="text"
                id="header-serach"
                placeholder="Search product by name"
                onChange = {handleChange}
            />
            
        </form>
    </div>)
}
export default SearchBar;