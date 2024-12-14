import Input from '../../components/Input';
import Button from '../../components/Button';
import Navbar from '../../components/Navbar';
import { Link } from 'react-router';
import Banner from '../../components/Banner';
import { useAuth } from '../../hooks/useAuth';

const RegisterPage = () => {
  const userActivity = useAuth();

  return (
    <Banner className={'min-h-screen flex justify-center items-center'}>
      <Navbar className={'fixed top-0 w-full z-10'} type={'auth'} />
      <div className='relative shadow-2xl w-4/5 p-6 mt-20 rounded-md md:w-1/3 inset-0 bg-white bg-opacity-50'>
        <div className='text-center mb-6'>
          <h1 className='font-bold text-2xl text-gray-800'>Register</h1>
          <p className='text-sm'>Welcome, please enter your detail</p>
        </div>
        <form className='space-y-3'>
          <Input
            label={'Fullname'}
            id={'fullname'}
            type={'text'}
            placeholder={'Enter your name'}
            required={true}
          />
          <Input
            label={'Email'}
            id={'email'}
            type={'email'}
            placeholder={'Enter your email'}
            required={true}
          />
          <Input
            label={'Password'}
            id={'password'}
            type={'password'}
            placeholder={'Enter your password'}
            required={true}
          />
          <Input
            label={'Verify Password'}
            id={'verifyPassword'}
            type={'password'}
            placeholder={'Verify your password'}
            required={true}
          />
          <Button className={'w-full bg-gray-800'}>Submit</Button>
          <p className='text-center'>
            Have an account?{' '}
            <Link
              to={'/login'}
              className='font-bold text-gray-800 hover:text-gray-700'
            >
              Login
            </Link>
          </p>
        </form>
      </div>
    </Banner>
  );
};

export default RegisterPage;
