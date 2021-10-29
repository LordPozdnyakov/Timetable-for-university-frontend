import { getUser } from '../Actions/getUser';
import { getProfileAPI } from '../../API/ProfileAPI';
import { GET_USER } from '../../Constant/Constant';
import { IUserType } from '../../Types';

export type InitialStateType = {
	user: object | null;
};

let initialState: InitialStateType = {
	user: null as IUserType | null,
};

export const ProfileReducer = (
	state: InitialStateType = initialState,
	action: any
): InitialStateType => {
	switch (action.type) {
		case GET_USER: {
			return { ...state, user: action.user };
		}
		default:
			return state;
	}
};

export const getUserProfile = () => async (dispatch: any) => {
	dispatch(getUser(await getProfileAPI()));
};
