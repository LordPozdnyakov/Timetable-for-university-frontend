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
import SimpleModal from "../SimpleModal/SimpleModal";
import { useFormik } from "formik";
import * as Yup from "yup";

const StudentFormSchema = Yup.object().shape({
  firstName: Yup.string().required(`Це поле обов'язкове`),
  lastName: Yup.string().required(`Це поле обов'язкове`),
  patronymic: Yup.string().required(`Це поле обов'язкове`),
});

const dateFormat = "DD/MM/YYYY";

const initialState: StudentFormInfo = {
  id: 0,
  firstName: "",
  lastName: "",
  patronymic: "",
  birthDay: moment(new Date()).format(dateFormat),
  phoneNumber: "",
  email: "",
  groupName: "",
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
    if (!selectedStudent || selectedStudent.id !== +id) {
      dispatch(getStudentById(+id));
    }
    if (!selectedStudent) return;
    setStudent(selectedStudent);
    formik.values.lastName = selectedStudent.lastName;
    formik.values.firstName = selectedStudent.firstName;
    formik.values.patronymic = selectedStudent.patronymic;
  }, [selectedStudent, dispatch, editMode, id]);

  useEffect(() => {
    if (studentAddedSuccess) {
      setStudent(initialState);
      message.success("Студента успішно додано");
    }
    if (error) {
      message.error(error);
    }
    dispatch(clearAddStudentDataForm());
  }, [studentAddedSuccess, error, dispatch]);

  let [student, setStudent] = useState<StudentFormInfo>(initialState);
  const {
    firstName,
    lastName,
    patronymic,
    birthDay,
    phoneNumber,
    email,
    groupName,
    address,
    fatherName,
    fatherPhone,
    motherName,
    motherPhone,
  } = student;

  const [cancelIsActive, setCancelIsActive] = useState<boolean>(false);
  const fullName = `${lastName} ${firstName} ${patronymic}`;
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = (): void => {
    setIsModalVisible(true);
  };

  const hideModal = (): void => {
    setIsModalVisible(false);
  };

  const handleCancelDeleting = (): void => {
    setIsModalVisible(false);
  };

  const handleConfirmDeleting = (): void => {
    setIsModalVisible(false);
    handleDeleteStudent();
  };

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

  const handleChangeGroup = (groupName: string) => {
    setStudent((state) => {
      return {
        ...state,
        groupName,
      };
    });
  };

  const handleSaveStudent = () => {
    if (!editMode) {
      dispatch(addStudent(student));
      // dispatch(clearAddStudentDataForm());
      setCancelIsActive(false);
      formik.resetForm();
      return;
    }
    if (!student.id) {
      message.error("Студента з заданим id не існує");
      return;
    }
    dispatch(editStudent(student.id, student));
    setCancelIsActive(false);
    formik.resetForm();
  };

  const handleDeleteStudent = (): void => {
    if (!selectedStudent) return;
    dispatch(deleteStudent(selectedStudent.id));
    setStudent(initialState);
  };

  const handleCancel = (): void => {
    if (!editMode) {
      setStudent(initialState);
      setCancelIsActive(false);
      formik.values.lastName = "";
      formik.values.firstName = "";
      formik.values.patronymic = "";
      return;
    }
    if (!selectedStudent) return;
    setStudent(selectedStudent);
    setCancelIsActive(false);
    formik.values.lastName = selectedStudent.lastName;
    formik.values.firstName = selectedStudent.firstName;
    formik.values.patronymic = selectedStudent.patronymic;
  };

  const formik = useFormik({
    initialValues: {
      firstName: student.firstName,
      lastName: student.lastName,
      patronymic: student.patronymic,
    },
    validationSchema: StudentFormSchema,
    onSubmit: (values) => {
      console.log("teest");
      //validateYupSchema(values, StudentFormSchema)
      handleSaveStudent();
    },
  });

  return (
    <React.Fragment>
      <Form
        layout="vertical"
        className="form"
        onChange={handleChangeInfo}
        onFinish={formik.handleSubmit}
      >
        <div className="form__row">
          <Form.Item className="form__item">
            <label htmlFor="lastName" className="form-label">
              Прізвище
            </label>
            <Input
              id="lastName"
              className="form__input"
              value={formik.values.lastName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.errors.lastName && (
              <div className="error-message">{formik.errors.lastName}</div>
            )}
          </Form.Item>
          <Form.Item className="form__item">
            <label htmlFor="firstName" className="form-label">
              Ім'я
            </label>
            <Input
              id="firstName"
              className="form__input"
              value={formik.values.firstName}
              onChange={formik.handleChange}
            />
            {formik.errors.firstName && (
              <div className="error-message">{formik.errors.firstName}</div>
            )}
          </Form.Item>
          <Form.Item className="form__item">
            <label htmlFor="patronymic" className="form-label">
              По-батькові
            </label>
            <Input
              id="patronymic"
              className="form__input"
              value={formik.values.patronymic}
              onChange={formik.handleChange}
            />
            {formik.errors.patronymic && (
              <div className="error-message">{formik.errors.patronymic}</div>
            )}
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
            <Input
              id="phoneNumber"
              className="form__input"
              value={phoneNumber}
            />
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
            <label htmlFor="groupName" className="form-label">
              Група
            </label>
            <Select
              id="groupName"
              className="form__input"
              value={groupName}
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
            <Input
              id="fatherPhone"
              className="form__input"
              value={fatherPhone}
            />
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
            <Input
              id="motherPhone"
              className="form__input"
              value={motherPhone}
            />
          </Form.Item>
        </div>
        <div className="form__row--buttons">
          <Button htmlType="submit" className="form__button form__button--save">
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
              onClick={showModal}
              disabled={student === initialState ? true : false}
            >
              Видалити
            </Button>
          ) : null}
        </div>
      </Form>
      <SimpleModal
        title="Видалити студента?"
        content={`Студент ${fullName} буде повністю видалений із системи.
                   Продовжити?`}
        isModalVisible={isModalVisible}
        hideModal={hideModal}
        handleCancel={handleCancelDeleting}
        handleConfirm={handleConfirmDeleting}
      />
    </React.Fragment>
  );
};

export default StudentForm;
