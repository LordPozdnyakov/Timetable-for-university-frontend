import React from "react";
import GroupForm from "../../Components/GroupForm/GroupForm";

const AddGroupPage = () => {
  return (
    <div>
      <div className="page__header">
        <h5 className="page__title page__title--no-mb">Додати групу</h5>
      </div>
      <GroupForm />
    </div>
  );
};

export default AddGroupPage;
