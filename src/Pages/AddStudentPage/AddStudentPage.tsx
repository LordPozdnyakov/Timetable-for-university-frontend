import React from "react";
import StudentForm from "../../Components/StudentForm/StudentForm";

const AddStudentPage: React.FC = () => {
  return (
    <div>
      <h5 className="page__title">Додати студента</h5>
      <StudentForm editMode={false} />
    </div>
  );
};

export default AddStudentPage;
