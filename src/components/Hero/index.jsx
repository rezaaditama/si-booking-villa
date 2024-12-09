import Banner from '../Banner';
import Button from '../Button';

const Hero = () => {
  return (
    <Banner className={'h-[75vh]'}>
      <div className='relative flex justify-center items-center h-full text-white z-10 flex-col space-y-4'>
        <h1 className='font-bold text-2xl md:text-6xl'>
          Welcome to DarZayed Villa
        </h1>
        <p className='text-center text-base md:ztext-xl italic'>
          ~ Discover The Experience of Staying In a Villa With Beautiful Views ~
        </p>
        <div>
          <Button
            className={'px-6 bg-yellow-500 hover:bg-yellow-600'}
            type={'button'}
          >
            Get Started!
          </Button>
        </div>
      </div>
    </Banner>
  );
};

export default Hero;
