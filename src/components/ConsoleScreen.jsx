import React, { useEffect, useRef } from 'react'

export const ConsoleScreen = (props) => {
  const screenDOM = useRef(null);

  useEffect(() => {
    screenDOM.current.scrollTop = screenDOM.current.scrollHeight;
  }, [props.value]);

  return (
    <ul className='console__screen' ref={ screenDOM }>
      {
        props.value.map((command, index) => {
          return <li key={ index } className={`console__text ${ command.error ? 'console__text--error' : 'console__text--command' }`}> { command.command }</li>
        })
      }
    </ul>
  );
}
