const Button = ({ children, type, className }) => {
  return (
    <>
      <button
        type={type}
        className={`${className} bg-yellow-500 rounded-lg py-2 font-bold hover:bg-yellow-600`}
      >
        {children}
      </button>
    </>
  );
};

export default Button;
