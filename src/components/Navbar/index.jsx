import { Link } from 'react-router';
import Button from '../Button';
import { useState, useEffect } from 'react';

const Navbar = ({ className, type }) => {
  const [username, setUsername] = useState(null);

  useEffect(() => {
    const getUsername = localStorage.getItem('username');

    if (getUsername) {
      setUsername(getUsername);
    }
  }, []);

  const handleLogout = (e) => {
    e.preventDefault();
    localStorage.removeItem('username');
    localStorage.removeItem('password');
    window.location.href = '/';
  };
  return (
    <div
      className={`${className} bg-gray-800 h-16 px-10 flex items-center justify-between`}
    >
      <div className='flex items-center space-x-2'>
        <img src='/public/assets/img/logo-1.png' alt='' className='h-12' />
        <h1 className='font-bold text-white'>DarZayed Villa</h1>
      </div>

      <div className='flex space-x-4 font-bold text-white border rounded-full py-2 px-6'>
        <Link to={'/'}>Home</Link>
        {type !== 'auth' && (
          <>
            <Link to={'/cart'}>Pesanan</Link>
            <Link to={'#villas'}>Our Villa</Link>
          </>
        )}
        {username === null && type !== 'auth' && (
          <Link to={'/login'}>Login</Link>
        )}
      </div>

      {username !== null && (
        <div className='font-bold text-white space-x-2 flex items-center'>
          <p>{username}</p>
          <Button
            className={'bg-yellow-500 px-2 py-1'}
            type={'button'}
            onClick={handleLogout}
          >
            Logout
          </Button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
