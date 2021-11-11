import React, { FC } from "react";

type GroupItemProps = {
  shortName: string;
  fullName: string;
  studentCount: number;
};

const GroupItem: FC<GroupItemProps> = ({
  shortName,
  fullName,
  studentCount,
}) => {
  return (
    <tr>
      <td>{shortName}</td>
      <td>{fullName}</td>
      <td>{studentCount}</td>
    </tr>
  );
};

export default GroupItem;
