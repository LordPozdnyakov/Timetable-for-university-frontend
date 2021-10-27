import {instance} from './core';

export const getAllStudents = async () => {
  const response = await instance.get('users');
  return response.data;
}
