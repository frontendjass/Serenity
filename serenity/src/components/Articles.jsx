import ArticleItem from './ArticleItem';
import dummyData from './dummyData';

export default function Articles() {
  return (
    <section className='w-screen px-4 py-20 bg-matcha-100' id='plants'>
    <div className='flex flex-col items-center justify-center my-5 mb-20'>
      <h2 className='text-6xl text-center font-raleway text-matcha-800'>Discover our Plant Wisdom</h2>
      <p className='text-matcha-700 text-center'>Unlocking the Healing Power of Nature: Delve into the Richness of Medicinal Plants</p>
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
