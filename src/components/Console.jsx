import React, { useState } from 'react'
import { ConsoleInput } from './ConsoleInput.jsx'
import { ConsoleScreen } from './ConsoleScreen.jsx';

export const Console = () => {
  const [input, setInput] = useState('');
  const [screen, setScreen] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setInput('');

    if(checkCommand(input)) {
      if(input === 'clear') {
        setScreen([{ error: false, command: input }]);
        return;
      }

      setScreen([...screen, { error: false, command: input }]);

      const response = await fetch(process.env.REACT_APP_API_URL + `?command=${ input }`);
      const techs = await response.json();

      setScreen([...screen, { error: false, command: input, techs: techs }]);
    }

    else {
      setScreen([...screen, { error: true, command: 'error: command not found' }]);
    }
  }

  const handleChangeInput = (e) => {
    setInput(e.target.value);
  }

  const checkCommand = (command) => {
    const commandSplit = command.split(' ');

    const COMMANDS = {
      INIT: ['rand', 'ecos', 'clear'],
      RAND: ['fron', 'back', 'full'],
      ECOS: ['react'],
    }

    const primaryCommand = COMMANDS.INIT.find(command => commandSplit[0] === command);

    if(!primaryCommand) return false;

    if(commandSplit[0] === 'clear' && commandSplit.length > 1) return false;
    else if(commandSplit[0] === 'clear') return true;

    const secondaryCommand = COMMANDS[primaryCommand.toUpperCase()].find(command => commandSplit[1] === command);

    if(!secondaryCommand) return false;
    
    return true;
  }

  return (
    <form onSubmit={ handleSubmit } className='console'>
      <ConsoleScreen value={ screen } />
      <ConsoleInput onChangeInput={ handleChangeInput } value={ input } />
    </form>
  );
}
