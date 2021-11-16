import React from "react";
import StudentForm from "../../Components/StudentForm/StudentForm";

const StudentEditPage: React.FC = () => {
  return (
    <div>
      <h5 className="page__title">Редагувати студента</h5>
      <StudentForm editMode={true} />
    </div>
  );
};

export default StudentEditPage;
