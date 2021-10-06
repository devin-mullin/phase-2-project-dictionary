

function ThesaurusCard({thesaurusSearchWord}){
    
    return(
        <>
        <h2>{thesaurusSearchWord.hwi.hw}</h2>
        <h3> Synonyms: {thesaurusSearchWord.meta.syns[0].map((words, index) =><ul key={index}>{words}</ul> )} </h3>
        </>
    )
}


export default ThesaurusCard