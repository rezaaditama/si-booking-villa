import axios from 'axios';

export const getVillas = (callback) => {
  axios
    .get('http://localhost:3001/api/v1/villa/get-all-villa')
    .then((res) => {
      callback(res.data.data);
    })
    .catch((err) => {
      console.log('error' + err);
    });
};

export const getVillasById = (id, callback) => {
  axios
    .get(`http://localhost:3001/api/v1/villa/get-villa/${id}`)
    .then((res) => {
      callback(res.data.data);
    })
    .catch((err) => {
      console.log('error' + err);
    });
};
