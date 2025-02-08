import Hero from '../../components/Hero';
import Navbar from '../../components/Navbar';
import Card from '../../components/Card';
import Footer from '../../components/Footer';
import { useEffect, useState } from 'react';
import { getVillas } from '../../services/villasService';

const LandingPage = () => {
  const [villas, setVillas] = useState([]);

  useEffect(() => {
    getVillas((data) => {
      setVillas(data);
    });
  }, []);

  return (
    <div className='bg-gray-100'>
      <Navbar />
      <Hero />
      <div className='grid grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 space-x-2 mx-2 my-2'>
        {villas.length > 0 &&
          villas.map((product) => (
            <Card key={product.villa_id}>
              <Card.Header
                image={JSON.parse(product.villa_path)}
                alt={product.villa_name}
                name={product.villa_name}
                className={'h-36 md:h-52'}
              />
              <Card.Body
                description={product.villa_facilities}
                prize={`${product.villa_prize.toLocaleString('id-ID', {
                  minimumFractionDigits: 0,
                  maximumFractionDigits: 0,
                })}`}
                id={product.villa_id}
              />
            </Card>
          ))}
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default LandingPage;
