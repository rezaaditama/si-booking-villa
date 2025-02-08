import axios from 'axios';

export const createCart = async (data) => {
  try {
    const response = await axios.post(
      'http://localhost:3001/api/v1/booking/post-cart',
      data
    );
  } catch (error) {
    console.log('error ' + error);
  }
};

export const getCartByUserId = (id, callback) => {
  axios
    .get(`http://localhost:3001/api/v1/booking/get-cart/${id}`)
    .then((res) => {
      callback(res.data.data);
    })
    .catch((error) => {
      console.log('error ' + error);
    });
};

export const deleteCartByCartId = (id) => {
  axios
    .delete(`http://localhost:3001/api/v1/booking/delete-cart/${id}`)
    .then((res) => {
      console.log('Item berhasil dihapus:', res.data);
    })
    .catch((error) => {
      console.log('error : ', error);
    });
};

export const getAllCart = (callback) => {
  axios
    .get('http://localhost:3001/api/v1/booking/get-all-cart')
    .then((res) => {
      callback(res.data.data);
    })
    .catch((err) => {
      console.log('error : ', err);
    });
};

export const updateCartId = async (id) => {
  try {
    const response = await axios.put(
      `http://localhost:3001/api/v1/booking/update-cart/${id}`
    );
    console.log('Item berhasil diupdate:', response.data);
    return response.data; // Mengembalikan data setelah berhasil diupdate
  } catch (error) {
    console.error('Error saat update:', error); // Menangani error
    throw error; // Melempar error agar bisa ditangani lebih lanjut
  }
};
