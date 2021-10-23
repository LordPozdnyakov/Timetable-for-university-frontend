import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {DeleteFilled, EditFilled} from '@ant-design/icons';
import IStudentProps from '../../Types/IStudentProps';
import './Student.scss';
import SimpleModal from "../../SimpleModal/SimpleModal";

const Student = ({student} : { student: IStudentProps }) => {

  const {id, name, group, birthDate, phone, email, address} = student;

  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = (): void => {
    setIsModalVisible(true);
  }

  const hideModal = (): void => {
    setIsModalVisible(false);
  }

  const handleYes = (): void => {
    setIsModalVisible(false);
  }

  const handleNo = (): void => {
    setIsModalVisible(false);
  }

  return (
    <React.Fragment>
      <tr>
        <td>
          <Link to={`/students/${id}`}>
            {name}
          </Link>
        </td>
        <td>
          <Link to={`/groups/${group}`}>
            {group}
          </Link>
        </td>
        <td>{birthDate}</td>
        <td>
          <a href={`tel:${phone}`}>
            {phone}
          </a>
        </td>
        <td>
          <a href={`mailto:${email}`}>
            {email}
          </a>
        </td>
        <td>{address}</td>
        <td className='table-icon edit-icon'>
          <Link to='/students/edit-student'>
            <EditFilled/>
          </Link>
        </td>
        <td className='table-icon delete-icon' onClick={showModal}><DeleteFilled/></td>
      </tr>
      <SimpleModal title='Видалити студента?'
                   content={`Студент ${student.name} буде повністю видалений із системи.
                   Продовжити?`}
                   isModalVisible={isModalVisible}
                   hideModal={hideModal}
                   handleNo={handleNo}
                   handleYes={handleYes}/>
    </React.Fragment>
  );
};

export default Student;