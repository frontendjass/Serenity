import { motion, useScroll, useTransform } from 'framer-motion';
import imageUrl from '../assets/Heroo.jpg';
import Navbar from './Navbar';

export default function Hero() {
  const { scrollY } = useScroll();

  const yText = useTransform(
    scrollY,
    [0, 200],
    [0, 100]
  )
  const opacityText = useTransform(
    scrollY,
    [0, 200, 300],
    [1, 0.5, 0]
  );
  const ySubText = useTransform(
    scrollY,
    [0, 200],
    [0, 150]
  )
  const opacitySubText = useTransform(
    scrollY,
    [0, 200, 300],
    [1, 0.5, 0]
  );

  const scaleText = useTransform(scrollY, [0, 300], [1, 1.5])

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
    background: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))',
    zIndex: -1,
  };

  const rainbowText =
    'text-6xl font-bold bg-gradient-to-r from-matcha-300 via-matcha-100 to-matcha-300 bg-clip-text text-transparent font-raleway font-light';

  return (
    <section className='p-4 h-screen bg-matcha-50' id='home'>
      <div
        className='flex flex-col justify-center items-center w-full h-full relative z-0'
        style={heroStyle}
      >
        <div style={gradientOverlayStyle}></div>
        <Navbar />

        <motion.h1 style={{ opacity: opacityText, y: yText, scale: scaleText }}>
          <strong className={`${rainbowText} sm:text-9xl drop-shadow-md`}>
            Serenity
          </strong>
        </motion.h1>
        <motion.h2 className='text-xl text-matcha-50 drop-shadow-md font-roboto' style={{opacity: opacitySubText, y: ySubText}}>
          Medicinal plants
        </motion.h2>
      </div>
    </section>
  );
}
