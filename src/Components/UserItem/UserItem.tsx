import React, { FC } from "react";

type UserItemProps = {
  id: number;
  email: string;
  firstName: string;
  lastName: string;
  patronimic: string;
  privilage: string;
};

const UserItem: FC<UserItemProps> = ({
  id,
  email,
  firstName,
  lastName,
  patronimic,
  privilage,
}) => {
  return (
    <React.Fragment>
      <tr>
        <td>{id}</td>
        <td>{email}</td>
        <td>
          {firstName} {lastName}
          {patronimic}
        </td>
        <td>{privilage}</td>
      </tr>
    </React.Fragment>
  );
};

export default UserItem;
