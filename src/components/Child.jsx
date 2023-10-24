import ww from "../assets/ww.png";
import { useState } from "react";

// When we want to use useState, we have to import it with {}'s
export default function Child({ name }) {
  console.log(useState(0));

  const [likes, setLikes] = useState(0);
  function handleLikes() {
    setLikes(likes + 1);
  }
  return (
    <div>
      <p>{name} This is the child</p>
      <img src={ww} onClick={handleLikes} />
      <span>lol {likes}</span>
    </div>
  );
}
