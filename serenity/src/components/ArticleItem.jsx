import lavenderImage from '../assets/lavender.jpg';

export default function ArticleItem() {
  return (
    <button className='flex flex-col items-center shadow-2xl h-[450px] w-72'>
      <img
        src={lavenderImage}
        alt='A lavender plant.'
        className='h-80 w-full object-cover'
      />
      <div className='p-4 flex flex-col items-center'>
        <h3>Lavender</h3>
        <p>Relieves stress, aids sleep, and soothes skin naturally.</p>
      </div>
    </button>
  );
}
