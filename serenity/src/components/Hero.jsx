import imageUrl from '../assets/Heroo.jpg';
import Navbar from './Navbar';

export default function Hero() {
    const heroStyle = {
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    };

    const rainbowText = "text-6xl font-bold bg-gradient-to-r from-matcha-300 via-matcha-100 to-matcha-300 bg-clip-text text-transparent";

    return (
        <section className="p-4 w-screen h-[100lvh]">
            <div className='flex flex-col justify-center items-center w-full h-full relative' style={heroStyle}>
            <Navbar rainbowText={rainbowText}/>

                <h1><strong className={`${rainbowText} sm:text-7xl drop-shadow-md`}>Serenity</strong></h1>
                <h2 className='text-xl text-matcha-50 drop-shadow-md'>Medicinal plants</h2>
            </div>
            
        </section>
    )
}
