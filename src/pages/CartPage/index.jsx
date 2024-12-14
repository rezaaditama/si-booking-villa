import { useEffect, useState } from 'react';
import Navbar from '../../components/Navbar';
import Villas from '../../Data/Villas';
import Button from '../../components/Button';
import { useLoginActivity } from '../../hooks/useLoginActivity';

const CartPage = () => {
  const [cart, setCart] = useState([]);

  const userActivity = useLoginActivity();

  useEffect(() => {
    setCart(JSON.parse(localStorage.getItem('cart')) || []);
  }, []);

  useEffect(() => {
    const handleStorageChange = () => {
      const updatedCart = JSON.parse(localStorage.getItem('cart'));
      setCart(updatedCart || []);
    };

    window.addEventListener('storage', handleStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  return (
    <>
      <Navbar />
      <div className='flex items-center w-full flex-col'>
        <div className='w-4/5 space-y-2'>
          <div className='bg-gray-800 mt-4 p-2'>
            <h1 className='text-center text-xl font-bold text-white'>
              Keranjang
            </h1>
          </div>
          <div className='overflow-x-auto'>
            <table className='w-full'>
              <thead>
                <tr className='bg-gray-300'>
                  <th className='border-b border-gray-400 p-2'></th>
                  <th className='border-b border-gray-400 p-2'>Villa</th>
                  <th className='border-b border-gray-400 p-2'>Price</th>
                  <th className='border-b border-gray-400 p-2'>Qty</th>
                  <th className='border-b border-gray-400 p-2'>Total</th>
                  <th className='border-b border-gray-400 p-2'></th>
                </tr>
              </thead>
              <tbody>
                {cart.map((item) => {
                  const villa = Villas.find((villa) => villa.id === item.id);
                  if (!villa) return null;

                  const priceFormatted = villa.prize.toLocaleString('id-ID', {
                    style: 'currency',
                    currency: 'IDR',
                  });

                  const totalFormatted = (
                    item.qty * villa.prize
                  ).toLocaleString('id-ID', {
                    style: 'currency',
                    currency: 'IDR',
                  });

                  return (
                    <tr className='bg-white text-center' key={item.id}>
                      <td className='border-b border-gray-400 w-1/5 p-2'>
                        <div className='aspect-w-4 aspect-h-3'>
                          <img
                            src={villa.image_url?.[0] || '/default-image.jpg'}
                            alt={villa.name}
                            className='rounded w-full h-full object-cover'
                          />
                        </div>
                      </td>
                      <td className='border-b border-gray-400'>{villa.name}</td>
                      <td className='border-b border-gray-400'>
                        Rp. {priceFormatted}
                      </td>
                      <td className='border-b border-gray-400'>{item.qty}</td>
                      <td className='border-b border-gray-400'>
                        Rp. {totalFormatted}
                      </td>
                      <td className='border-b border-gray-400'>
                        <div className='flex flex-col space-y-2'>
                          <Button className={'bg-yellow-500 px-3'}>
                            Pesan
                          </Button>
                          <Button className={'bg-gray-800 px-3'}>Batal</Button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartPage;
