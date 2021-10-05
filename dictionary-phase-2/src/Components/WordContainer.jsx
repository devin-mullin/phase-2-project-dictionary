import WordCard from './WordCard'

function WordContainer({searchWord}) {
    return(
        <WordCard searchWord={searchWord[0]} />
    )
}

export default WordContainer