import { useState } from "react";

function Search () {
    const [search, setSearch] = useState("") 
    
    return(
        <form>
            <input type="text" name="search"/>
            <button type="submit" value="Submit">Search</button>        
        </form>

    )
}

export default Search