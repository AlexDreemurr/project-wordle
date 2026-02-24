import React from "react";

function InputForm({ handleSubmit, guess, setGuess, gameStatus }) {
  return (
    <form onSubmit={handleSubmit} className="guess-input-wrapper">
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        name="guess"
        id="guess-input"
        type="text"
        value={guess}
        minLength={5}
        maxLength={5}
        pattern="[A-Za-z]{5}"
        title="5个英文字母"
        onChange={handleChange}
        disabled={gameStatus !== "running"}
      />
    </form>
  );

  function handleChange(event) {
    setGuess(event.target.value.toUpperCase());
  }
}

export default InputForm;
