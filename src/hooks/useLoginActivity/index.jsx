import { useEffect, useState } from 'react';

export const useLoginActivity = () => {
  const [username, setUsername] = useState('');

  useEffect(() => {
    const getUsername = localStorage.getItem('username');

    if (getUsername) {
      setUsername(getUsername);
    } else {
      window.location.href = '/';
    }
  }, []);

  return username;
};
