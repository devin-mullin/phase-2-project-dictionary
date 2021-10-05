import { getWordsByCategory } from "random-word-slugs/dist/words";
import { useState } from "react";

function Search ({getWord}) {
    const [searchValue, setSearchValue] = useState("") 
    
    function handleChange(e) {
        e.preventDefault()
        setSearchValue(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault()
        getWord(searchValue)
    }
    
    return(
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" name="search" value={searchValue} onChange={handleChange} />
                <button type="submit" value="Submit">Search</button>        
            </form>
            <button>Dictionary</button>
            <button>Thesaurus</button>
        </>
    )
}

export default Search