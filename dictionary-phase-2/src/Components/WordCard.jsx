
function WordCard({searchWord}) {

   const subdirectory = searchWord.hwi.prs[0].sound.audio[0]
   const soundFile = searchWord.hwi.prs[0].sound.audio 
   const audioElement = new Audio(`https://media.merriam-webster.com/audio/prons/en/us/mp3/${subdirectory}/${soundFile}.mp3`)

//    let isImage = true

//    if(searchWord.art.artid === true) {

//     const imageDirectory = searchWord.art.artid 
//     const image = `https://www.merriam-webster.com/assets/mw/static/art/dict/${imageDirectory}.gif`
//    } else {
//        let isImage = false
//    }


   const playAudio = () => {
       audioElement.play()
   }

    return(


        <div>
            <h2>{searchWord.hwi.hw}</h2>
            <h3>{searchWord.hwi.prs[0].mw}</h3>
            <button onClick={playAudio}>Say Word</button>
            {searchWord.shortdef.map(word=> <p>{word}</p>)}
            {/* {isImage ? <img src={image}/> : null} */}
            
        </div>
    )
}

export default WordCard