import {StudentsAction, StudentsActionTypes} from '../../Types/IStudentsReducer';
import {Dispatch} from 'redux';
import {instance} from '../../API/core';

export const getStudents = () => {
  return async (dispatch: Dispatch<StudentsAction>) => {
    try {
      dispatch({type: StudentsActionTypes.GET_STUDENTS});
      //TODO: any type, add correct url
      const response: any = await instance.get('students');
      dispatch({
        type: StudentsActionTypes.GET_STUDENTS_SUCCESS,
        payload: response.data
      });
    } catch (e) {
      dispatch({
        type: StudentsActionTypes.GET_STUDENTS_ERROR,
        payload: 'Помилка при завантаженні студентів'
      });
    }
  }
}