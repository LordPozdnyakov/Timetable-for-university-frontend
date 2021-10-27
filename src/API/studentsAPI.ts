import axios from './core';

export const getAllStudents = async () => {
  const response = await axios.get('users');
  return response.data;
}
