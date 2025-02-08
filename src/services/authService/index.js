import axios from 'axios';

export const getAllUsers = (callback) => {
  axios
    .get('http://localhost:3001/api/v1/auth/login')
    .then((res) => {
      callback(res.data.data);
    })
    .catch((err) => {
      console.log('error' + err);
    });
};

export const createUser = async (data) => {
  try {
    const response = await axios.post(
      'http://localhost:3001/api/v1/auth/create-user',
      data
    );
  } catch (error) {
    console.log('error ' + error);
  }
};
