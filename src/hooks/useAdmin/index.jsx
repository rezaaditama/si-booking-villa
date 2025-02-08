import { useEffect } from 'react';

export const useAdmin = () => {
  useEffect(() => {
    const getUser = localStorage.getItem('username');

    if (getUser) {
      try {
        const user = JSON.parse(getUser);

        if (user.role !== 'admin') {
          window.location.href = '/login'; // Arahkan ke /login jika bukan admin
        }
      } catch (error) {
        console.error('Error parsing user data:', error);
        window.location.href = '/login'; // Arahkan ke /login jika terjadi error
      }
    } else {
      window.location.href = '/login'; // Arahkan ke /login jika tidak ada data
    }
  }, []);
};
