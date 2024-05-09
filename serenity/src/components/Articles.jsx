import ArticleItem from './ArticleItem';
import dummyData from './dummyData';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function Articles() {
  const { scrollY } = useScroll();

  const opacityText = useTransform(
    scrollY,
    [0, 200, 600],
    [0, 0, 1]
  );
  const scaleText = useTransform(
    scrollY,
    [0, 200, 600],
    [0.5, 0.5, 1]
  );

  const opacitySubText = useTransform(
    scrollY,
    [0, 600, 700],
    [0, 0, 1]
  );


  return (
    <section className='w-screen px-4 py-20 bg-matcha-100' id='plants'>
    <div className='flex flex-col items-center justify-center my-5 mb-20'>
      <motion.h2 className='text-6xl text-center font-raleway text-matcha-800' style={{opacity: opacityText, scale: scaleText}}>Discover our Plant Wisdom</motion.h2>
      <motion.p className='text-matcha-700 text-center' style={{opacity: opacitySubText}}>Unlocking the Healing Power of Nature: Delve into the Richness of Medicinal Plants</motion.p>
      <hr className='my-4 border-t-2 border-gray-500 w-1/4' />
    </div>
      <div className='flex justify-center items-center'>
        <div className='w-full grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center gap-8'>
          {dummyData.map((item, index) => (
            <>
              <ArticleItem key={index} data={item}/>
            </>
          ))}
        </div>
      </div>
    </section>
  );
}
