import React, { useEffect } from "react";
import GroupItem from "../../Components/GroupItem/GroupItem";
import { useTypedDispatch, useTypedSelector } from "../../hooks/redux-hooks";
import { getGroups } from "../../Redux/Actions/groupsActions";
import { Link } from "react-router-dom";
import { Button, Pagination } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { ADD_GROUP_PAGE_ROUTE } from "../../Constant/routes-constants";
import { paginationPageSize, usePagination } from "../../hooks/usePagination";
import { usePrivilage } from "../../hooks/usePrivilage";

const GroupsPage = () => {
  const { groups, loading, error } = useTypedSelector(
    (state) => state.groupsReducer
  );

  const dispatch = useTypedDispatch();
  const { firstPageIndex, lastPageIndex, changePage } = usePagination();
  const { isTeacherPrivilage, isStudentPrivilage, isGuestPrivilage } =
    usePrivilage();

  useEffect(() => {
    dispatch(getGroups());
  }, [dispatch]);

  if (loading) {
    return <div>Завантаження...</div>;
  }

  if (error) {
    return <h3>{error}</h3>;
  }

  if (groups.length < 1) {
    return <div>Групи відсутні</div>;
  }
  return (
    <div>
      <div className="page__header">
        <h5 className="page__title page__title--no-mb">Групи</h5>
        {!isTeacherPrivilage && !isStudentPrivilage && !isGuestPrivilage && (
          <Link to={ADD_GROUP_PAGE_ROUTE}>
            <Button
              className="add-btn"
              type="primary"
              shape="circle"
              icon={<PlusOutlined className="add-btn__inner" />}
            />
          </Link>
        )}
      </div>
      <div className="table-responsive">
        <table className="table">
          <tbody>
            <tr>
              <th>Група</th>
              <th>Повна назва</th>
              <th>Кількість студентів</th>
            </tr>
            {groups &&
              groups.length > 0 &&
              groups.slice(firstPageIndex, lastPageIndex).map((group) => {
                return <GroupItem key={group.id} {...group} />;
              })}
            <Pagination
              className="pagination"
              defaultCurrent={1}
              total={groups.length}
              defaultPageSize={paginationPageSize}
              onChange={changePage}
            />
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default GroupsPage;
