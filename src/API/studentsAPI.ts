import axios from './core';

export const getAllStudentsAPI = async () => {
  const response = await axios.get('users');
  return response.data;
}

export const getStundentByIdAPI = async (id: number) => {
  const response = await axios.get(`users/${id}`);
  return response.data;
}