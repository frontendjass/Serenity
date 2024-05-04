import About from './components/About';
import Articles from './components/Articles';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Subscribe from './components/Subscribe';

function App() {
  return (
    <>
      <main className='overflow-x-hidden'>
        <Hero />
        <Articles />
        <About />
        <Subscribe /> 
      </main>
      <Footer />
    </>
  );
}

export default App;
