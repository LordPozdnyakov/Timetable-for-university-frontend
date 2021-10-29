import instance from './core';

export const getProfileAPI = () => {
	//@ts-ignore
	return instance.get('').then((response) => response.data.user);
};

export const setUserLoginAPI = (values: any) => {
	return instance.post('login', values).then((response) => response);
};
