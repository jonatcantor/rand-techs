import React from 'react'
import { ConsoleInput } from './ConsoleInput'
import { ConsoleScreen } from './ConsoleScreen';

export const Console = () => {
  return (
    <main className='console'>
      <ConsoleScreen />
      <ConsoleInput />
    </main>
  );
}
