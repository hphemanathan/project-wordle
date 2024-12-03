import react from 'react';
import React from 'react';

  



function InputGuess({guesses, setGuesses, AddNewGuess}) {

  const [inputGuess, setInputGuess] = React.useState('')
  //Setting state for update guess input
  // const [guess, setGuess] = React.useState('');

  // function AddNewGuess(guess) {
  //   const newGuess = {
  //     guess,
  //     id: Math.random(),
  //   };
  //   const nextGuesses = [...guesses, newGuess];
  //   setGuesses(nextGuesses);
  // }

 



 
  return (
    <form
      className='guess-input-wrapper'
      onSubmit={(event) => {
        event.preventDefault();
        AddNewGuess(inputGuess);
        setInputGuess("");
      }}>
      <label htmlFor='guess-input'>Enter guess:</label>
      <input
        id='guess-input'
        minLength={5}
        maxLength={5}
        required
        title='Please provide 5 letter word'
        pattern='[a-zA-Z]{5}'
        type='text'
        value={inputGuess}
        onChange={(event) => setInputGuess(event.target.value.toUpperCase())}
      />
    </form>
  );
}




export default InputGuess;
