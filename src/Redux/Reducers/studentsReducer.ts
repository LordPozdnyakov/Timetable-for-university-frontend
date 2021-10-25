import {IInitialStudentsState, StudentsAction, StudentsActionTypes} from "../../Types/IStudentsReducer";

const initialStudentsState: IInitialStudentsState = {
  students: [],
  loading: false,
  error: null
}

export const studentsReducer = (state = initialStudentsState, action: StudentsAction): IInitialStudentsState => {
  switch (action.type) {
    case StudentsActionTypes.GET_STUDENTS:
      return {
        students: [],
        loading: true,
        error: null
      }
    case StudentsActionTypes.GET_STUDENTS_SUCCESS:
      return {
        students: action.payload,
        loading: false,
        error: null
      }
    case StudentsActionTypes.GET_STUDENTS_ERROR:
      return {
        students: [],
        loading: false,
        error: action.payload
      }
    default:
      return state;
  }
}