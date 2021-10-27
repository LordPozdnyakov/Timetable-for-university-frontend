//TODO: add type for students!
export interface IInitialStudentsState {
  students: any[],
  loading: boolean,
  error: string | null
}

export enum StudentsActionTypes {
  GET_STUDENTS = 'GET_STUDENTS',
  GET_STUDENTS_SUCCESS = 'GET_STUDENTS_SUCCESS',
  GET_STUDENTS_ERROR = 'GET_STUDENTS_ERROR'
}

export interface IGetStudentsAction {
  type: StudentsActionTypes.GET_STUDENTS
}

//TODO: add type for payload! (students)
export interface IGetStudentsSuccessAction {
  type: StudentsActionTypes.GET_STUDENTS_SUCCESS,
  payload: any[]
}

export interface IGetStudentsErrorAction {
  type: StudentsActionTypes.GET_STUDENTS_ERROR,
  payload: string
}

export type StudentsAction = IGetStudentsAction | IGetStudentsSuccessAction | IGetStudentsErrorAction;