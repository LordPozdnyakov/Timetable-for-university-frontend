import { SET_DATA } from '../../Constant/Constant';

export type setData = {
	type: typeof SET_DATA;
	data: object;
};

export const setData = (data: object): setData => ({ type: SET_DATA, data });
