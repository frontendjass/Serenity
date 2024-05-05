import { useState } from 'react';
import { Link } from 'react-scroll';
import menuActiveIcon from '../assets/hamburger-menu.svg';
import menuCloseIcon from '../assets/hamburger-close.svg';

export default function Navbar() {
  const [menuActive, setMenuActive] = useState(false);

  function handleClick() {
    setMenuActive((prev) => !prev);
  }

  const rainbowText =
    'text-4xl font-bold bg-gradient-to-r from-matcha-300 via-matcha-100 to-matcha-300 bg-clip-text text-transparent uppercase drop-shadow font-raleway';
  const linkStyle = 'text-matcha-50 text-xl uppercase drop-shadow-2xl origin-center hover:scale-75 font-raleway';

  return (
    <nav className='w-full absolute top-0 py-2 px-3 z-1'>
      <span className={`${rainbowText}`}>SRNT</span>
      <ul
        className={`${
          menuActive ? 'translate-y-0' : '-translate-y-56'
        } transition bg-matcha-100 w-full absolute left-0 top-0 z-0 flex flex-col items-center gap-4 py-4 sm:translate-y-0 sm:flex-row sm:bg-transparent sm:justify-end sm:pr-5`}
      >
        <li>
          <Link to="home" spy={true} smooth={true} className={linkStyle} onClick={handleClick}>
            Home
          </Link>
        </li>
        <li>
          <Link to="plants" spy={true} smooth={true} className={linkStyle} onClick={handleClick}>
            Plants
          </Link>
        </li>
        <li>
          <Link to="about" spy={true} smooth={true} className={linkStyle} onClick={handleClick}>
            About
          </Link>
        </li>
        <li>
          <Link to="subscribe" spy={true} smooth={true} className='text-4xl uppercase text-yellow-100' onClick={handleClick}>
            Subscribe
          </Link>
        </li>
      </ul>
      <button onClick={handleClick} className='absolute right-3 z-1 sm:hidden'>
        <img src={menuActive ? menuCloseIcon : menuActiveIcon} alt="Menu Icon"/>
      </button>
    </nav>
  );
}
