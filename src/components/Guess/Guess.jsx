import React from "react";
import { range } from "../../utils";
import { checkGuess } from "../../game-helpers";

function Guess({ word, answer }) {
  const statusList = checkGuess(word, answer);
  function generateClassString(letter) {
    return letter === " "
      ? "cell"
      : "cell " + statusList.find((d) => d.letter === letter).status;
  }
  return (
    <p className="guess">
      {range(0, 5).map((d, i) => (
        <span key={i} className={generateClassString(word[d])}>
          {word[d]}
        </span>
      ))}
    </p>
  );
}

export default Guess;
