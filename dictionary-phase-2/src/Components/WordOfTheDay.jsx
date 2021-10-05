
function WordOfTheDay({randomWord, handleWordOfTheDay}) {
    const subdirectory = randomWord.hwi.prs[0].sound.audio[0]
    const soundFile = randomWord.hwi.prs[0].sound.audio 
    const audioElement = new Audio(`https://media.merriam-webster.com/audio/prons/en/us/mp3/${subdirectory}/${soundFile}.mp3`)

    let isImage = true
    let image

    if(randomWord.art?.artid) {
     isImage = true
     const imageDirectory = randomWord.art.artid 
     image = `https://www.merriam-webster.com/assets/mw/static/art/dict/${imageDirectory}.gif`
    } else {
        isImage = false
    }

    const playAudio = () => {
        audioElement.play()
    }
    
  

     return(
         <div>
             <h1>Word of The Day</h1>
             <h2>{randomWord.hwi.hw}</h2>
             <h3>{randomWord.hwi.prs[0].mw}</h3>
             <button onClick={playAudio}>Say Word</button>
             {randomWord.shortdef.map((word, index) => <p key={index}>{word}</p>)}
             {isImage ? <img src={image}/> : null}
         </div>
     )
}

export default WordOfTheDay