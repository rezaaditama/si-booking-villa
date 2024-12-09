import Input from '../../components/Input';
import Button from '../../components/Button';
import Navbar from '../../components/Navbar';
import { Link } from 'react-router';
import Banner from '../../components/Banner';

const LoginPage = () => {
  const handleLogin = (e) => {
    e.preventDefault();
    localStorage.setItem('username', e.target.username.value);
    localStorage.setItem('password', e.target.password.value);
    window.location.href = '/';
  };
  return (
    <Banner className={'min-h-screen flex justify-center items-center'}>
      <Navbar className={'fixed top-0 w-full'} type={'auth'} />
      <div className='relative shadow-2xl w-4/5 p-6 rounded-md md:w-1/3 inset-0 bg-white bg-opacity-50 mt-6'>
        <div className='text-center mb-6'>
          <h1 className='font-bold text-2xl text-gray-800'>Login</h1>
          <p className='text-sm'>Welcome, please enter your detail</p>
        </div>
        <form className='space-y-5' onSubmit={handleLogin}>
          <Input
            label={'Username'}
            id={'username'}
            type={'input'}
            placeholder={'Enter your username'}
            required={true}
          />
          <Input
            label={'Password'}
            id={'password'}
            type={'password'}
            placeholder={'Enter your password'}
            required={true}
          />
          <Button className={'w-full py-2 bg-gray-800'} type={'submit'}>
            Submit
          </Button>
          <p className='text-center'>
            Don't have an account?{' '}
            <Link
              to={'/register'}
              className='font-bold text-gray-800 hover:text-gray-700'
            >
              Register
            </Link>
          </p>
        </form>
      </div>
    </Banner>
  );
};

export default LoginPage;
