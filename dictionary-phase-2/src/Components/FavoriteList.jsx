import { useEffect, useState } from "react"
import Card from "../styled/card"

function FavoriteList({favList, grabFavorites, isLoggedIn}) {
    
    
    useEffect(()=>{
        if(isLoggedIn === true){ 
        grabFavorites()} 
    }, [isLoggedIn]) 
    
    


    let listOfFavorites = 
    favList.map(fav=>
    <p key={fav.id}>
    {fav.name}
    <br />
    </p>)
        
    if (isLoggedIn === false){
        listOfFavorites = [null]
    }

    
    return(
        <Card>
            <h1>Favorite List</h1>
            
              {listOfFavorites}
            
        </Card>
    )
}

export default FavoriteList