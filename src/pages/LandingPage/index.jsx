import Hero from '../../components/Hero';
import Navbar from '../../components/Navbar';
import Card from '../../components/Card';
import Footer from '../../components/Footer';
import { useEffect, useRef, useState } from 'react';
import Villas from '../../data/Villas';

const LandingPage = () => {
  const [cart, setCart] = useState([]);
  const [totalPrize, setTotalPrize] = useState(0);

  useEffect(() => {
    if (cart.length > 0) {
      const sumPrize = cart.reduce((acc, item) => {
        const product = Villas.find((product) => product.id === item.id);
        return acc + product.prize * item.qty;
      }, 0);
      setTotalPrize(sumPrize);
      localStorage.setItem('cart', JSON.stringify(cart));
    }
  }, [cart]);

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

  useEffect(() => {
    setCart(JSON.parse(localStorage.getItem('cart')) || []);
  }, []);

  // const totalPrizeRef = useRef(null);

  // useEffect(() => {
  //   if (cart.length > 0) {
  //     totalPrizeRef.current.style.display = 'block';
  //   } else {
  //     totalPrizeRef.current.style.display = 'none';
  //   }
  // }, [cart]);

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
      {/* <div className='w-1/3 fixed top-0 right-0'>
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
                <tr key={item.id}>
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
          <tfoot ref={totalPrizeRef}>
            <tr>
              <td>Total Prize</td>
              <td className='text-right col-span-3 bg-red-900'>
                Rp.{' '}
                {totalPrize.toLocaleString('id-ID', {
                  styles: 'currency',
                  currency: 'IDR',
                })}
              </td>
            </tr>
          </tfoot>
        </table>
      </div> */}
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default LandingPage;
