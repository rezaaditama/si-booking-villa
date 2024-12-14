const HeroSection = () => {
  return (
    <div
      className='relative h-[75vh] w-full bg-cover bg-center'
      style={{ backgroundImage: "url('/assets/img/hero-1.jpeg')" }}
    >
      <div className='absolute inset-0 bg-black bg-opacity-50'></div>

      {/* Content */}
      <div className='relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-5'>
        <h1 className='text-4xl md:text-6xl font-bold'>
          Welcome to DarZayed Villa
        </h1>
        <p className='mt-4 text-lg md:text-xl italic'>
          ~ discover the experience of staying in a villa with beautiful views ~
        </p>
        <div className='mt-8 flex gap-4'>
          <button className='bg-pink-500 hover:bg-pink-600 text-white font-bold py-3 px-6 rounded-full'>
            Explore the Beauty
          </button>
          <button className='bg-white text-gray-800 font-bold py-3 px-6 rounded-full hover:bg-gray-200'>
            Download
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
