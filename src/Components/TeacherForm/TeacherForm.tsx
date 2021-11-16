import React, { FormEvent, useEffect, useState } from "react";
import { Button, Col, DatePicker, Form, Input, message, Row } from "antd";
import SimpleModal from "../SimpleModal/SimpleModal";
import * as Yup from "yup";
import moment, { Moment } from "moment";
import TeacherFormInfo from "../../Types/TeacherFormInfo";
import { useTypedDispatch, useTypedSelector } from "../../hooks/redux-hooks";
import { useParams } from "react-router-dom";
import {
  addTeacher,
  clearAddTeacherDataForm,
  deleteTeacher,
  editTeacher,
  getTeacherById,
} from "../../Redux/Actions/teachersActions";
import { useFormik } from "formik";
import IUser from "../../Types/IUser";

const TeacherFormSchema = Yup.object().shape({
  firstName: Yup.string().required(`Це поле обов'язкове`),
  lastName: Yup.string().required(`Це поле обов'язкове`),
  patronymic: Yup.string().required(`Це поле обов'язкове`),
  email: Yup.string()
    .required(`Це поле обов'язкове`)
    .email("Введіть коректний email"),
});

const dateFormat = "DD/MM/YYYY";

const initialState: TeacherFormInfo = {
  id: 0,
  firstName: "",
  lastName: "",
  patronymic: "",
  birthDay: moment(new Date()).format(dateFormat),
  phoneNumber: "",
  email: "",
  address: "",
};

const TeacherForm = ({ editMode }: { editMode: boolean }) => {
  const dispatch = useTypedDispatch();
  const { error, selectedTeacher, teacherAddedSuccess } = useTypedSelector(
    (state) => state.teachersReducer
  );

  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    if (!editMode || !id) return;
    if (!selectedTeacher || selectedTeacher.id !== +id) {
      dispatch(getTeacherById(+id));
    }
    if (!selectedTeacher) return;
    setTeacher(selectedTeacher);
    formik.values.lastName = selectedTeacher.lastName;
    formik.values.firstName = selectedTeacher.firstName;
    formik.values.patronymic = selectedTeacher.patronymic;
    formik.values.email = selectedTeacher.email;
  }, [selectedTeacher, dispatch, editMode, id]);

  const [teacher, setTeacher] = useState<TeacherFormInfo>(initialState);

  const { firstName, lastName, patronymic, birthDay, phoneNumber, address } =
    teacher;

  const formik = useFormik({
    initialValues: {
      firstName: teacher.firstName,
      lastName: teacher.lastName,
      patronymic: teacher.patronymic,
      email: teacher.email,
    },
    validationSchema: TeacherFormSchema,
    onSubmit: (values) => {
      handleSaveTeacher();
    },
  });

  const [cancelIsActive, setCancelIsActive] = useState<boolean>(false);

  const handleChangeInfo = (event: FormEvent<HTMLFormElement>) => {
    const target = event.target as HTMLInputElement;
    setTeacher((state) => {
      return {
        ...state,
        [target.id]: target.value,
      };
    });
    if (!editMode) {
      if (target.value === initialState[target.id as keyof TeacherFormInfo]) {
        setCancelIsActive(false);
      } else {
        setCancelIsActive(true);
      }
    }
    if (!selectedTeacher) return;
    if (target.value === selectedTeacher[target.id as keyof IUser]) {
      setCancelIsActive(false);
    } else {
      setCancelIsActive(true);
    }
  };

  const handleChangeBirthDate = (dateObj: Moment | null, dateStr: string) => {
    setTeacher((state) => {
      return {
        ...state,
        birthDay: moment(dateStr).format(dateFormat),
      };
    });
  };

  const handleSaveTeacher = () => {
    if (!editMode) {
      dispatch(addTeacher(teacher));
      setCancelIsActive(false);
      formik.resetForm();
      return;
    }
    if (!teacher.id) {
      message.error("Викладача з заданим id не існує");
      return;
    }
    dispatch(editTeacher(teacher.id, teacher));
    setCancelIsActive(false);
    formik.resetForm();
  };

  const handleCancel = (): void => {
    if (!editMode) {
      setTeacher(initialState);
      setCancelIsActive(false);
      formik.resetForm();
      return;
    }
    if (!selectedTeacher) return;
    setTeacher(selectedTeacher);
    setCancelIsActive(false);
    formik.resetForm();
  };

  useEffect(() => {
    if (teacherAddedSuccess) {
      setTeacher(initialState);
      message.success("Викладача успішно додано");
    }
    if (error) {
      message.error(error);
    }
    dispatch(clearAddTeacherDataForm());
  }, [teacherAddedSuccess, error, dispatch]);

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
    if (!selectedTeacher) return;
    dispatch(deleteTeacher(selectedTeacher.id));
    setTeacher(initialState);
    formik.values.lastName = "";
    formik.values.firstName = "";
    formik.values.patronymic = "";
    formik.values.email = "";
  };

  return (
    <div>
      <Form
        layout="vertical"
        className="form form--pt"
        onChange={handleChangeInfo}
        onFinish={formik.handleSubmit}
      >
        <Row className="adaptive-row">
          <Col span={8} className="col">
            <Form.Item label="Прізвище">
              <Input
                id="lastName"
                value={formik.values.lastName}
                onChange={formik.handleChange}
              />
              {formik.errors.lastName && (
                <div className="error-message">{formik.errors.lastName}</div>
              )}
            </Form.Item>
          </Col>
          <Col span={8} className="col">
            <Form.Item label="Ім'я">
              <Input
                id="firstName"
                value={formik.values.firstName}
                onChange={formik.handleChange}
              />
              {formik.errors.firstName && (
                <div className="error-message">{formik.errors.firstName}</div>
              )}
            </Form.Item>
          </Col>
          <Col span={8} className="col">
            <Form.Item label="По-батькові">
              <Input
                id="patronymic"
                value={formik.values.patronymic}
                onChange={formik.handleChange}
              />
              {formik.errors.patronymic && (
                <div className="error-message">{formik.errors.patronymic}</div>
              )}
            </Form.Item>
          </Col>
        </Row>
        <Row className="adaptive-row">
          <Col span={8} className="col">
            <Form.Item label="Дата народження">
              <DatePicker
                id="birthDay"
                className="form__date-picker"
                placeholder=""
                value={moment(birthDay, dateFormat)}
                onChange={handleChangeBirthDate}
              />
            </Form.Item>
          </Col>
          <Col span={8} className="col">
            <Form.Item label="Номер телефону">
              <Input id="phoneNumber" value={phoneNumber} />
            </Form.Item>
          </Col>
          <Col span={8} className="col">
            <Form.Item label="E-mail">
              <Input
                id="email"
                value={formik.values.email}
                onChange={formik.handleChange}
              />
              {formik.errors.email && (
                <div className="error-message">{formik.errors.email}</div>
              )}
            </Form.Item>
          </Col>
        </Row>
        <Row className="adaptive-row">
          <Col span={8} className="col">
            <Form.Item label="Місце проживання">
              <Input id="address" value={address} />
            </Form.Item>
          </Col>
        </Row>
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
              disabled={teacher === initialState ? true : false}
            >
              Видалити
            </Button>
          ) : null}
        </div>
      </Form>
      <SimpleModal
        title="Видалити викладача?"
        content={`Викладач ${fullName} буде повністю видалена із системи.
                     Продовжити?`}
        isModalVisible={isModalVisible}
        hideModal={hideModal}
        handleCancel={handleCancelDeleting}
        handleConfirm={handleConfirmDeleting}
      />
    </div>
  );
};

export default TeacherForm;
