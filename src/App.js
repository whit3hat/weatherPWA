import React, { useState } from 'react';
import { fetchWeather } from './api/fetchWeather';
import './App.css';

const App = () => {
  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});

  const search = async (e) => {
    if(e.key === 'Enter') {
      const data = await fetchWeather(query)

      //takes the data from the search to use in the app
      setWeather(data);

      //clears the data after the search completes
      setQuery('')
    }
  }
  return (
    <div className='main-container'>
      <input type='text' className='search' placeholder='Search...' value={query} onChange={(e) => setQuery(e.target.value)} onKeyPress={search} />
    </div>
  );
}

export default App;
