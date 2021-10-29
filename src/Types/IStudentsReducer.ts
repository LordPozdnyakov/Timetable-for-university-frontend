import IUser from './IUser';

export interface IInitialStudentsState {
	students: IUser[];
	loading: boolean;
	error: string | null;
	selectedStudent: IUser | null;
}

export enum StudentsActionTypes {
	FETCH_DATA = 'FETCH_DATA',
	FETCH_DATA_ERROR = 'FETCH_DATA_ERROR',
	FETCH_STUDENTS_SUCCESS = 'FETCH_STUDENTS_SUCCESS',
	FETCH_STUDENTS_BY_ID_SUCCESS = 'FETCH_STUDENTS_BY_ID_SUCCESS',
}

export interface IFetchDataAction {
	type: StudentsActionTypes.FETCH_DATA;
}

export interface IFetchDataErrorAction {
	type: StudentsActionTypes.FETCH_DATA_ERROR;
	payload: string;
}

export interface IFetchStudentsSuccessAction {
	type: StudentsActionTypes.FETCH_STUDENTS_SUCCESS;
	payload: IUser[];
}

export interface IFetchStudentByIdSuccessAction {
	type: StudentsActionTypes.FETCH_STUDENTS_BY_ID_SUCCESS;
	payload: IUser;
}

export type StudentsAction =
	| IFetchDataAction
	| IFetchDataErrorAction
	| IFetchStudentsSuccessAction
	| IFetchStudentByIdSuccessAction;
