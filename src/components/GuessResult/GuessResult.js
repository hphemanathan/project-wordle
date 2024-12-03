import React from 'react';

function GuessResult({guesses}) {
  return (
    <div className='guess-results'>
      {guesses.map(({guess, id}) => (
        <p key={id}className='guess'>{guess}</p>  
      ))}

    </div>
  );
}

export default GuessResult;
