import React from "react";

function Banner({ gameStatus, guessTime = 0, answer = null }) {
  const happyString = (
    <p>
      <strong>Congratulations!</strong> Got it in{" "}
      <strong>{guessTime} Guesses</strong>.
    </p>
  );
  const sadString = (
    <p>
      Sorry, the correct answer is <strong>{answer}</strong>.
    </p>
  );
  return (
    <div className={gameStatus === "win" ? "happy banner" : "sad banner"}>
      {gameStatus === "win" ? happyString : sadString}
    </div>
  );
}

export default Banner;
