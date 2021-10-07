import { getWordsByCategory } from "random-word-slugs/dist/words";
import { useState } from "react";
import styled from "styled-components";

function Search ({getWordDefinition, getWordSynonym, setSearchWord, setThesaurusSearchWord}) {
    const [searchValue, setSearchValue] = useState("") 
    const [searchSwitcher, setSearchSwitcher] = useState(true)
    
    function handleChange(e) {
        e.preventDefault()
        setSearchValue(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault()
        setSearchWord(value => value = '')
        setThesaurusSearchWord(value => value = '')
        searchSwitcher ? getWordDefinition(searchValue) : getWordSynonym(searchValue)
    }

    const setSwitchTrue = () => setSearchSwitcher(switcher => switcher = true)
    const setSwitchFalse = () => setSearchSwitcher(switcher => switcher = false)
    
    
    return(
        <SearchPage>
            <Form onSubmit={handleSubmit}>
                <SearchBar type="text" name="search" value={searchValue} onChange={handleChange} />
                <button type="submit" value="Submit">Search</button>        
            </Form>
            {searchSwitcher ? <Button onClick={setSwitchTrue}>Dictionary</Button> : <button onClick={setSwitchTrue}>Dictionary</button>}
            {searchSwitcher ? <button onClick={setSwitchFalse}>Thesaurus</button> : <Button onClick={setSwitchTrue}>Thesaurus</Button>}
        </SearchPage>
    )
}

export default Search

const SearchPage = styled.div `
  display: flex;
  justify-content: center;
  background-color: #49b867;
  padding: 20px;
  
  margin: 80px 100px;
  box-shadow: 0 0 20px rgba(0, 0, 0, .5), 0 0 40px rgba(0, 0, 0, 0.3);
  border-radius: 5px;
`

const Form = styled.form `
    display: flex;
`
const Button = styled.button `
    background-color: blue;
    padding: 5px 10px;
    color: white;
    border-radius: 5px;
`
const SearchBar = styled.input `
    display: flex;
    width: 500px;
    height: 50px;
    font-size: 30px;

`
