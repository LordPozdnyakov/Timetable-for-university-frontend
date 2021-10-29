import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { DeleteFilled, EditFilled } from '@ant-design/icons';
import './Student.scss';
import SimpleModal from '../../SimpleModal/SimpleModal';
import { message } from 'antd';
import IUser from '../../Types/IUser';

const Student = ({ student }: { student: IUser }) => {
	const {
		userId,
		firstName,
		lastName,
		surName,
		groupId,
		birthDay,
		phoneNumber,
		email,
	} = student;
	const fullName = `${lastName} ${firstName} ${surName}`;

	const [isModalVisible, setIsModalVisible] = useState(false);

	const showModal = (): void => {
		setIsModalVisible(true);
	};

	const hideModal = (): void => {
		setIsModalVisible(false);
	};

	const handleYes = (): void => {
		setIsModalVisible(false);
		message.success('Студента успішно видалено');
	};

	const handleNo = (): void => {
		setIsModalVisible(false);
	};

	return (
		<React.Fragment>
			<tr>
				<td>
					<Link to={`/students/${userId}`}>{fullName}</Link>
				</td>
				<td>
					<Link to={`/groups/${groupId}`}>{groupId}</Link>
				</td>
				<td>{birthDay}</td>
				<td>
					<a href={`tel:${phoneNumber}`}>{phoneNumber}</a>
				</td>
				<td>
					<a href={`mailto:${email}`}>{email}</a>
				</td>
				<td>Address</td>
				<td className="table-icon edit-icon">
					<Link to="/students/edit-student">
						<EditFilled />
					</Link>
				</td>
				<td className="table-icon delete-icon" onClick={showModal}>
					<DeleteFilled />
				</td>
			</tr>
			<SimpleModal
				title="Видалити студента?"
				content={`Студент ${fullName} буде повністю видалений із системи.
                   Продовжити?`}
				isModalVisible={isModalVisible}
				hideModal={hideModal}
				handleNo={handleNo}
				handleYes={handleYes}
			/>
		</React.Fragment>
	);
};

export default Student;
