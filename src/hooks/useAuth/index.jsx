import { useEffect, useState } from 'react';

export const useAuth = () => {
  const [username, setUsername] = useState('');

  useEffect(() => {
    const getUsername = localStorage.getItem('username');

    if (getUsername) {
      window.location.href = '/';
    }
  }, []);

  return username;
};
