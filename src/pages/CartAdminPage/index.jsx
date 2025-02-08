import { useEffect, useState } from 'react';
import Button from '../../components/Button';
import Navbar from '../../components/Navbar';
import { useAdmin } from '../../hooks/useAdmin';
import { getAllCart, updateCartId } from '../../services/cartService';

const CartAdminPage = () => {
  const userActivity = useAdmin();
  const [carts, setCarts] = useState([]);

  useEffect(() => {
    getAllCart((data) => {
      setCarts(data);
    });
  }, []);

  const handleUpdate = async (id) => {
    try {
      // Menunggu hingga updateCartId selesai
      await updateCartId(id);

      // Memperbarui status item yang telah diverifikasi
      setCarts((prevCart) =>
        prevCart.map((item) =>
          item.pemesanan_id === id
            ? { ...item, status: 1 } // Memperbarui status menjadi 1 (Telah Diverifikasi)
            : item
        )
      );
    } catch (error) {
      // Menangani error yang terjadi pada updateCartId
      console.error('Error saat memperbarui cart:', error);
    }
  };

  return (
    <>
      <Navbar />
      <div className='flex items-center w-full flex-col'>
        <div className='w-5/6 space-y-2'>
          <div className='bg-gray-800 mt-4 p-2'>
            <h1 className='text-center text-xl font-bold text-white'>
              Order Villa
            </h1>
          </div>
          <div className='overflow-x-auto'>
            <table className='w-full'>
              <thead>
                <tr className='bg-gray-300'>
                  <th className='border-b border-gray-400 p-2'></th>
                  <th className='border-b border-gray-400 p-2'>Fullname</th>
                  <th className='border-b border-gray-400 p-2'>Villa Name</th>
                  <th className='border-b border-gray-400 p-2'>Date</th>
                  <th className='border-b border-gray-400 p-2'>Total Price</th>
                  <th className='border-b border-gray-400 p-2'>Status</th>
                </tr>
              </thead>
              <tbody>
                {carts.map((item) => {
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
                          />
                        </div>
                      </td>
                      <td className='border-b border-gray-400'>
                        {item.fullname}
                      </td>
                      <td className='border-b border-gray-400'>
                        {item.villa_name}
                      </td>
                      <td className='border-b border-gray-400 text-center'>
                        <div className='flex flex-col'>
                          <p>Check In : {formattedInDate}</p>
                          <p>Check Out : {formattedOutDate}</p>
                        </div>
                      </td>
                      <td className='border-b border-gray-400'>{`Rp. ${Number(
                        item.villa_prize
                      ).toLocaleString('id-ID', {
                        minimumFractionDigits: 0,
                        maximumFractionDigits: 0,
                      })}`}</td>
                      <td className='border-b border-gray-400'>
                        {item.status === 0 ? (
                          <Button
                            className={'bg-yellow-500 px-3 w-full'}
                            onClick={() => handleUpdate(item.pemesanan_id)}
                          >
                            Verifikasi
                          </Button>
                        ) : (
                          <div className='border border-black rounded-xl px-2 font-bold text-center'>
                            <h1>Telah Di Verifikasi</h1>
                          </div>
                        )}
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

export default CartAdminPage;
