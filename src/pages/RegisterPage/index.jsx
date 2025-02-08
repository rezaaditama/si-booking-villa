import Input from '../../components/Input';
import Button from '../../components/Button';
import Navbar from '../../components/Navbar';
import { Link } from 'react-router';
import Banner from '../../components/Banner';
import { useAuth } from '../../hooks/useAuth';
import { createUser } from '../../services/authService';

const RegisterPage = () => {
  const auth = useAuth();

  const handleRegister = (e) => {
    e.preventDefault();

    if (e.target.password.value !== e.target.verifyPassword.value) {
      alert('Password tidak sesuai');
    } else {
      const data = {
        fullname: e.target.fullname.value,
        username: e.target.username.value,
        email: e.target.email.value,
        password: e.target.password.value,
        role: 'user',
      };
      createUser(data);
      window.location.href = '/login';
    }
  };

  return (
    <Banner className={'min-h-screen flex justify-center items-center'}>
      <Navbar className={'fixed top-0 w-full z-10'} type={'auth'} />
      <div className='relative shadow-2xl w-4/5 p-6 mt-20 rounded-md md:w-1/3 inset-0 bg-white bg-opacity-50'>
        <div className='text-center mb-6'>
          <h1 className='font-bold text-2xl text-gray-800'>Register</h1>
          <p className='text-sm'>Welcome, please enter your detail</p>
        </div>
        <form className='space-y-3' onSubmit={handleRegister}>
          <Input
            label={'Fullname'}
            id={'fullname'}
            type={'text'}
            placeholder={'Enter your name'}
            required={true}
          />
          <Input
            label={'Username'}
            id={'username'}
            type={'text'}
            placeholder={'Enter your username'}
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
          <Button className={'w-full bg-gray-800'} type={'submit'}>
            Submit
          </Button>
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
