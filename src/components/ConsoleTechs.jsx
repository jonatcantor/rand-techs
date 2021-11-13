import React from 'react'
import { FiLink } from 'react-icons/fi';

export const ConsoleTechs = (props) => {
  return (
    <ul className='console__techs'>{
      props.techs.map((tech, index) => {
        return (
          <li key={ index } className='console__techicon'>
            <p className='console__tech'>{ tech.name } ({ tech.ecosystem })</p>
            <a href={ tech.link } target='_blank' rel='noreferrer' className='console__link'><FiLink size='1rem' /></a>
          </li>
        );
      })
    }</ul>
  );
}
