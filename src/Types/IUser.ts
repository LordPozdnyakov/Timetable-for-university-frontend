export default interface IUser {
  id: number;

  // Login
  email: string;
  passwordHash: string;
  rememberMe: boolean;
  token: string;

  // Privilege
  privilege: string;

  // Name
  firstName: string;
  lastName: string;
  patronymic: string;

  // Parents
  fatherName: string;
  fatherPhone: string;
  motherName: string;
  motherPhone: string;

  // Others
  birthDay: string;
  phoneNumber: string;
  address: string;
  groupName: string;
}
