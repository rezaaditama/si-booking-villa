import Input from '../../components/Input';
import Button from '../../components/Button';

const LoginPage = () => {
  return (
    <div
      className='min-h-screen w-full flex justify-center items-center relativev bg-cover bg-center'
      style={{ backgroundImage: "url('/assets/img/hero-1.jpeg')" }}
    >
      <div className='absolute inset-0 bg-black bg-opacity-50'></div>
      <div className='relative shadow-2xl w-4/5 p-6 rounded-md md:w-1/3 inset-0 bg-white bg-opacity-50'>
        <div className='text-center mb-6'>
          <h1 className='font-bold text-2xl text-gray-800'>Login</h1>
          <p className='text-sm'>Welcome, please enter your detail</p>
        </div>
        <form className='space-y-5'>
          <Input
            label={'Username'}
            id={'username'}
            type={'input'}
            placeholder={'Enter your username'}
            required={'required'}
          />
          <Input
            label={'Password'}
            id={'password'}
            type={'password'}
            placeholder={'Enter your username'}
            required={'required'}
          />
          <Button className={'w-full py-2 bg-gray-800'}>Submit</Button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
