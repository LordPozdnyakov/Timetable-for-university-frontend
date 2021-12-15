import React, { useEffect } from "react";
import { Pagination } from "antd";
import { paginationPageSize, usePagination } from "../../hooks/usePagination";
import { useTypedDispatch, useTypedSelector } from "../../hooks/redux-hooks";
import { getUsers } from "../../Redux/Actions/usersActions";
import UserItem from "../../Components/UserItem/UserItem";

const TeachersPage: React.FC = () => {
  const { users, loading, error } = useTypedSelector(
    (state) => state.usersReducer
  );

  const dispatch = useTypedDispatch();

  const { firstPageIndex, lastPageIndex, changePage } = usePagination();

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  if (loading) {
    return <div>Завантаження...</div>;
  }

  if (error) {
    return <h3>{error}</h3>;
  }

  if (users.length < 1) {
    return <div>Користувачі відсутні</div>;
  }

  console.log(users);

  return (
    <div>
      <div className="page__header">
        <h5 className="page__title page__title--no-mb">Користувачі</h5>
      </div>
      <div className="table-responsive">
        <table className="table">
          <tbody>
            <tr>
              <th>Користувачі</th>
              <th>Привілегія</th>
            </tr>
            {users &&
              users.length > 0 &&
              users.slice(firstPageIndex, lastPageIndex).map((user) => {
                return (
                  <UserItem
                    firstName={user.firstName}
                    lastName={user.lastName}
                    privilage={user.privilege}
                  />
                );
              })}
            <Pagination
              className="pagination"
              defaultCurrent={1}
              defaultPageSize={paginationPageSize}
              onChange={changePage}
              total={users.length}
            />
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TeachersPage;
