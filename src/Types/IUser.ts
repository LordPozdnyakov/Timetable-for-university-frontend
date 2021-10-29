export default interface IUser {
	userId: number;

	// Login
	email: string;
	password: string;
	rememberMe: boolean;
	token: string;

	// Privilege
	privilege: string;

	// Name
	firstName: string;
	lastName: string;
	surName: string;

	// Parents
	fatherName: string;
	fatherPhone: string;
	motherName: string;
	motherPhone: string;

	// Others
	birthDay: string;
	phoneNumber: string;
	groupId: number;
}
