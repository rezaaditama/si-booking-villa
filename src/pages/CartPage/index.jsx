import Navbar from '../../components/Navbar';

const CartPage = () => {
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
          <table className='w-full'>
            <thead>
              <tr className='bg-gray-300'>
                <th className='border-b border-gray-400 p-2'></th>
                <th className='border-b border-gray-400 p-2'>Villa</th>
                <th className='border-b border-gray-400 p-2'>Prize</th>
                <th className='border-b border-gray-400 p-2'>Qty</th>
                <th className='border-b border-gray-400 p-2'>Total</th>
              </tr>
            </thead>
            <tbody>
              <tr className='bg-white text-center'>
                <td className='border-b border-gray-400 flex justify-center'>
                  <div className='w-56 my-2'>
                    <img
                      src='/public/assets/img/villaNevada/villaNevada-1.jpeg'
                      alt=''
                      className='max-w-full max-h-full object-cover rounded'
                    />
                  </div>
                </td>
                <td className='border-b border-gray-400'>Villa Indah</td>
                <td className='border-b border-gray-400'>Rp 3,500,000</td>
                <td className='border-b border-gray-400'>1</td>
                <td className='border-b border-gray-400'>Rp 3,500,000</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default CartPage;
