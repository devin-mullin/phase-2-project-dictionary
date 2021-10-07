import React from 'react';
import { useState, useEffect } from 'react';
import Search from './Components/Search';
import WordOfTheDay from './Components/WordOfTheDay';
import FavoriteList from './Components/FavoriteList';
import NavBar from './Components/NavBar';
import { generateSlug } from "random-word-slugs";
import NewUserForm from './Components/NewUserForm';
import WordCard from './Components/WordCard';
import ThesaurusCard from './Components/ThesaurusCard';
import { Route, Switch } from 'react-router-dom'
import styled from 'styled-components';


function App() {
  // const [showForm, setShowForm] = useState(false)
  const [searchWord, setSearchWord] = useState('')
  const [loggedInUser, setLoggedInUser] = useState([{}])
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [likedWord, setLikedWord] = useState('')
  const [thesaurusSearchWord, setThesaurusSearchWord] = useState("")
  const [randomWord, setRandomWord] = useState(
  [
    { art: { 
      artid: ''},
      hwi: 
      {hw: '', 
        prs: [ {mw: '',
                  sound: {
                    audio: ""
                  }} ],},
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
  
  function getWordDefinition(searchValue) {
    fetch(`https://dictionaryapi.com/api/v3/references/collegiate/json/${searchValue}?key=818a2b96-1647-4667-8769-8f3de5ad1509`)
    .then(r => r.json())
    .then(data => setSearchWord(data))
  }

  function getWordSynonym(searchValue) {
    fetch(`https://dictionaryapi.com/api/v3/references/thesaurus/json/${searchValue}?key=bf67571a-955e-4874-aa11-d4d40d976166`)
    .then(r => r.json())
    .then(data => setThesaurusSearchWord(data))
  }

  function userLogin(e, creds) {
    e.preventDefault()
    fetch(`http://localhost:3001/users?username=${creds.username}`)
    .then(r=>r.json())
    .then(users => {
      if(users.length > 0){
        setLoggedInUser(users)
        setIsLoggedIn(true) 
        alert('good job brother u logged in')
      } else {
        alert('try again buddy')
      }
    }) 
    // alert(`good job, ${creds.username}, you logged in dude`)
  }
  
  const addFavorite = (word) => {
    console.log(word);
    setLikedWord(word)
    console.log(likedWord)
    fetch('http://localhost:3001/favorites', {
      method: 'POST', 
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(likedWord)
      }
    )
    .then(res=>res.json())
    .catch(console.log('error'))
  }
  

  
  return (
    <div>
      <Switch>
          <Route path="/newuser">
            <NewUserForm />
          </Route>
          <Route path="/">
            <NavBar userLogin={userLogin} loggedInUser={loggedInUser} setIsLoggedIn={setIsLoggedIn} isLoggedIn={isLoggedIn}/>
            <PageStyle>
              <Search getWordDefinition={getWordDefinition} getWordSynonym={getWordSynonym} setSearchWord={setSearchWord} setThesaurusSearchWord={setThesaurusSearchWord}/> 
            </PageStyle>
            {searchWord? <WordCard searchWord={searchWord[0]} addFavorite={addFavorite}/> : null}
            {thesaurusSearchWord? <ThesaurusCard thesaurusSearchWord={thesaurusSearchWord[0]} /> : null}
            <PageStyle>
              <WordOfTheDay randomWord={randomWord[0]} setRandomWord={setRandomWord} />
            </PageStyle>
            <FavoriteList />
          </Route>
        </Switch>
    </div>
  );
}

export default App;

const PageStyle = styled.div `
  display: flex;
  justify-content: center;
  background-color: #49b867;
  padding: 20px;
  
  margin: 80px 100px;
  box-shadow: 0 0 20px rgba(0, 0, 0, .5), 0 0 40px rgba(0, 0, 0, 0.3);
  border-radius: 5px;
`

