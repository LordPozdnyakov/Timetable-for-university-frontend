import React, { useEffect } from "react";
import GroupItem from "../../Components/GroupItem/GroupItem";
import { useTypedDispatch, useTypedSelector } from "../../hooks/redux-hooks";
import { getGroups } from "../../Redux/Actions/groupsActions";

const GroupsPage = () => {
  const { groups, loading, error } = useTypedSelector(
    (state) => state.groupsReducer
  );

  const dispatch = useTypedDispatch();

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
      <h5 className="page-title">Групи</h5>
      <div className="table-responsive">
        <table className="students__table">
          <tbody>
            <tr>
              <th>Група</th>
              <th>Повна назва</th>
              <th>Кількість студентів</th>
            </tr>
            {groups.map((group) => {
              return <GroupItem key={group.id} {...group} />;
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default GroupsPage;
