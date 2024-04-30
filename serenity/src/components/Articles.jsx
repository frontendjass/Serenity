import ArticleItem from './ArticleItem';

export default function Articles() {
  return (
    <section className='px-4 w-screen my-28'>
    <div className='flex flex-col items-center justify-center my-5'>
      <h2 className='text-3xl text-center'>Discover our Plant Wisdom</h2>
      <hr className='my-4 border-t-2 border-gray-500 w-1/4' />
    </div>
      <div className='flex justify-center items-center'>
        <div className='w-full grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center gap-8'>
          <ArticleItem />
          <ArticleItem />
          <ArticleItem />
          <ArticleItem />
          <ArticleItem />
          <ArticleItem />
          <ArticleItem />
          <ArticleItem />
        </div>
      </div>
    </section>
  );
}
