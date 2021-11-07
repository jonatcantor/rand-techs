import React, { useState } from 'react'
import { ConsoleInput } from './ConsoleInput'
import { ConsoleScreen } from './ConsoleScreen';

export const Console = () => {
  const [input, setInput] = useState('');
  const [screen, setScreen] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    setInput('');
  }

  const handleChangeInput = (e) => {
    setInput(e.target.value);
  }

  const handleChangeScreen = (e) => {
    setScreen({});
  }

  return (
    <form onSubmit={ handleSubmit } className='console'>
      <ConsoleScreen onChangeScreen={ handleChangeScreen } value={ screen } />
      <ConsoleInput onChangeInput={ handleChangeInput } value={ input } />
    </form>
  );
}
