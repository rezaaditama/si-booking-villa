import { Link } from 'react-router';

const Navbar = () => {
  return (
    <div className='bg-gray-800 h-16 px-10 flex items-center justify-between'>
      <div className='flex items-center space-x-2'>
        <img src='/public/assets/img/logo-1.png' alt='' className='h-12' />
        <h1 className='font-bold text-white'>DarZayed Villa</h1>
      </div>
      <div className='flex space-x-4 font-bold text-white border rounded-full py-2 px-6'>
        <Link>Home</Link>
        <Link>About</Link>
        <Link>Our Villa</Link>
        <Link>Contact</Link>
      </div>
    </div>
  );
};

export default Navbar;
