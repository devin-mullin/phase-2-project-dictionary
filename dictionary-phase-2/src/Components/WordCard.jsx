import { useState } from "react"
import Card from "../styled/card"

function WordCard({searchWord, addFavorite, isLoggedIn}) {
    const [isLiked, setIsLiked] = useState(true)
    const [likedWord, setLikedWord] = useState('')

   const subdirectory = searchWord.hwi.prs[0].sound.audio[0]
   const soundFile = searchWord.hwi.prs[0].sound.audio 
   const audioElement = new Audio(`https://media.merriam-webster.com/audio/prons/en/us/mp3/${subdirectory}/${soundFile}.mp3`)

   let isImage = true
   let image

   const searchWordOrg = searchWord.hwi.hw
   const searchWordName = searchWordOrg.replace('*', '')

   if(searchWord.art?.artid) {
    isImage = true
    const imageDirectory = searchWord.art.artid 
    image = `https://www.merriam-webster.com/assets/mw/static/art/dict/${imageDirectory}.gif`
   } else {
       isImage = false
   }
    
   const likedObj = { name: searchWordName,
                      pronunciation: searchWord.hwi.prs[0].mw
                    }

   const handleLike = () => {
       if(isLoggedIn === false) {
           alert("Please Log In")
        } else {
            setIsLiked(!isLiked)
        }
       
       if (isLiked === true){
           addFavorite(likedObj)
       } else if (isLiked === false){
           console.log('nothing to add here!')
       }
   }
   
   


   const playAudio = () => {
       audioElement.play()
   }

  

    return(
        <Card>
            <h2>{searchWordName} <button onClick={handleLike}>{isLiked ? '🤍' : '❤️' }</button></h2>
            <h3>{searchWord.hwi.prs[0].mw}</h3>
            <button onClick={playAudio}>Say Word</button>
            {searchWord.shortdef.map((word, index) => <p key={index}>{word}</p>)}
            {isImage ? <img src={image}/> : null}            
        </Card>
    )
}

export default WordCard