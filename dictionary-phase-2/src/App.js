import React from 'react';
import { useState, useEffect } from 'react';
import { generateSlug } from "random-word-slugs";
import Search from './Components/Search';
import WordContainer from './Components/WordContainer';
import WordOfTheDay from './Components/WordOfTheDay';
import FavoriteList from './Components/FavoriteList';
import NavBar from './Components/NavBar';

function App() {
  const [searchWord, setSearchWord] = useState("")

  function getWord(searchValue) {
    fetch(`https://dictionaryapi.com/api/v3/references/collegiate/json/${searchValue}?key=818a2b96-1647-4667-8769-8f3de5ad1509`)
    .then(r => r.json())
    .then(data => console.log(data))
  }

  return (
    <div>
      <h1>React-ionary</h1>
      <NavBar />
      <Search getWord={getWord} /> 
      <WordContainer />
      <WordOfTheDay />
      <FavoriteList />
    </div>
  );
}

export default App;
