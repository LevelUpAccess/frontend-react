import React, { useState } from 'react';
import axios from 'axios';
import stylesSigned from '../styles/navSigned.module.css';

function SearchBar({ onSearchResults }) {
  const [query, setQuery] = useState('');

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(`http://127.0.0.1:8000/api/productos/search?query=${query}`);
      onSearchResults(response.data);
    } catch (error) {
      console.error('Error fetching search results:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="search-bar">
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        placeholder="Buscar..."
        className={stylesSigned.buscar_barra}
      />
      <button type="submit" className="search-button">
        
      </button>
    </form>
  );
}

export default SearchBar;