import React from "react";
import { useParams } from "react-router-dom";

function Detail({ letterList }) {
  const params = useParams();
  console.log(params); // {id:1}
  console.log(params.id); // "1"
  console.log(letterList); // undefined

  //   let foundLetter = letterList.find(
  //     (letter) => letter.id === params.id
  //   );
  //   console.log(foundLetter);

  return (
    <></>
    // <div key={foundLetter.id}>
    //   <img src={foundLetter.avatar} alt="메롱"></img>
    //   <ul>
    //     <li>{foundLetter.nickname}</li>
    //     <li>{foundLetter.createdAt}</li>
    //     <li>To : {foundLetter.writedTo}</li>
    //     <li>{foundLetter.content}</li>
    //   </ul>
    // </div>
  );
}

export default Detail;
