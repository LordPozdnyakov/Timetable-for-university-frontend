import React from "react";
import GroupItem from "../../Components/GroupItem/GroupItem";
import GroupType from "../../Types/GroupType";

const groupsData: GroupType[] = [
  {
    id: 1,
    shortName: "1PR1",
    fullName: "Програмна інженерія",
    course: 1,
    educationForm: "Денна",
    year: 2021,
    studentCount: 35,
  },
  {
    id: 2,
    shortName: "2PR1",
    fullName: "Програмна інженерія",
    course: 2,
    educationForm: "Денна",
    year: 2020,
    studentCount: 45,
  },
  {
    id: 3,
    shortName: "5PR1",
    fullName: "Програмна інженерія",
    course: 5,
    educationForm: "Денна",
    year: 2017,
    studentCount: 29,
  },
];

const GroupsPage = () => {
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
            {groupsData.map((group) => {
              return <GroupItem {...group} />;
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default GroupsPage;
