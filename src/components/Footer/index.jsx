import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className='bg-gray-800 text-white p-8'>
      <div className='container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'>
        {/* Section 1: Logo & Description */}
        <div>
          <h2 className='text-xl font-bold mb-4'>DarZayed Villa</h2>
          <p className='text-sm'>
            Experience serene getaways with beautiful villas nestled in nature's
            embrace. Discover comfort and luxury in every stay.
          </p>
        </div>

        {/* Section 2: Quick Links */}
        <div>
          <h3 className='text-lg font-bold mb-4'>Quick Links</h3>
          <ul className='space-y-2 text-sm'>
            <li>
              <Link href='#' className='hover:text-gray-400'>
                Home
              </Link>
            </li>
            <li>
              <Link href='#' className='hover:text-gray-400'>
                About Us
              </Link>
            </li>
            <li>
              <Link href='#' className='hover:text-gray-400'>
                Our Villas
              </Link>
            </li>
            <li>
              <Link href='#' className='hover:text-gray-400'>
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className='text-lg font-bold mb-4'>Contact Us</h3>
          <ul className='space-y-2 text-sm'>
            <li>Phone: wa.me/c/6287720440018</li>
            <li>Email: contact@darzayedvilla.com</li>
            <li>Location: Bogor, Indonesia</li>
          </ul>
        </div>

        <div>
          <h3 className='text-lg font-bold mb-4'>Follow Us</h3>
          <div className='flex space-x-4'>
            <a href='#' className='text-blue-500 hover:text-blue-400'>
              <i className='fab fa-facebook-f'></i> Facebook
            </a>
            <a href='#' className='text-blue-400 hover:text-blue-300'>
              <i className='fab fa-twitter'></i> Twitter
            </a>
            <a href='#' className='text-pink-500 hover:text-pink-400'>
              <i className='fab fa-instagram'></i> Instagram
            </a>
          </div>
        </div>
      </div>

      <div className='mt-8 text-center border-t border-gray-700 pt-4'>
        <p className='text-sm'>
          &copy; 2024 DarZayed Villa. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
