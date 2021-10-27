import {StudentsAction} from '../../Types/IStudentsReducer';
import {Dispatch} from 'redux';
import {fetchDataAction, fetchDataErrorAction, fetchStudentsSuccessAction, fetchStudentByIdSuccessAction} from "./actions";
import {getAllStudentsAPI, getStundentByIdAPI} from '../../API/studentsAPI';

export const getStudents = () => {
  return async (dispatch: Dispatch<StudentsAction>) => {
    try {
      dispatch(fetchDataAction());
      //TODO: any type
      const response: any = await getAllStudentsAPI();
      dispatch(fetchStudentsSuccessAction(response));
    } catch (e) {
      dispatch(fetchDataErrorAction(`Помилка при завантаженні: ${(e as Error).message}`));
    }
  }
}

export const getStudentById = (id: number) => {
  return async (dispatch: Dispatch<StudentsAction>) => {
    try {
      dispatch(fetchDataAction());
      //TODO: any type
      const response: any = await getStundentByIdAPI(id);
      console.log(response)
      dispatch(fetchStudentByIdSuccessAction(response));
    } catch (e) {
      dispatch(fetchDataErrorAction(`Помилка при завантаженні: ${(e as Error).message}`));
    }
  }
}