import imageUrl from '../assets/About.jpg';

export default function About() {
  return (
    <section className='bg-matcha-100 p-4 w-screen'>
      <div className='sm:flex'>
        <img src={imageUrl} alt="About us image" className='object-cover sm:w-1/2'/>
        <div className='p-4 flex flex-col justify-center items-center'>
          <h2 className='text-3xl'>About</h2>
          <hr className="my-4 border-t-2 border-gray-500 w-1/4"/>
          <p className='leading-7 text-justify'>
            Explore the fascinating world of medicinal plants with our dedicated
            website. Delve into the rich tapestry of botanical remedies that
            have been cherished by cultures worldwide for centuries. From
            traditional folk remedies to modern scientific discoveries, we are
            passionate about uncovering the healing properties and therapeutic
            benefits of plants. Whether you're a seasoned herbalist, a curious
            novice, or simply someone seeking natural alternatives for health
            and wellness, our platform serves as a comprehensive resource to
            empower and inspire your journey into the realm of herbal medicine.
          </p>
        </div>
      </div>
    </section>
  );
}
