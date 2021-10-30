import React, { useEffect } from "react";
import "./StudentProfilePage.scss";
import { useTypedDispatch, useTypedSelector } from "../../hooks/redux-hooks";
import { useParams } from "react-router-dom";
import { getStudentById } from "../../Redux/Actions/studentsActions";

const StudentProfilePage: React.FC = () => {
  const { selectedStudent, loading, error } = useTypedSelector(
    (state) => state.studentsReducer
  );
  const { id } = useParams<{ id: string }>();
  const dispatch = useTypedDispatch();

  useEffect(() => {
    dispatch(getStudentById(+id));
  }, []);

  if (loading) {
    return <div>Завантаження...</div>;
  }

  if (error || !selectedStudent) {
    return <h3>{error}</h3>;
  }

  const {
    firstName,
    lastName,
    surName,
    birthDay,
    phoneNumber,
    email,
    groupId,
    fatherName,
    fatherPhone,
    motherName,
    motherPhone,
  } = selectedStudent;

  return (
    <section className="profile">
      <div className="profile__info">
        <div className="profile__info-block">
          <div className="profile__info-row">
            <div className="profile__info-elem">
              <div className="profile__info-subtitle">
                Прізвище, ім’я, по-батькові
              </div>
              <div className="profile__info-important">{`${lastName} ${firstName} ${surName}`}</div>
            </div>
          </div>
          <div className="profile__info-row">
            <div className="profile__info-elem">
              <div className="profile__info-subtitle">Дата народження</div>
              <div>{birthDay}</div>
            </div>
            <div className="profile__info-elem">
              <div className="profile__info-subtitle">Номер телефону</div>
              <div>
                <a href={`tel:${phoneNumber}`}>{phoneNumber}</a>
              </div>
            </div>
            <div className="profile__info-elem">
              <div className="profile__info-subtitle">E-mail</div>
              <div>
                <a href={`mailto:${email}`}>{email}</a>
              </div>
            </div>
          </div>
        </div>
        <div className="profile_info-row profile__info-block">
          <div className="profile__info-elem">
            <div className="profile__info-subtitle">Група</div>
            <div className="profile__info-important">{groupId}</div>
          </div>
        </div>
        <div className="profile_info-row profile__info-block">
          <div className="profile__info-elem">
            <div className="profile__info-subtitle">Батько</div>
            <div>
              {`${fatherName}, `}
              <a href={`tel:${fatherPhone}`}>{fatherPhone}</a>
            </div>
          </div>
          <div className="profile__info-elem">
            <div className="profile__info-subtitle">Мати</div>
            <div>
              {`${motherName}, `}
              <a href={`tel:${motherPhone}`}>{motherPhone}</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StudentProfilePage;
