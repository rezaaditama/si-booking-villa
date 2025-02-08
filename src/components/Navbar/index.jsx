import { Link } from 'react-router';
import Button from '../Button';
import { useState, useEffect, useRef } from 'react';

const Navbar = ({ className, type }) => {
  const [username, setUsername] = useState(null);
  const [role, setRole] = useState(null);

  useEffect(() => {
    const getUser = localStorage.getItem('username');

    if (getUser) {
      const user = JSON.parse(getUser);
      setUsername(user.username);
      setRole(user.role);
    }
  }, []);

  const handleLogout = (e) => {
    e.preventDefault();
    localStorage.removeItem('username');
    window.location.href = '/';
  };

  const usernameNav = useRef(null);
  const loginNav = useRef(null);
  const cartNav = useRef(null);

  useEffect(() => {
    if (username) {
      usernameNav.current.style.display = 'flex';
      loginNav.current.style.display = 'none';
      cartNav.current.style.display = 'block';
    } else {
      usernameNav.current.style.display = 'none';
      cartNav.current.style.display = 'none';
    }
  }, [username]);

  useEffect(() => {
    if (type === 'auth') {
      loginNav.current.style.display = 'none';
    }
  }, []);

  return (
    <div
      className={`${className} bg-gray-800 h-16 px-10 flex items-center justify-between`}
    >
      <div className='flex items-center space-x-2'>
        <img src='/public/assets/img/logo-1.png' alt='' className='h-12' />
        <h1 className='font-bold text-white'>DarZayed Villa</h1>
      </div>

      <div className='flex space-x-4 font-bold text-white border rounded-full py-2 px-6'>
        {role === 'admin' ? (
          <>
            <Link to={'/cartAdmin'}>Order Villa</Link>
            <Link to={'/user'} ref={cartNav}>
              All User
            </Link>
            <Link to={'/login'} ref={loginNav}>
              Login
            </Link>
          </>
        ) : (
          <>
            <Link to={'/'}>Home</Link>
            <Link to={'#villas'}>Our Villa</Link>
            <Link to={'/cart'} ref={cartNav}>
              Pesanan
            </Link>
            <Link to={'/login'} ref={loginNav}>
              Login
            </Link>
          </>
        )}
      </div>

      <div
        className='font-bold text-white space-x-2 flex items-center'
        ref={usernameNav}
      >
        <p>{username}</p>
        <Button
          className={'bg-yellow-500 px-2 py-1'}
          type={'button'}
          onClick={handleLogout}
        >
          Logout
        </Button>
      </div>
    </div>
  );
};

export default Navbar;
