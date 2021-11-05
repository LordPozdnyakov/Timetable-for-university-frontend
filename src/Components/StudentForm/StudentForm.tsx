import React, { FormEvent, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Button, DatePicker, Form, Input, Select, message } from "antd";
import moment from "moment";
import "./StudentForm.scss";
import StudentFormInfo from "../../Types/StudentFormInfo";
import { Moment } from "moment";
import { useTypedDispatch, useTypedSelector } from "../../hooks/redux-hooks";
import {
  addStudent,
  clearAddStudentDataForm,
  deleteStudent,
  editStudent,
  getStudentById,
} from "../../Redux/Actions/studentsActions";
import IUser from "../../Types/IUser";

const dateFormat = "DD/MM/YYYY";

const initialState: StudentFormInfo = {
  userId: null,
  firstName: "",
  lastName: "",
  surName: "",
  birthDay: moment(new Date()).format(dateFormat),
  phoneNumber: "",
  email: "",
  group: "",
  address: "",
  fatherName: "",
  fatherPhone: "",
  motherName: "",
  motherPhone: "",
};

const StudentForm = ({ editMode }: { editMode: boolean }) => {
  const dispatch = useTypedDispatch();
  const { error, studentAddedSuccess, selectedStudent } = useTypedSelector(
    (state) => state.studentsReducer
  );

  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    if (!editMode || !id) return;
    if (!selectedStudent || selectedStudent.userId !== +id) {
      dispatch(getStudentById(+id));
    }
    if (!selectedStudent) return;
    setStudent(selectedStudent);
  }, [selectedStudent]);

  useEffect(() => {
    if (studentAddedSuccess) {
      setStudent(initialState);
      message.success("Студента успішно додано");
    }
    if (error) {
      message.error(error);
    }
    dispatch(clearAddStudentDataForm());
  }, [studentAddedSuccess, error]);

  let [student, setStudent] = useState<StudentFormInfo>(initialState);
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

  const [cancelIsActive, setCancelIsActive] = useState<boolean>(false);

  const handleChangeInfo = (event: FormEvent<HTMLFormElement>) => {
    const target = event.target as HTMLInputElement;
    setStudent((state) => {
      return {
        ...state,
        [target.id]: target.value,
      };
    });
    if (!editMode) {
      if (target.value === initialState[target.id as keyof StudentFormInfo]) {
        setCancelIsActive(false);
      } else {
        setCancelIsActive(true);
      }
    }
    if (!selectedStudent) return;
    if (target.value === selectedStudent[target.id as keyof IUser]) {
      setCancelIsActive(false);
    } else {
      setCancelIsActive(true);
    }
  };

  const handleChangeBirthDate = (dateObj: Moment | null, dateStr: string) => {
    setStudent((state) => {
      return {
        ...state,
        birthDay: moment(dateStr).format(dateFormat),
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

  const handleSaveStudent = () => {
    if (!editMode) {
      dispatch(addStudent(student));
      // dispatch(clearAddStudentDataForm());
      return;
    }
    if (!student.userId) {
      message.error("Студента з заданим id не існує");
      return;
    }
    dispatch(editStudent(student.userId, student));
    setCancelIsActive(false);
  };

  const handleDeleteStudent = (): void => {
    if (!selectedStudent) return;
    dispatch(deleteStudent(selectedStudent.userId));
    setStudent(initialState);
  };

  const handleCancel = (): void => {
    if (!editMode) {
      setStudent(initialState);
      setCancelIsActive(false);
      return;
    }
    if (!selectedStudent) return;
    setStudent(selectedStudent);
    setCancelIsActive(false);
  };

  return (
    <Form layout="vertical" className="form" onChange={handleChangeInfo}>
      <div className="form__row">
        <Form.Item
          rules={[{ required: true, message: "Please input your password!" }]}
          className="form__item"
        >
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
            value={moment(birthDay, dateFormat)}
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
          onClick={handleSaveStudent}
        >
          Зберегти
        </Button>
        <Button
          htmlType="button"
          className="form__button form__button--cancel"
          onClick={handleCancel}
          disabled={!cancelIsActive}
        >
          Скасувати
        </Button>
        {editMode ? (
          <Button
            htmlType="button"
            className="form__button form__button--delete"
            onClick={handleDeleteStudent}
            disabled={student === initialState ? true : false}
          >
            Видалити
          </Button>
        ) : null}
      </div>
    </Form>
  );
};

export default StudentForm;
