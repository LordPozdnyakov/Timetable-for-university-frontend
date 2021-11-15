import React, { FC } from "react";
import { Link } from "react-router-dom";
import {
  EDIT_GROUP_PAGE_ROUTE,
  EDIT_STUDENT_PAGE_ROUTE,
  GROUPS_PAGE_ROUTE,
} from "../../Constant/routes-constants";
import { DeleteFilled, EditFilled } from "@ant-design/icons";

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
  return (
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
      <td className="table-icon delete-icon">
        <DeleteFilled />
      </td>
    </tr>
  );
};

export default GroupItem;
