import { useEffect, useState } from 'react';
import Navbar from '../../components/Navbar';
import Button from '../../components/Button';
import { useLoginActivity } from '../../hooks/useLoginActivity';
import {
  deleteCartByCartId,
  getCartByUserId,
} from '../../services/cartService';

const CartPage = () => {
  const [cart, setCart] = useState([]);

  const userActivity = useLoginActivity();

  useEffect(() => {
    const id = localStorage.getItem('id');
    getCartByUserId(id, (data) => {
      setCart(data);
    });
  }, []);

  const handleDelete = (id) => {
    console.log(id);
    deleteCartByCartId(id);
    setCart((prevCart) => prevCart.filter((item) => item.pemesanan_id !== id));
  };

  return (
    <>
      <Navbar />
      <div className='flex items-center w-full flex-col'>
        <div className='w-5/6 space-y-2'>
          <div className='bg-gray-800 mt-4 p-2'>
            <h1 className='text-center text-xl font-bold text-white'>
              Booking
            </h1>
          </div>
          <div className='overflow-x-auto'>
            <table className='w-full'>
              <thead>
                <tr className='bg-gray-300'>
                  <th className='border-b border-gray-400 p-2'></th>
                  <th className='border-b border-gray-400 p-2'>Villa</th>
                  <th className='border-b border-gray-400 p-2'>Date</th>
                  <th className='border-b border-gray-400 p-2'>Price</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {cart.map((item) => {
                  const checkInDate = new Date(item.check_in);
                  const formattedInDate =
                    checkInDate.toLocaleDateString('id-ID');
                  const checkOutDate = new Date(item.check_out);
                  const formattedOutDate =
                    checkOutDate.toLocaleDateString('id-ID');
                  return (
                    <tr
                      className='bg-white text-center'
                      key={item.pemesanan_id}
                    >
                      <td className='border-b border-gray-400 w-1/5 p-2'>
                        <div className='aspect-w-4 aspect-h-3'>
                          <img
                            src={JSON.parse(item.villa_path)}
                            alt={item.name}
                            className='rounded w-full h-full object-cover'
                          />
                        </div>
                      </td>
                      <td className='border-b border-gray-400'>
                        {item.villa_name}
                      </td>
                      <td className='text-center border-b border-gray-400'>
                        <div className='flex flex-col'>
                          <p>Check In : {formattedInDate}</p>
                          <p>Check Out : {formattedOutDate}</p>
                        </div>
                      </td>
                      <td className='border-b border-gray-400 w-1/5'>
                        {`Rp. ${Number(item.villa_prize).toLocaleString(
                          'id-ID',
                          {
                            minimumFractionDigits: 0,
                            maximumFractionDigits: 0,
                          }
                        )}`}
                      </td>
                      <td className='border-b border-gray-400 space-y-2 w-1/6'>
                        {item.status === 0 ? (
                          <>
                            <div className='border border-black rounded-xl p-2 font-bold'>
                              <h1>Status : Waiting</h1>
                            </div>
                            <Button
                              className={'bg-yellow-500 px-3 w-full'}
                              onClick={() => handleDelete(item.pemesanan_id)}
                            >
                              Cancel
                            </Button>
                          </>
                        ) : (
                          <>
                            <div className='border border-black rounded-xl p-2 font-bold'>
                              <h1>Status : Successfull</h1>
                            </div>
                          </>
                        )}
                        <Button className={'bg-slate-800 px-3 w-full'}>
                          Detail Villa
                        </Button>
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
