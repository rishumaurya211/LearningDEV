import { useMemo, useState } from "react";


const words= ['this','lorem','how','can','get'];
const Total_Lines=1000;
const AllWords=[];
for(let i=0;i<=Total_Lines;i++){
    let sentence="";
    for(let j=0;j<words.length;j++){
        sentence+=(words[Math.floor(words.length* Math.random())])
        sentence+=""
    }
    AllWords.push(sentence)
}


export function Assigment2() {
    const [sentence, setsentence] = useState(AllWords)
  const [filter, setfilter] = useState("");
  const filterSentence=useMemo(()=>{
    return sentence.filter(x =>x.includes(filter))
  },[sentence,filter])
  return (
    <div>
      <input
        type="text"
        onChange={(e) => {
          setfilter(e.target.value);
        }}
      />
    {filterSentence.map(word =><div>
       {word} </div>)}
    </div>
  );
}
