import React from 'react';
import { useState, useEffect } from 'react';
import Search from './Components/Search';
import WordContainer from './Components/WordContainer';
import WordOfTheDay from './Components/WordOfTheDay';
import FavoriteList from './Components/FavoriteList';
import NavBar from './Components/NavBar';
import { generateSlug } from "random-word-slugs";

function App() {
  const [searchWord, setSearchWord] = useState("")
  const [randomWord, setRandomWord] = useState(
  [
    {hwi: 
      {hw: '', 
        prs: [ {mw: ''} ],},
      shortdef: [] },
  ])

  const slug = generateSlug(1)

  useEffect(() => {
    fetch(`https://dictionaryapi.com/api/v3/references/collegiate/json/${slug}?key=818a2b96-1647-4667-8769-8f3de5ad1509`)
    .then(r => r.json())
    .then(data => {
      setRandomWord(data)
      console.log(data)
    })
  }, [])
  
  function getWord(searchValue) {
    fetch(`https://dictionaryapi.com/api/v3/references/collegiate/json/${searchValue}?key=818a2b96-1647-4667-8769-8f3de5ad1509`)
    .then(r => r.json())
    .then(data => setSearchWord(data))
  }

  console.log(searchWord)

  return (
    <div>
      <h1>React-ionary</h1>
      <NavBar />
      <Search getWord={getWord} /> 
      {searchWord? <WordContainer searchWord={searchWord}/> : null}
      <WordOfTheDay randomWord={randomWord[0]} setRandomWord={setRandomWord} />
      <FavoriteList />
    </div>
  );
}

export default App;
