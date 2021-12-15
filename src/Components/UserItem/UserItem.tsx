import React, { FC } from "react";

type UserItemProps = {
  firstName: string;
  lastName: string;

  privilage: string;
};

const UserItem: FC<UserItemProps> = ({ firstName, lastName, privilage }) => {
  return (
    <React.Fragment>
      <tr>
        <td>
          {firstName} {lastName}
        </td>
        <td>{privilage}</td>
      </tr>
    </React.Fragment>
  );
};

export default UserItem;
