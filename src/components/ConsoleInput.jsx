import React, { useEffect, useRef } from 'react'
import { FaTerminal } from 'react-icons/fa';

export const ConsoleInput = (props) => {
  const inputDOM = useRef(null);

  useEffect(() => {
    inputDOM.current.focus();
  }, []);

  return (
    <>
      <label className='console__label'>
        <FaTerminal size='1.5rem' />
        <input value={ props.value } onChange={ props.onChangeInput } ref={ inputDOM } type='text' spellCheck='false' maxLength='20' className='console__input' />
      </label>
    </>
  );
}
