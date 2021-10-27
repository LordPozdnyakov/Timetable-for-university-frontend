import {
  IGetStudentsAction,
  IGetStudentsErrorAction,
  IGetStudentsSuccessAction,
  StudentsActionTypes
} from '../../Types/IStudentsReducer';

export const getStudentsAction = (): IGetStudentsAction => {
  return {
    type: StudentsActionTypes.GET_STUDENTS
  };
}

export const getStudentsSuccessAction = (payload: any): IGetStudentsSuccessAction => {
  return {
    type: StudentsActionTypes.GET_STUDENTS_SUCCESS,
    payload,
  };
}

export const getStudentsErrorAction = (payload: string): IGetStudentsErrorAction => {
  return {
    type: StudentsActionTypes.GET_STUDENTS_ERROR,
    payload
  };
}
