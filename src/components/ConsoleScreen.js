import React, { useEffect, useRef } from 'react'

export const ConsoleScreen = (props) => {
  const screenDOM = useRef(null);

  useEffect(() => {
    screenDOM.current.scrollTop = screenDOM.current.scrollHeight;
  }, [props.value]);

  return (
    <ul className='console__screen' ref={ screenDOM }>
      { props.value.map((command, index) => <li key={ index } className='console__text'> { command }</li>) }
    </ul>
  );
}
