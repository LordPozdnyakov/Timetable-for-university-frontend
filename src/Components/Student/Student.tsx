import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {DeleteFilled, EditFilled} from '@ant-design/icons';
import './Student.scss';
import SimpleModal from "../../SimpleModal/SimpleModal";
import {message} from 'antd';
import IUser from "../../Types/IUser";

const Student = ({student} : { student: IUser }) => {

  const {UserId, FirstName, LastName, SurName, GroupId, BirthDay, PhoneNumber, Email, Address} = student;
  const fullName = `${LastName} ${FirstName} ${SurName}`;

  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = (): void => {
    setIsModalVisible(true);
  }

  const hideModal = (): void => {
    setIsModalVisible(false);
  }

  const handleYes = (): void => {
    setIsModalVisible(false);
    message.success('Студента успішно видалено');
  }

  const handleNo = (): void => {
    setIsModalVisible(false);
  }

  return (
    <React.Fragment>
      <tr>
        <td>
          <Link to={`/students/${UserId}`}>
            {fullName}
          </Link>
        </td>
        <td>
          <Link to={`/groups/${GroupId}`}>
            {GroupId}
          </Link>
        </td>
        <td>{BirthDay}</td>
        <td>
          <a href={`tel:${PhoneNumber}`}>
            {PhoneNumber}
          </a>
        </td>
        <td>
          <a href={`mailto:${Email}`}>
            {Email}
          </a>
        </td>
        <td>{Address}</td>
        <td className='table-icon edit-icon'>
          <Link to='/students/edit-student'>
            <EditFilled/>
          </Link>
        </td>
        <td className='table-icon delete-icon' onClick={showModal}><DeleteFilled/></td>
      </tr>
      <SimpleModal title='Видалити студента?'
                   content={`Студент ${fullName} буде повністю видалений із системи.
                   Продовжити?`}
                   isModalVisible={isModalVisible}
                   hideModal={hideModal}
                   handleNo={handleNo}
                   handleYes={handleYes}/>
    </React.Fragment>
  );
};

export default Student;