export default interface IUser {
  UserId: number,

  // Login
  Email: string,
  PasswordHash: string,
  RememberMe: boolean,
  Token: string,

  // Privilege
  Privilege: string,

  // Name
  FirstName: string,
  LastName: string
  SurName: string,

  // Parents
  FatherName: string,
  FatherPhone: string,
  MotherName: string,
  MotherPhone: string,

  // Others
  BirthDay: string,
  PhoneNumber: string,
  GroupId: number,
  GroupName: string
  Address: string
}