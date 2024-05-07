export default function Subscribe() {
  return (
    <section className='bg-matcha-100 w-screen h-64 flex flex-col items-center justify-center gap-4 px-2'>
      <h2 className='text-2xl font-raleway font-light' id='subscribe'>
        Subscribe to our newsletter
      </h2>
      <p className='text-center font-roboto'>
        Stay up-to-date with the latest articles, tips, and news on medicinal
        plants.
      </p>
      <form
        name='contact v1'
        method='post'
        data-netlify='true'
        data-netlify-honeypot='bot-field'
        onSubmit='submit'
        className='flex flex-col items-center justify-center gap-3'
      >
        <input type='hidden' name='form-name' value='contact v1' />

        <div hidden>
          <input name="bot-field" />
        </div>

        <label htmlFor='name' className='hidden'>
          Your name:
        </label>
        <input
          type='text'
          id='name'
          name='name'
          placeholder='Enter your name:'
          required
          className='bg-matcha-100 p-2 border-matcha-50 border-2 sm:w-96 w-full'
        />
        <label htmlFor='email' className='hidden'>
          E-mail:
        </label>
        <input
          type='email'
          id='email'
          name='email'
          placeholder='Enter your email:'
          required
          className='bg-matcha-100 p-2 border-matcha-50 border-2 sm:w-96 w-full'
        />
        <button type='submit' className='border text-matcha-800 bg-matcha-50 px-4 border-matcha-500 uppercase hover:bg-matcha-300 hover:text-matcha-50'>
          Submit
        </button>
      </form>
    </section>
  );
}
