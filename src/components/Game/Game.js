import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import InputGuess from '../InputGuess/InputGuess';
import GuessResult from '../GuessResult/GuessResult';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([  ]);
  console.log (guesses, "from game")

  function AddNewGuess(guess) {
    const newGuess = {
      guess,
      id: Math.random(),
    };
    const nextGuesses = [...guesses, newGuess];
    setGuesses(nextGuesses);
  }

  return (
    <>
      <GuessResult guesses={guesses} setGuesses={setGuesses} />
      <InputGuess AddNewGuess={AddNewGuess} guesses={guesses} setGuesses={setGuesses} />
    </>
  );
  
}

export default Game;
