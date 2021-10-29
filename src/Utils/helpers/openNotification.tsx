import { notification } from 'antd';

type Notification = {
	text: string;
	type: string;
	title: string;
};

// @ts-ignore
export default ({ text, type = 'info', title }: Object<Notification>) =>
	notification.open({
		message: title,
		description: text,
	});
