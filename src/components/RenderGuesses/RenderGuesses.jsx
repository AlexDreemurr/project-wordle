import React from "react";
import Guess from "../Guess/Guess";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

function RenderGuesses({ guessList, answer }) {
  function getRenderedList(guessList) {
    let renderList = [];
    for (let i = 0; i < NUM_OF_GUESSES_ALLOWED; i++) {
      if (i < guessList.length) {
        renderList.push(guessList[i]);
      } else {
        renderList.push("     ");
      }
    }
    return renderList;
  }

  return (
    <div className="guess-results">
      {getRenderedList(guessList).map((d, i) => (
        <Guess key={i} word={d} answer={answer} />
      ))}
    </div>
  );
}

export default RenderGuesses;
