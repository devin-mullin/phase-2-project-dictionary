import { useEffect, useState } from "react"
import Card from "../styled/card"

function FavoriteList() {
    const [favorites, setFavorites] = useState([])
        

   useEffect(()=>{
        fetch('http://localhost:3001/words')
        .then(res=>res.json())
        .then(favs => setFavorites(favs))
   }, [])
  
    
    return(
        <Card>
            <h1>Favorite List</h1>
            <ul>
                {favorites.map(fav=>
                <li key={fav.id}>
                {fav.name}
                <br/>
                pronunciation: {fav.pronunciation}
                </li> )}
            </ul>
        </Card>
    )
}

export default FavoriteList