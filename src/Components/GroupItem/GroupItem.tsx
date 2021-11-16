import React, { FC, useState } from "react";
import { Link } from "react-router-dom";
import {
  EDIT_GROUP_PAGE_ROUTE,
  GROUPS_PAGE_ROUTE,
} from "../../Constant/routes-constants";
import { DeleteFilled, EditFilled } from "@ant-design/icons";
import { useTypedDispatch } from "../../hooks/redux-hooks";
import SimpleModal from "../SimpleModal/SimpleModal";
import { deleteGroup } from "../../Redux/Actions/groupsActions";

type GroupItemProps = {
  id: number;
  shortName: string;
  fullName: string;
  studentCount: number;
};

const GroupItem: FC<GroupItemProps> = ({
  id,
  shortName,
  fullName,
  studentCount,
}) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const dispatch = useTypedDispatch();

  const showModal = (): void => {
    setIsModalVisible(true);
  };

  const hideModal = (): void => {
    setIsModalVisible(false);
  };

  const handleCancelDeleting = (): void => {
    setIsModalVisible(false);
  };

  const handleConfirmDeleting = (): void => {
    setIsModalVisible(false);
    dispatch(deleteGroup(id));
  };

  return (
    <React.Fragment>
      <tr>
        <td>
          <Link to={`${GROUPS_PAGE_ROUTE}/${id}`}>{shortName}</Link>
        </td>
        <td>{fullName}</td>
        <td>{studentCount}</td>
        <td className="table-icon edit-icon">
          <Link to={`${EDIT_GROUP_PAGE_ROUTE}/${id}`}>
            <EditFilled />
          </Link>
        </td>
        <td className="table-icon delete-icon" onClick={showModal}>
          <DeleteFilled />
        </td>
      </tr>
      <SimpleModal
        title="Видалити группу?"
        content={`Группа ${shortName} ${fullName} буде повністю видалена із системи.
                     Продовжити?`}
        isModalVisible={isModalVisible}
        hideModal={hideModal}
        handleCancel={handleCancelDeleting}
        handleConfirm={handleConfirmDeleting}
      />
    </React.Fragment>
  );
};

export default GroupItem;
