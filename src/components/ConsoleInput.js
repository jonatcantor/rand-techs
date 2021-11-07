import React, { useEffect, useRef } from 'react'

export const ConsoleInput = (props) => {
  const inputDOM = useRef(null);

  useEffect(() => {
    inputDOM.current.focus();
  }, []);

  return (
    <>
      <label className='console__label'>
        <span className='console__icon'>&gt;&gt;&gt;</span>
        <input value={ props.value } onChange={ props.onChangeInput } ref={ inputDOM } type='text' spellCheck='false' maxLength='20' className='console__input' />
      </label>
    </>
  );
}
