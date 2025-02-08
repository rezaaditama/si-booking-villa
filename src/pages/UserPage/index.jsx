import { useEffect, useState } from 'react';
import Navbar from '../../components/Navbar';
import { useAdmin } from '../../hooks/useAdmin';
import { getAllUsers } from '../../services/authService';

const UserPage = () => {
  const [users, setUsers] = useState([]);

  const userActivity = useAdmin();

  useEffect(() => {
    getAllUsers((data) => {
      setUsers(data);
    });
  }, []);
  return (
    <>
      <Navbar />
      <div className='flex items-center w-full flex-col'>
        <div className='w-4/5 space-y-2'>
          <div className='bg-gray-800 mt-4 p-2'>
            <h1 className='text-center text-xl font-bold text-white'>
              All Users
            </h1>
          </div>
          <div className='overflow-x-auto'>
            <table className='w-full'>
              <thead>
                <tr className='bg-gray-300'>
                  <th className='border-b border-gray-400 p-2'>Fullname</th>
                  <th className='border-b border-gray-400 p-2'>Username</th>
                  <th className='border-b border-gray-400 p-2'>Email</th>
                  <th className='border-b border-gray-400 p-2'>Role</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => {
                  return (
                    <tr key={user.user_id}>
                      <td className='border-b border-gray-400'>
                        {user.fullname}
                      </td>
                      <td className='border-b border-gray-400 text-center'>
                        {user.username}
                      </td>
                      <td className='border-b border-gray-400 text-center'>
                        {user.email}
                      </td>
                      <td className='border-b border-gray-400 text-center'>
                        {user.role}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserPage;
