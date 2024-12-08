const Button = ({ children, type, className, onClick }) => {
  return (
    <>
      <button
        type={type}
        className={`${className} rounded-lg py-2 font-bold text-white`}
        onClick={onClick}
      >
        {children}
      </button>
    </>
  );
};

export default Button;
