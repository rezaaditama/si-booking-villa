import Button from '../Button';

const Card = ({ children, className }) => {
  return <div className={`${className} shadow-xl rounded-lg`}>{children}</div>;
};

const Header = ({ image, alt, name, className }) => {
  return (
    <div className='space-y-2'>
      <img
        src={image}
        alt={alt}
        className={`${className} rounded-t-lg w-full object-cover`}
      />
      <h1 className='text-center font-bold text-lg'>{name}</h1>
    </div>
  );
};

const Body = ({ description, prize, onClick, id, type }) => {
  const handleDetail = () => {
    const username = localStorage.getItem('username');
    if (!username) {
      window.location.href = '/login';
    } else {
      window.location.href = `/villa/${id}`;
    }
  };
  return (
    <div className='p-4 space-y-2'>
      <p className='text-justify line-clamp-2 text-sm md:text-base md:line-clamp-3'>
        {description}
      </p>
      <p className='text-center font-bold'>{prize}</p>
      <div className='space-y-2'>
        {type === 'detail' && (
          <Button
            className='w-full bg-yellow-500  hover:bg-yellow-600'
            onClick={onClick}
          >
            Add to Cart
          </Button>
        )}
        {type !== 'detail' && (
          <Button
            className='bg-yellow-500 hover:bg-yellow-600 w-full'
            onClick={() => handleDetail(id)}
          >
            Detail Villa
          </Button>
        )}
      </div>
    </div>
  );
};

Card.Header = Header;
Card.Body = Body;

export default Card;
