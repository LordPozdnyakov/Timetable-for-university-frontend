import {IInitialStudentsState, StudentsAction, StudentsActionTypes} from "../../Types/IStudentsReducer";

const initialStudentsState: IInitialStudentsState = {
  students: [],
  loading: false,
  error: null,
  selectedStudent: null
}

export const studentsReducer = (state = initialStudentsState, action: StudentsAction): IInitialStudentsState => {
  switch (action.type) {
    case StudentsActionTypes.FETCH_DATA:
      return {
        ...state,
        loading: true
      }
    case StudentsActionTypes.FETCH_DATA_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload
      }
    case StudentsActionTypes.FETCH_STUDENTS_SUCCESS:
      return {
        ...state,
        loading: false,
        students: action.payload

      }
    case StudentsActionTypes.FETCH_STUDENTS_BY_ID_SUCCESS:
      return {
        ...state,
        loading: false,
        selectedStudent: action.payload
      }
    default:
      return state;
  }
}