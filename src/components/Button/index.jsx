const Button = ({ children, type, className }) => {
  return (
    <>
      <button
        type={type}
        className={`${className} rounded-lg py-2 font-bold text-white`}
      >
        {children}
      </button>
    </>
  );
};

export default Button;
