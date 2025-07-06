import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiSearch } from 'react-icons/fi';

const SearchBox = () => {
  const navigate = useNavigate();
  const [query, setQuery] = useState('');

  const onSearch = (event) => {
    event.preventDefault();
    if (query.trim()) {
      navigate(`/search/${query}`);
    }
  };

  return (
    <form onSubmit={onSearch} autoComplete="off" className="p-2 bg-gradient-to-r from-rose-900/60 to-blue-900/60 rounded-xl shadow focus-within:text-rose-300">
      <label htmlFor="search-field" className="sr-only">
        Search music
      </label>
      <div className="flex flex-row justify-start items-center">
        <FiSearch aria-hidden="true" className="w-5 h-5 ml-4 text-rose-300" />
        <input
          name="search-field"
          autoComplete="off"
          id="search-field"
          className="flex-1 bg-transparent border-none placeholder-rose-200 outline-none text-base text-blue-100 p-4"
          placeholder="Search for songs, artists..."
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
    </form>
  );
};

export default SearchBox;
