import ArticleItem from './ArticleItem';

export default function Articles() {
  return (
    <section className='p-4 w-screen my-32'>
      <h2 className='text-2xl text-center mb-12'>Latest Articles</h2>
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
