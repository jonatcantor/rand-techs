import React, { useEffect, useRef } from 'react'
import { MdOutlineError, MdRadioButtonChecked } from 'react-icons/md';

export const ConsoleScreen = (props) => {
  const screenDOM = useRef(null);

  useEffect(() => {
    screenDOM.current.scrollTop = screenDOM.current.scrollHeight;
  }, [props.value]);

  return (
    <ul className='console__screen' ref={ screenDOM }>
      {
        props.value.map((command, index) => {
          return (
            <li key={ index } className='console__command'>
              { command.error ? <MdOutlineError size='1.5rem' fill='var(--error_color)' /> : <MdRadioButtonChecked size='1.5rem' fill='var(--tertiary_color)' /> }
              <p className={`console__text${ command.error ? ' console__text--error' : ' console__text--command' }`}> { command.command }</p>
            </li>
          );
        })
      }
    </ul>
  );
}
