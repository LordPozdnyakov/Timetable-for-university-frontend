import React from "react";
import GroupForm from "../../Components/GroupForm/GroupForm";

const EditGroupPage = () => {
  return (
    <div>
      <div className="page__header">
        <h5 className="page__title page__title--no-mb">Редагувати групу</h5>
      </div>
      <GroupForm editMode={true} />
    </div>
  );
};

export default EditGroupPage;
