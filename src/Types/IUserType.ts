type fatherType = {
	name: string;
	phone: number;
};

type motherType = {
	name: string;
	phone: number;
};

type parentsType = {
	father: fatherType;
	mother: motherType;
};

export default interface IUserType {
	name: string;
	date: string;
	phone: number;
	email: string;
	address: string;
	group: string;
	parents: parentsType;
}
