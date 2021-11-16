import React from "react";
import TeacherForm from "../../Components/TeacherForm/TeacherForm";

const TeacherEditPage = () => {
  return (
    <div>
      <h5 className="page__title">Редагувати викладача</h5>
      <TeacherForm editMode={true} />
    </div>
  );
};

export default TeacherEditPage;
