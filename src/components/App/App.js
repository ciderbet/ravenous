import React from 'react';
import './App.css';
import BusinessList from '../BusinessList/BusinessList'
import SearchBar from '../SearchBar/SearchBar'

// Page containing searchbar to search for restaurants, and a list of businesses

function App() {
  return (<div className="App">
  <h1>ravenous</h1>
  <SearchBar />
  <BusinessList />
</div>);
}

export default App;
