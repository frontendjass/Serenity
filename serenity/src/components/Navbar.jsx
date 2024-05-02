import { useState } from 'react';

import menuActiveIcon from '../assets/icon-hamburger.svg';

export default function Navbar() {
  const [menuActive, setMenuActive] = useState('-translate-y-32');

  function handleClick() {
    setMenuActive(
      menuActive === '-translate-y-32' ? 'translate-y-7' : '-translate-y-32'
    );
  }

  const rainbowText = "text-4xl font-bold bg-gradient-to-r from-matcha-400 via-matcha-200 to-matcha-400 bg-clip-text text-transparent";
  const buttonStyle = 'text-matcha-50';

  return (
    <nav className='flex justify-between items-center w-full h-14 absolute top-0 left-0 px-4'>
      <span className={`${rainbowText} sm:text-5xl`}>SRTY</span>
      <ul
        className={`${menuActive} flex flex-col items-center gap-4 transition w-full sm:flex-row sm:translate-y-0 sm:justify-end `}
      >
        <li>
          <button className={buttonStyle}>Plants</button>
        </li>
        <li>
          <button className={buttonStyle}>About</button>
        </li>
        <li>
          <button className={`${rainbowText} sm:text-3xl drop-shadow-md`}>Subscribe</button>
        </li>
      </ul>
      <button onClick={handleClick} className='absolute right-4 text-3xl text-matcha-100 sm:hidden'>X</button>
    </nav>
  );
}
