import Button from '../Button';

const Hero = () => {
  return (
    <div
      className='relative h-[75vh] w-full bg-cover bg-center '
      style={{ backgroundImage: "url('/assets/img/hero-1.jpeg')" }}
    >
      <div className='absolute inset-0 bg-black bg-opacity-50'></div>
      <div className='relative flex justify-center items-center h-full text-white z-10 flex-col space-y-4'>
        <h1 className='font-bold text-2xl md:text-6xl'>
          Welcome to DarZayed Villa
        </h1>
        <p className='text-center text-base md:text-xl italic'>
          ~ Discover The Experience of Staying In a Villa With Beautiful Views ~
        </p>
        <div className=''>
          <Button className={'px-6'} type={'button'}>
            Get Started!
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
