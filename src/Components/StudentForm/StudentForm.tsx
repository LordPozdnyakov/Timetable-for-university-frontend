import React, { FormEvent, useEffect, useState } from "react";
import { Button, DatePicker, Form, Input, Select, message } from "antd";
import moment from "moment";
import "./StudentForm.scss";
import StudentFormInfo from "../../Types/StudentFormInfo";
import { Moment } from "moment";
import { useTypedDispatch, useTypedSelector } from "../../hooks/redux-hooks";
import {
  addStudent,
  clearAddStudentDataForm,
} from "../../Redux/Actions/studentsActions";

const initalState: StudentFormInfo = {
  firstName: "",
  lastName: "",
  surName: "",
  birthDay: "01.01.2001",
  phoneNumber: "",
  email: "",
  group: "",
  address: "",
  fatherName: "",
  fatherPhone: "",
  motherName: "",
  motherPhone: "",
};

const dateFormat = "DD/MM/YYYY";

const StudentForm = ({ editMode }: { editMode: boolean }) => {
  const [student, setStudent] = useState<StudentFormInfo>(initalState);
  const {
    firstName,
    lastName,
    surName,
    birthDay,
    phoneNumber,
    email,
    group,
    address,
    fatherName,
    fatherPhone,
    motherName,
    motherPhone,
  } = student;

  const dispatch = useTypedDispatch();
  const { error, studentAddedSuccess } = useTypedSelector(
    (state) => state.studentsReducer
  );

  useEffect(() => {
    if (studentAddedSuccess) {
      setStudent(initalState);
      message.success("Студента успішно додано");
    }
    if (error) {
      message.error(error);
    }
    dispatch(clearAddStudentDataForm());
  }, [studentAddedSuccess, error]);

  const handleChangeInfo = (event: FormEvent<HTMLFormElement>) => {
    const target = event.target as HTMLInputElement;
    setStudent((state) => {
      return {
        ...state,
        [target.id]: target.value,
      };
    });
  };

  const handleChangeBirthDate = (dateObj: Moment | null, dateStr: string) => {
    setStudent((state) => {
      return {
        ...state,
        birthDay: dateStr,
      };
    });
  };

  const handleChangeGroup = (group: string) => {
    setStudent((state) => {
      return {
        ...state,
        group,
      };
    });
  };

  const handleAddStudent = () => {
    dispatch(addStudent(student));
    dispatch(clearAddStudentDataForm());
  };

  const handleDeleteStudent = (): void => {
    message.success("Студента успішно видалено");
  };

  const handleCancel = (): void => {
    setStudent(initalState);
  };

  return (
    <Form layout="vertical" className="form" onChange={handleChangeInfo}>
      <div className="form__row">
        <Form.Item className="form__item">
          <label htmlFor="lastName" className="form-label">
            Прізвище
          </label>
          <Input id="lastName" className="form__input" value={lastName} />
        </Form.Item>
        <Form.Item className="form__item">
          <label htmlFor="firstName" className="form-label">
            Ім'я
          </label>
          <Input id="firstName" className="form__input" value={firstName} />
        </Form.Item>
        <Form.Item className="form__item">
          <label htmlFor="surName" className="form-label">
            По-батькові
          </label>
          <Input id="surName" className="form__input" value={surName} />
        </Form.Item>
      </div>
      <div className="form__row">
        <Form.Item className="form__item">
          <label htmlFor="birthDay" className="form-label">
            Дата народження
          </label>
          <DatePicker
            id="birthDay"
            className="form__input form__date-picker"
            placeholder=""
            defaultValue={moment(birthDay, dateFormat)}
            onChange={handleChangeBirthDate}
          />
        </Form.Item>
        <Form.Item className="form__item">
          <label htmlFor="phoneNumber" className="form-label">
            Номер телефону
          </label>
          <Input id="phoneNumber" className="form__input" value={phoneNumber} />
        </Form.Item>
        <Form.Item className="form__item">
          <label htmlFor="email" className="form-label">
            E-mail
          </label>
          <Input id="email" className="form__input" value={email} />
        </Form.Item>
      </div>
      <div className="form__row">
        <Form.Item className="form__item">
          <label htmlFor="group" className="form-label">
            Група
          </label>
          <Select
            id="group"
            className="form__input"
            value={group}
            onChange={handleChangeGroup}
          >
            <Select.Option value="415">415</Select.Option>
            <Select.Option value="221">221</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item className="form__item form__input--big">
          <label htmlFor="address" className="form-label">
            Місце проживання
          </label>
          <Input id="address" className="form__input" value={address} />
        </Form.Item>
      </div>
      <div className="form__row">
        <div className="form__subtitle">Батько</div>
        <Form.Item className="form__item form__input--medium">
          <label htmlFor="fatherName" className="form-label">
            ПІБ
          </label>
          <Input id="fatherName" className="form__input" value={fatherName} />
        </Form.Item>
        <Form.Item className="form__item medium-input">
          <label htmlFor="fatherPhone" className="form-label">
            Номер телефону
          </label>
          <Input id="fatherPhone" className="form__input" value={fatherPhone} />
        </Form.Item>
      </div>
      <div className="form__row">
        <div className="form__subtitle">Мати</div>
        <Form.Item className="form__item form__input--medium">
          <label htmlFor="motherName" className="form-label">
            ПІБ
          </label>
          <Input id="motherName" className="form__input" value={motherName} />
        </Form.Item>
        <Form.Item className="form__item medium-input">
          <label htmlFor="motherPhone" className="form-label">
            Номер телефону
          </label>
          <Input id="motherPhone" className="form__input" value={motherPhone} />
        </Form.Item>
      </div>
      <div className="form__row--buttons">
        <Button
          htmlType="submit"
          className="form__button form__button--save"
          onClick={handleAddStudent}
        >
          Зберегти
        </Button>
        <Button
          htmlType="button"
          className="form__button form__button--cancel"
          onClick={handleCancel}
        >
          Скасувати
        </Button>
        {editMode ? (
          <Button
            htmlType="button"
            className="form__button form__button--delete"
            onClick={handleDeleteStudent}
          >
            Видалити
          </Button>
        ) : null}
      </div>
    </Form>
  );
};

export default StudentForm;
