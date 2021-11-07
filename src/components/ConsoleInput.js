import React, { useEffect, useRef, useState } from 'react'

export const ConsoleInput = () => {
  const [input, setInput] = useState('');
  const inputDOM = useRef(null);

  const changeHandle = (e) => {
    setInput(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setInput('');
  }

  useEffect(() => {
    inputDOM.current.focus();
  }, []);

  return (
    <form onSubmit={ handleSubmit }>
      <label className='console__label'>
        <span className='console__icon'>&gt;&gt;&gt;</span>
        <input value={ input } onChange={ changeHandle } ref={ inputDOM } type='text' spellCheck='false' maxLength='20' className='console__input' />
      </label>
    </form>
  );
}
