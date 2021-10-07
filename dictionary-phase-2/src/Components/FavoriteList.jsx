import { useEffect, useState } from "react"

function FavoriteList() {
    const [favorites, setFavorites] = useState([])
        

   useEffect(()=>{
        fetch('http://localhost:3001/favorites')
        .then(res=>res.json())
        .then(favs => setFavorites(favs))
   }, [])
  
    
    return(
        <div>
            <h1>Favorite List</h1>
            <ul>
                {favorites.map(fav=>
                <li key={fav.id}>
                {fav.name}
                <br/>
                pronunciation: {fav.pronunciation}
                </li> )}
            </ul>
        </div>
    )
}

export default FavoriteList