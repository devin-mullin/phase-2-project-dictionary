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
        <>
            <form onSubmit={handleSubmit}>
                <SearchBar type="text" name="search" value={searchValue} onChange={handleChange} />
                <button type="submit" value="Submit">Search</button>        
            </form>
            {searchSwitcher ? <Button onClick={setSwitchTrue}>Dictionary</Button> : <button onClick={setSwitchTrue}>Dictionary</button>}
            {searchSwitcher ? <button onClick={setSwitchFalse}>Thesaurus</button> : <Button onClick={setSwitchTrue}>Thesaurus</Button>}

        </>
    )
}

export default Search

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
