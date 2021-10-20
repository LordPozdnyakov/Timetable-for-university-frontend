import React from 'react';
import {DeleteFilled, EditFilled} from '@ant-design/icons';
import IStudentProps from '../../Types/IStudentProps';
import './Student.scss';

const Student = ({student} : { student: IStudentProps }) => {

  const {name, group, birthDate, phone, email, address} = student;

  return (
    <tr>
      <td>{name}</td>
      <td>{group}</td>
      <td>{birthDate}</td>
      <td>{phone}</td>
      <td>{email}</td>
      <td>{address}</td>
      <td className='table-icon edit-icon'><EditFilled/></td>
      <td className='table-icon delete-icon'><DeleteFilled/></td>
    </tr>
  );
};

export default Student;