
import {useEffect, useState} from 'react'
import { generateSlug } from "random-word-slugs";
import WordCard from './WordCard';

function WordOfTheDay() {
    const [randomWord, setRandomWord] = useState('')

    const slug = generateSlug(1)
    // console.log('slug', slug)

    useEffect(() => {
        fetch(`https://dictionaryapi.com/api/v3/references/collegiate/json/${slug}?key=818a2b96-1647-4667-8769-8f3de5ad1509`)
        .then(r => r.json())
        .then(data => setRandomWord(data))
    }, [])

    return(
        <div>
          <WordCard searchWord={randomWord}/>
        </div>
    )
}

export default WordOfTheDay