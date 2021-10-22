import React from 'react';
import {Link} from 'react-router-dom';
import {DeleteFilled, EditFilled} from '@ant-design/icons';
import IStudentProps from '../../Types/IStudentProps';
import './Student.scss';

const Student = ({student} : { student: IStudentProps }) => {

  const {id, name, group, birthDate, phone, email, address} = student;

  return (
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
      <td className='table-icon edit-icon'><EditFilled/></td>
      <td className='table-icon delete-icon'><DeleteFilled/></td>
    </tr>
  );
};

export default Student;