import React, { FC } from "react";
import { Link } from "react-router-dom";
import { GROUPS_PAGE_ROUTE } from "../../Constant/routes-constants";

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
    </tr>
  );
};

export default GroupItem;
