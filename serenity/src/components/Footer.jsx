import pinterestIcon from '../assets/icon-pinterest.svg';
import instagramIcon from '../assets/icon-instagram.svg';
import twitterIcon from '../assets/icon-twitter.svg';
import facebookIcon from '../assets/icon-facebook.svg';

export default function Footer() {
    return (
        <footer className=" bg-matcha-50 flex flex-col-reverse justify-center items-center gap-4 h-36 py-8 px-10 sm:flex-row sm:justify-between">
            <div>
                <ul className="flex gap-2">
                    <li><button><img src={pinterestIcon} alt=''/></button></li>
                    <li><button><img src={instagramIcon} alt=''/></button></li>
                    <li><button><img src={twitterIcon} alt=''/></button></li>
                    <li><button><img src={facebookIcon} alt=''/></button></li>
                </ul>
            </div>
            <div>
                <nav>
                    <ul className="flex flex-col items-center justify-center gap-2 sm:flex-row">
                        <li>Plants</li>
                        <li>About</li>
                        <li>Subscribe</li>
                    </ul>
                </nav>
            </div>
        </footer>
    )
}