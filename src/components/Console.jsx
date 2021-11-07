import React, { useState } from 'react'
import { ConsoleInput } from './ConsoleInput.jsx'
import { ConsoleScreen } from './ConsoleScreen.jsx';

export const Console = () => {
  const [input, setInput] = useState('');
  const [screen, setScreen] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setInput('');

    if(checkCommand(input)) {
      setScreen([...screen, { error: false, command: input }]);
    }

    else {
      setScreen([...screen, { error: true, command: 'error: command not found' }]);
    }
  }

  const handleChangeInput = (e) => {
    setInput(e.target.value);
  }

  const checkCommand = (command) => {
    const INIT_COMMANDS = ['rand'];
    const TYPE_COMMANDS = ['frontend', 'backend'];
    const STACK_COMMANDS = ['basic', 'php', 'preprocessors', 'nodejs', 'python'];

    const commandSplit = command.split(' ');

    if(!INIT_COMMANDS.find(command => commandSplit[0] === command)) return false;
    if(!TYPE_COMMANDS.find(command => commandSplit[1] === command)) return false;
    if(!STACK_COMMANDS.find(command => commandSplit[2] === command)) return false;

    return true;
  }

  return (
    <form onSubmit={ handleSubmit } className='console'>
      <ConsoleScreen value={ screen } />
      <ConsoleInput onChangeInput={ handleChangeInput } value={ input } />
    </form>
  );
}
