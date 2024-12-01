import react from 'react';
import React from 'react';

  



function InputGuess() {
  //Setting state for update guess input
  const [guess, setGuess] = React.useState('');

function handleSubmit (event) {
  event.preventDefault();
  console.log( guess);
  setGuess('');
}




 
  return (
    <form class='guess-input-wrapper' onSubmit={(event) => handleSubmit(event)}>
      <label for='guess-input'>Enter guess:</label>
      <input uppercase id='guess-input' type='text' value={guess} onChange={(event) => setGuess(event.target.value.toUpperCase())}/>
    </form>
  );
}




export default InputGuess;
