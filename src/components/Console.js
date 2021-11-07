import React, { useState } from 'react'
import { ConsoleInput } from './ConsoleInput'
import { ConsoleScreen } from './ConsoleScreen';

export const Console = () => {
  const [input, setInput] = useState('');
  const [screen, setScreen] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setInput('');
    setScreen([...screen, input]);
  }

  const handleChangeInput = (e) => {
    setInput(e.target.value);
  }

  return (
    <form onSubmit={ handleSubmit } className='console'>
      <ConsoleScreen value={ screen } />
      <ConsoleInput onChangeInput={ handleChangeInput } value={ input } />
    </form>
  );
}
