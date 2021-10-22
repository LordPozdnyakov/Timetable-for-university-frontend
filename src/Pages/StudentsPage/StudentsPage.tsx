import React from 'react';
import {Link} from 'react-router-dom';
import Student from '../../Components/Student/Student';
import IStudentProps from "../../Types/IStudentProps";
import {Button} from 'antd';
import {PlusOutlined} from '@ant-design/icons';
import './StudentsPage.scss';

export const students: IStudentProps[] = [
  {
    id: Math.ceil(Math.random() *  Date.now()),
    name: 'Васильчук Світлана',
    group: '415',
    birthDate: '25.06.2002',
    phone: '30951255489',
    email: 'vasilchuck24@gmail.com',
    address: 'Херсон, просп. Ушакова, 89'
  },
  {
    id: Math.ceil(Math.random() *  Date.now()),
    name: 'Васиse тлана',
    group: '41eeee5',
    birthDate: '25.06.sss2002',
    phone: '+30951255489',
    email: 'vasilcdddddddddhuck24@gmail.com',
    address: 'Херсон, 89'
  },
  {
    id: Math.ceil(Math.random() *  Date.now()),
    name: 'Васильefsfesfesчук Світлана',
    group: '4',
    birthDate: '25..2002',
    phone: '+309sefe51255489',
    email: 'vasilchucom',
    address: 'Херсоssssssssssssssssssssssssssssssssва, 89'
  }
]

const StudentsPage = () => {
  return (
    <div className='students'>
      <div className='students__header'>
        <h5 className='page-title students__title'>Всі студенти</h5>
        <Link to='/students/add-student'>
          <Button className='add-btn' type='primary' shape='circle' icon={<PlusOutlined className='add-btn__inner'/>}/>
        </Link>
      </div>
      <div className='table-responsive'>
        <table className='students__table'>
          <tbody>
            <tr>
              <th>Ім’я</th>
              <th>Група</th>
              <th>Дата народження</th>
              <th>Номер телефону</th>
              <th>E-mail</th>
              <th>Місце проживання</th>
              <th></th>
              <th></th>
            </tr>
            {
              students.map((student: IStudentProps) => {
                return <Student student={student} key={student.id}/>;
              })
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StudentsPage;