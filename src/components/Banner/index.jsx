const Banner = ({ children, className }) => {
  return (
    <div
      className={`${className} relative w-full bg-cover bg-center`}
      style={{ backgroundImage: "url('/assets/img/hero-1.jpeg')" }}
    >
      <div className='absolute inset-0 bg-black bg-opacity-80'></div>
      {children}
    </div>
  );
};

export default Banner;
