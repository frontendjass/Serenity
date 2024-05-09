import { useState } from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import menuActiveIcon from '../assets/hamburger-menu.svg';
import menuCloseIcon from '../assets/hamburger-close.svg';

export default function Navbar() {
  const [menuActive, setMenuActive] = useState(false);

  function handleClick() {
    setMenuActive((prev) => !prev);
  }

  const rainbowText =
    'text-4xl font-bold bg-gradient-to-r from-matcha-500 via-matcha-400 to-matcha-500 bg-clip-text text-transparent uppercase drop-shadow font-raleway hover:cursor-pointer hover:from-matcha-300 hover:via-matcha-100 hover:to-matcha-300 inline-block hover:cursor-pointer';

  const linkStyle =
    'text-matcha-600 sm:text-matcha-50 text-xl uppercase drop-shadow-2xl origin-center hover:scale-75 font-raleway hover:cursor-pointer';

  return (
    <nav
      className='w-full absolute top-0 py-2 px-3 z-1 '
    >
      <motion.span className={rainbowText} whileHover={{rotate: 180}} transition={{type: 'spring', stiffness: 500}}>SRNT</motion.span>
      <ul
        className={`${
          menuActive ? 'translate-y-0' : '-translate-y-56'
        } transition bg-matcha-100 w-full absolute left-0 top-0 z-0 flex flex-col items-center gap-4 py-4 sm:translate-y-0 sm:flex-row sm:bg-transparent sm:justify-end sm:pr-5 `}
      >
        <motion.li
          whileHover={{ scale: 1.1 }}
          transition={{ type: 'spring', stiffness: 500 }}
        >
          <Link
            to='home'
            spy={true}
            smooth={true}
            className={linkStyle}
            onClick={handleClick}
          >
            Home
          </Link>
        </motion.li>
        <motion.li
          whileHover={{ scale: 1.1 }}
          transition={{ type: 'spring', stiffness: 500 }}
        >
          <Link
            to='plants'
            spy={true}
            smooth={true}
            className={linkStyle}
            onClick={handleClick}
          >
            Plants
          </Link>
        </motion.li>
        <motion.li
          whileHover={{ scale: 1.1 }}
          transition={{ type: 'spring', stiffness: 500 }}
        >
          <Link
            to='about'
            spy={true}
            smooth={true}
            className={linkStyle}
            onClick={handleClick}
          >
            About
          </Link>
        </motion.li>
        <motion.li
          whileHover={{ scale: 1.1 }}
          transition={{ type: 'spring', stiffness: 500 }}
        >
          <Link
            to='subscribe'
            spy={true}
            smooth={true}
            className={rainbowText}
            onClick={handleClick}
          >
            Subscribe
          </Link>
        </motion.li>
      </ul>
      <button onClick={handleClick} className='absolute right-3 z-1 sm:hidden'>
        <img
          src={menuActive ? menuCloseIcon : menuActiveIcon}
          alt='Menu Icon'
        />
      </button>
    </nav>
  );
}
