import imageUrl from '../assets/2.jpg';

export default function Hero() {
    const heroStyle = {
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    };

    return (
        <section className="p-4 w-screen h-screen">
            <div className='flex flex-col justify-center items-center w-full h-full' style={heroStyle}>
                <h1 className='text-6xl uppercase text-matcha-50 drop-shadow-md'>Serenity</h1>
                <h2 className='text-xl text-matcha-50 drop-shadow-md'>Medicinal plants</h2>
            </div>
            
        </section>
    )
}
