import {StudentsAction} from '../../Types/IStudentsReducer';
import {Dispatch} from 'redux';
import {getStudentsAction, getStudentsErrorAction, getStudentsSuccessAction} from "./actions";
import {getAllStudents} from '../../API/studentsAPI';

export const getStudents = () => {
  return async (dispatch: Dispatch<StudentsAction>) => {
    try {
      dispatch(getStudentsAction());
      //TODO: any type, add correct url
      const response = await getAllStudents();
      dispatch(getStudentsSuccessAction(response));
    } catch (e) {
      dispatch(getStudentsErrorAction(`Помилка при завантаженні: ${(e as Error).message}`));
    }
  }
}