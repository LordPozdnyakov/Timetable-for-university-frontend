import React from "react";
import TeacherForm from "../../Components/TeacherForm/TeacherForm";

const AddTeacherPage = () => {
  return (
    <div>
      <div className="page__header">
        <h5 className="page__title page__title--no-mb">Додати викладача</h5>
      </div>
      <TeacherForm editMode={false} />
    </div>
  );
};

export default AddTeacherPage;
