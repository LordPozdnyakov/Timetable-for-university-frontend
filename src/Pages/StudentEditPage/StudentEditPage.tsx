import React from 'react';
import StudentForm from "../../Components/StudentForm/StudentForm";

const StudentEditPage = () => {
  return (
    <div>
      <h5 className='page-title'>Редагувати студента</h5>
      <StudentForm editMode={true}/>
    </div>
  );
};

export default StudentEditPage;