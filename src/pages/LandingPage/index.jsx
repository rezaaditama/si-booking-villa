import Hero from '../../components/Hero';
import Navbar from '../../components/Navbar';
import Card from '../../components/Card';
import Footer from '../../components/Footer';
import { useState } from 'react';

const Villas = [
  {
    id: 1,
    name: 'Villa Seruni 1',
    location: 'Puncak, Bogor',
    prize: 3500000,
    facilities:
      'Full AC, Free wifi, TV  cable, Heater Water, Refrigerator, Washing machine, Kitchen utensils, Sekurity 24, max capacity 20 persons',
    image_url: ['/public/assets/img/villaSeruni1/villaSeruni1-1.jpeg'],
  },
  {
    id: 2,
    name: 'Villa Melati',
    location: 'Puncak, Bogor',
    prize: 3500000,
    facilities:
      'Swimming pool, Free Wifi, AC, TV LCD, Karaoke, Heater Water, Refrigerator, Microwave, Magic Com, Washing Machine, Kitchen Utensils, Garage, 24 hours, Capacity 20 persons',
    image_url: ['/public/assets/img/villaMelati/villaMelati-1.jpeg'],
  },
  {
    id: 3,
    name: 'Villa Seruni 2',
    location: 'Puncak, Bogor',
    prize: 3500000,
    facilities:
      'Swimming Pool, Free Wifi, AC, LCD TV, Karaoke, Heater Water, Refrigerator, Microwave, Magic com, Kitchen Utensils, Washing Machine, Garage, 24 Hours, Capacity 15 persons',
    image_url: ['/public/assets/img/villaSeruni2/villaSeruni2-1.jpeg'],
  },
  {
    id: 4,
    name: 'Villa Victorian 1',
    location: 'Puncak, Bogor',
    prize: 4000000,
    facilities:
      'Swimming Pool, Free Wifi, AC, LCD TV, Karaoke, Heater Water, Refrigerator, Microwave, Magic com, Kitchen Utensils, Washing Machine, Garage, 24 Hours, Capacity 15 persons',
    image_url: ['/public/assets/img/villaVictorian1/villaVictorian1-1.jpeg'],
  },
  {
    id: 5,
    name: 'Villa Victorian 2',
    location: 'Puncak, Bogor',
    prize: 4000000,
    facilities:
      'Swimming Pool, Free Wifi, AC, LCD TV International Channel, Sound System, Karaoke, Heater Water, Refrigerator, Microwave, Magic com, Kitchen Utensils, BBQ, Washing Machine, Garage, 24 Hours, Capacity 15 persons',
    image_url: ['/public/assets/img/villaVictorian2/villaVictorian2-1.jpeg'],
  },
  {
    id: 6,
    name: 'Villa Nevada',
    location: 'Puncak, Bogor',
    prize: 3800000,
    facilities:
      'Swimming Pool, Free Wifi, AC, LCD TV (international channel), Sound system, Karaoke, Heater water, Refrigerator, Microwave, Magic Com, Dispenser, Kitchen Utensils, BBQ, Washing Machine, Garage, 24 hours, Capacity 20 person',
    image_url: ['/public/assets/img/villaNevada/villaNevada-1.jpeg'],
  },
  {
    id: 7,
    name: 'Villa Vinctorian 3',
    location: 'Puncak, Bogor',
    prize: 4500000,
    facilities:
      'Swimming Pool, Free Wifi, AC, LCD TV (International Channel), Sound System, Karaoke, Heater Water, Refrigerator, Microwave, Magic Com, Dispenser, Kitchen Utensils, Washing Machine, BBQ, Garage, 24 hours, Capacity 20 persons.',
    image_url: ['/public/assets/img/villaVictorian3/villaVictorian3-1.jpeg'],
  },
  {
    id: 8,
    name: 'Villa Vinctorian 4',
    location: 'Puncak, Bogor',
    prize: 4500000,
    facilities:
      'Swimming Pool, Free Wifi, AC, LCD TV with International Channel, Sound System, Karaoke, Heater Water, Refrigerator, Microwave, Magic Com, Dispenser, Kitchen Utensils, Washing Machine, BBQ, Garage, 24-hour service, Capacity for 20 persons.',
    image_url: ['/public/assets/img/villaVictorian4/villaVictorian4-1.jpeg'],
  },
  {
    id: 9,
    name: 'Villa Vinctorian 5',
    location: 'Puncak, Bogor',
    prize: 5000000,
    facilities:
      'Swimming Pool, Free Wifi, AC, LCD TV with International Channel, Sound System, Karaoke, Heater Water, Refrigerator, Microwave, Dispenser, Magic Com, Kitchen Utensils, BBQ Equipment, Washing Machine, Safety Box, Garage, 24-Hour Service, Capacity for 20 Persons.',
    image_url: ['/public/assets/img/villaVictorian5/villaVictorian5-1.jpeg'],
  },
];

const LandingPage = () => {
  const [cart, setCart] = useState([
    {
      id: 9,
      qty: 1,
    },
  ]);

  const handlePesan = (id) => {
    if (cart.find((item) => item.id == id)) {
      setCart(
        cart.map((item) =>
          item.id === id ? { ...item, qty: item.qty + 1 } : item
        )
      );
    } else {
      setCart([...cart, { id, qty: 1 }]);
    }
  };

  return (
    <div className='bg-gray-100'>
      <Navbar />
      <Hero />
      <div className='grid grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 space-x-2 mx-2 my-2'>
        {Villas.map((product) => (
          <Card key={product.id} className={''}>
            <Card.Header
              image={product.image_url}
              alt={product.name}
              name={product.name}
            />
            <Card.Body
              description={product.facilities}
              prize={`Rp ${product.prize.toLocaleString('id-ID', {
                styles: 'currency',
                currency: 'IDR',
              })}`}
              id={product.id}
              onClick={handlePesan}
            />
          </Card>
        ))}
      </div>
      <div className='w-1/3 fixed top-0 right-0'>
        <h1 className='text-center bg-red-600 font-bold'>Cart</h1>
        <table>
          <thead>
            <tr>
              <th>Product</th>
              <th>Prize</th>
              <th>Qty</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item) => {
              const villa = Villas.find((villa) => villa.id == item.id);
              return (
                <tr>
                  <td>{villa.name}</td>
                  <td>
                    Rp.{' '}
                    {villa.prize.toLocaleString('id-ID', {
                      styles: 'currency',
                      currency: 'IDR',
                    })}
                  </td>
                  <td>{item.qty}</td>
                  <td>
                    Rp.{' '}
                    {(item.qty * villa.prize).toLocaleString('id-ID', {
                      styles: 'currency',
                      currency: 'IDR',
                    })}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default LandingPage;
