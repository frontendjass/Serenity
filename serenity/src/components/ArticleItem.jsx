import lavenderImage from '../assets/lavender.jpg';

export default function ArticleItem({ data }) {
  return (
    <button className='flex flex-col items-center shadow-2xl h-[450px] w-72 bg-matcha-50'>
      <img
        src={data.img}
        alt='A lavender plant.'
        className='h-80 w-full object-cover'
      />
      <div className='p-4 flex flex-col items-center'>
        <h3 className='font-raleway text-2xl text-matcha-900'>{data.title}</h3>
        <p className='font-roboto text-sm'>{data.description}</p>
      </div>
    </button>
  );
}
