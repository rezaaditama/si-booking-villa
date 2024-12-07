import Hero from '../../components/Hero';
import Navbar from '../../components/Navbar';

const LandingPage = () => {
  return (
    <div className='w-full bg-gray-100 min-h-screen'>
      <Navbar />
      <Hero />
    </div>
  );
};

export default LandingPage;
