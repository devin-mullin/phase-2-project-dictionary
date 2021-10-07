import Card from "../styled/card"

function ThesaurusCard({thesaurusSearchWord}){
    
    return(
        <Card>
            <h2>{thesaurusSearchWord.hwi.hw}</h2>
            <h3> Synonyms: {thesaurusSearchWord.meta.syns[0].map((words, index) =><ul key={index}>{words}</ul> )} </h3>
        </Card>
    )
}


export default ThesaurusCard