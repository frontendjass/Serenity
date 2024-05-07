import imageUrl from '../assets/Heroo.jpg';
import Navbar from './Navbar';

export default function Hero() {
    const heroStyle = {
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    };
    const gradientOverlayStyle = {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'linear-gradient(rgba(24, 31, 20, 0.3), rgba(24, 31, 20, 0.1))',
        zIndex: 0,
    };

    const rainbowText = "text-6xl font-bold bg-gradient-to-r from-matcha-300 via-matcha-100 to-matcha-300 bg-clip-text text-transparent font-raleway font-light";

    return (
        <section className="p-4 h-screen bg-matcha-50" id='home'>
            <div className='flex flex-col justify-center items-center w-full h-full relative z-0' style={heroStyle}>
            <div style={gradientOverlayStyle}></div>
            <Navbar/>

                <h1><strong className={`${rainbowText} sm:text-9xl drop-shadow-md`}>Serenity</strong></h1>
                <h2 className='text-xl text-matcha-50 drop-shadow-md font-roboto'>Medicinal plants</h2>
            </div>
            
        </section>
    )
}
