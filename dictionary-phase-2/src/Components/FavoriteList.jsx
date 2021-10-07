import { useEffect, useState } from "react"
import Card from "../styled/card"

function FavoriteList({favList, grabFavorites, isLoggedIn, loggedInUser}) {
    

    useEffect(()=>{
        if(isLoggedIn === true){ 
        grabFavorites()} 
    }, [isLoggedIn]) 
    
    


    let listOfFavorites = 
    favList.map(fav=>
    <p key={fav.id}>
        {fav.name}
    </p>)
        
    
        if (isLoggedIn === false){
        listOfFavorites = [null]
    }

    
    return(
        <Card>
            <h2>{isLoggedIn ? `${loggedInUser.username}'s Favorite Words` : 'Favorite Words'}</h2>
            
              {listOfFavorites}
            
        </Card>
    )
}

export default FavoriteList