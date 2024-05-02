export default function Subscribe() {
  return (
    <section className='bg-matcha-200 w-screen h-64 flex flex-col items-center justify-center gap-4'>
      <h2 className='text-2xl'>Subscribe to our newsletter</h2>
      <p className='text-center'>
        Stay up-to-date with the latest articles, tips, and news on medicinal
        plants.
      </p>
      <form className='flex flex-col items-center justify-center gap-3'>
        <label htmlFor='email' className='hidden'>
          E-mail:
        </label>
        <input
          type='email'
          id='email'
          name='email'
          placeholder='Your email:'
          required
          className='bg-matcha-100 p-2 border-matcha-50 border-2 sm:w-96'
        />
        <button type='submit' className='border px-2'>
          Submit
        </button>
      </form>
    </section>
  );
}
