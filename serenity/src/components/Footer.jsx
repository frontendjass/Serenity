import { Link } from 'react-scroll';

import pinterestIcon from '../assets/icon-pinterest.svg';
import instagramIcon from '../assets/icon-instagram.svg';
import twitterIcon from '../assets/icon-twitter.svg';
import facebookIcon from '../assets/icon-facebook.svg';

export default function Footer() {
    const linkStyle = 'text-matcha-900 text-l uppercase font-raleway';

    return (
        <footer className=" bg-matcha-50 flex flex-col-reverse justify-center items-center gap-4 h-36 py-8 px-10 sm:flex-row sm:justify-between">
            <div>
                <ul className="flex gap-2">
                    <li><button><img src={pinterestIcon} alt='Pinterest link'/></button></li>
                    <li><button><img src={instagramIcon} alt='Instagram link'/></button></li>
                    <li><button><img src={twitterIcon} alt='Twitter link'/></button></li>
                    <li><button><img src={facebookIcon} alt='Facebook link'/></button></li>
                </ul>
            </div>
            <div>
                <nav>
                    <ul className="flex flex-col items-center justify-center gap-2 sm:flex-row">
                        <li><Link to='plants' spy={true} smooth={true} className={linkStyle}>Plants</Link></li>
                        <li><Link to='about' spy={true} smooth={true} className={linkStyle}>About</Link></li>
                        <li><Link to='subscribe' spy={true} smooth={true} className={linkStyle}>Subscribe</Link></li>
                    </ul>
                </nav>
            </div>
        </footer>
    )
}