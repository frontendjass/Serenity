import { useState } from 'react';

import menuActiveIcon from '../assets/hamburger-menu.svg';
import menuCloseIcon from '../assets/hamburger-close.svg';

export default function Navbar() {
  const [menuActive, setMenuActive] = useState(false);

  function handleClick() {
    setMenuActive(prev => !prev);
  }

  const rainbowText = "text-4xl font-bold bg-gradient-to-r from-matcha-400 via-matcha-200 to-matcha-400 bg-clip-text text-transparent";
  const buttonStyle = 'text-matcha-900 text-xl';

  return (
    <nav className='w-full absolute top-0 py-2 px-3'>
      <span className={`${rainbowText}`}>SRNT</span>
      <ul className={`${menuActive ? 'translate-y-0' : '-translate-y-52'} transition bg-matcha-100 w-full absolute left-0 top-0 z-0 flex flex-col items-center gap-4 py-4`}>
        <li><a href='#' className={buttonStyle}>Plants</a></li>
        <li><a href='#' className={buttonStyle}>About</a></li>
        <li><a href='#subscribe' className={rainbowText}>Subscribe</a></li>
      </ul>
      <button onClick={handleClick} className='absolute right-3 z-1'><img src={menuActive ? menuCloseIcon : menuActiveIcon}/></button>
    </nav>
  );
}
