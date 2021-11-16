import React from 'react'

export const ConsoleCommands = (props) => {
  return (
    <ul className='console__commands'>
    {
      Object.keys(props.commands).map((command, index) => {
        return (
          props.commands[command].commands ?
          <ul key={ index }>
            <p><span className='console__comm'>{ command }</span> : <span className='console__desc'>{ props.commands[command].desc }</span></p>
            {
              props.commands[command].commands.map((subCommand, index) => {
                return (
                  <li key={ index }>
                    <span className='console__comm console__comm--belong'>{ subCommand }</span>
                  </li>
                );
              })
            }
          </ul> :
          <li key={ index }>
            <span className='console__comm'>{ command }</span> : <span className='console__desc'>{ props.commands[command] }</span>
          </li>
        );
      })
    }
    </ul>
  );
}
