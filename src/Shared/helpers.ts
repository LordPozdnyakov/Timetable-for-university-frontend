import IStudentProps from '../Types/IStudentProps';
import IPathnamesProperties from '../Types/IPathnamesProperties';
import {students} from '../Pages/StudentsPage/StudentsPage';

export function createPathnamesArray(fullPathname: string): string[] {
  return fullPathname.split('/').filter((p) => p);
}

export function checkIfPageIsProfile(fullPathname: string): boolean {
  const pathnames: string[] = createPathnamesArray(fullPathname);
  const containsId: boolean = !isNaN(+pathnames[1]);
  return (fullPathname.includes('students') || fullPathname.includes('teachers'))
    && pathnames.length === 2 && containsId;
}

export function findUserNameById(data: IStudentProps[] | null, id: number): string {
  if (!data) return 'Користувач не знайден';
  const userName: IStudentProps | undefined = data.find((user: IStudentProps) => id === user.id);
  if (!userName) return 'Користувач не знайден';
  return userName.name;
}

export function createBreadcrumpsForUserName (pathnames: string[], path: string): IPathnamesProperties {
  let data: IStudentProps[] | null = null;
  if (pathnames[0] === 'students') {
    data = students;
  } else if (pathnames[0] === 'teachers') {
    //data = teachers;
  } else {
    data = null;
  }
  const title: string = findUserNameById(data, +path);
  return {
    path,
    title,
    icon: null
  };
}