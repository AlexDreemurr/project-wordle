import React from "react";

import InputForm from "../InputForm";
import RenderGuesses from "../RenderGuesses";
import Banner from "../Banner";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { sample } from "../../utils";
import { WORDS } from "../../data";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guess, setGuess] = React.useState("");
  const [guessList, setGuessList] = React.useState([]);
  const [gameStatus, setGameStatus] = React.useState("running");

  React.useEffect(() => {
    if (guessList[guessList.length - 1] === answer) {
      setGameStatus("win");
    } else if (guessList.length === NUM_OF_GUESSES_ALLOWED) {
      setGameStatus("lose");
    } else {
      setGameStatus("running");
    }
  }, [guessList]);

  return (
    <>
      <RenderGuesses guessList={guessList} answer={answer}></RenderGuesses>
      <InputForm
        handleSubmit={handleSubmit}
        guess={guess}
        setGuess={setGuess}
        gameStatus={gameStatus}
      />
      {gameStatus !== "running" && (
        <Banner
          gameStatus={gameStatus}
          guessTime={guessList.length}
          answer={answer}
        />
      )}
    </>
  );

  function handleSubmit(event) {
    event.preventDefault();
    setGuessList((prevList) => [...prevList, guess]);
    setGuess("");
  }

  function setStatus() {}
}

export default Game;
