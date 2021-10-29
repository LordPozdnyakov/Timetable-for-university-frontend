import {
	IFetchDataAction,
	IFetchDataErrorAction,
	IFetchStudentsSuccessAction,
	IFetchStudentByIdSuccessAction,
	StudentsActionTypes,
} from '../../Types/IStudentsReducer';
import IUser from '../../Types/IUser';

export const fetchDataAction = (): IFetchDataAction => {
	return {
		type: StudentsActionTypes.FETCH_DATA,
	};
};

export const fetchDataErrorAction = (
	payload: string
): IFetchDataErrorAction => {
	return {
		type: StudentsActionTypes.FETCH_DATA_ERROR,
		payload,
	};
};

export const fetchStudentsSuccessAction = (
	payload: IUser[]
): IFetchStudentsSuccessAction => {
	return {
		type: StudentsActionTypes.FETCH_STUDENTS_SUCCESS,
		payload,
	};
};

export const fetchStudentByIdSuccessAction = (
	payload: IUser
): IFetchStudentByIdSuccessAction => {
	return {
		type: StudentsActionTypes.FETCH_STUDENTS_BY_ID_SUCCESS,
		payload,
	};
};
