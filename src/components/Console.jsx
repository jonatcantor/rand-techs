import React, { useState } from 'react'
import { ConsoleInput } from './ConsoleInput.jsx'
import { ConsoleScreen } from './ConsoleScreen.jsx';

const COMMANDS = {
  SIMP: ['help', 'clear'],
  INIT: ['rand', 'ecos'],
  RAND: ['fron', 'back', 'full'],
  ECOS: ['react'],
}

const COMMANDS_DESCRIPTION = {
  help: 'shows you more information about all the commands',
  clear: 'clear the console screen',
  rand: {
    desc: 'get random technologies with the commands below',
    commands: COMMANDS.RAND,
  },
  ecos: {
    desc: 'get random technologies that belong to the same language or framework with the commands below',
    commands: COMMANDS.ECOS,
  },
}

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

      else if(input === 'help') {
        setScreen([...screen, { error: false, command: input, commands: COMMANDS_DESCRIPTION }]);
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

    let primaryCommand = COMMANDS.SIMP.find(command => commandSplit[0] === command);

    // if is SIMP command
    if(primaryCommand && commandSplit.length === 1) return true;

    primaryCommand = COMMANDS.INIT.find(command => commandSplit[0] === command);

    if(!primaryCommand || commandSplit.length > 2) return false;

    const secondaryCommand = COMMANDS[primaryCommand.toUpperCase()].find(command => commandSplit[1] === command);

    if(!secondaryCommand) return false;
    
    return true;
  }

  return (
    <form onSubmit={ handleSubmit } className='console'>
      <ConsoleScreen value={ screen } />
      <ConsoleInput
        onChangeInput={ handleChangeInput }
        value={ input }
        placeholder={ screen.length === 0 ? "type 'help'" : 'type some command!' } />
    </form>
  );
}
