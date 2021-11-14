import React, { FormEvent, useEffect, useState } from "react";
import { Form, Input, Row, Col, Button, message } from "antd";
import { useFormik } from "formik";
import GroupFormInfo from "../../Types/GroupFormInfo";
import * as Yup from "yup";
import { useTypedDispatch, useTypedSelector } from "../../hooks/redux-hooks";
import {
  addGroup,
  clearAddGroupDataForm,
} from "../../Redux/Actions/groupsActions";

const initialState: GroupFormInfo = {
  shortName: "",
  fullName: "",
  course: "",
  educationForm: "",
  year: "",
};

const GroupFormSchema = Yup.object().shape({
  shortName: Yup.string().required(`Це поле обов'язкове`),
  course: Yup.number().typeError("Введіть число").integer("Введіть ціле число"),
  year: Yup.number().typeError("Введіть число").integer("Введіть ціле число"),
});

const GroupForm = ({ editMode }: { editMode: boolean }) => {
  const dispatch = useTypedDispatch();
  const [group, setGroup] = useState<GroupFormInfo>(initialState);
  const { error, groupAddedSuccess } = useTypedSelector(
    (state) => state.groupsReducer
  );

  const formik = useFormik({
    initialValues: {
      shortName: group.shortName,
      course: group.course,
      year: group.year,
    },
    validationSchema: GroupFormSchema,
    onSubmit: (values) => {
      handleSaveGroup();
    },
  });

  useEffect(() => {
    if (groupAddedSuccess) {
      setGroup(initialState);
      formik.resetForm();
      message.success("Групу успішно додано");
    }
    if (error) {
      message.error(error);
    }
    dispatch(clearAddGroupDataForm());
  }, [groupAddedSuccess, error, dispatch]);

  const handleSaveGroup = () => {
    if (!editMode) {
      dispatch(addGroup(group));
      setCancelIsActive(false);
      return;
    }
  };

  const { shortName, fullName, year, educationForm, course } = group;

  const handleChangeInfo = (event: FormEvent<HTMLFormElement>) => {
    const target = event.target as HTMLInputElement;
    setGroup((state) => {
      return {
        ...state,
        [target.id]: target.value,
      };
    });
    if (!editMode) {
      if (target.value === initialState[target.id as keyof GroupFormInfo]) {
        setCancelIsActive(false);
      } else {
        setCancelIsActive(true);
      }
    }
  };

  const [cancelIsActive, setCancelIsActive] = useState<boolean>(false);

  const handleCancel = (): void => {
    if (!editMode) {
      setGroup(initialState);
      setCancelIsActive(false);
      formik.resetForm();
      return;
    }
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
            <Form.Item label="Скорочена назва">
              <Input
                id="shortName"
                value={formik.values.shortName}
                onChange={formik.handleChange}
              />
              {formik.errors.shortName && (
                <div className="error-message">{formik.errors.shortName}</div>
              )}
            </Form.Item>
          </Col>
          <Col span={8} className="col">
            <Form.Item label="Курс">
              <Input
                id="course"
                value={formik.values.course}
                onChange={formik.handleChange}
              />
              {formik.errors.course && (
                <div className="error-message">{formik.errors.course}</div>
              )}
            </Form.Item>
          </Col>
          <Col span={8} className="col">
            <Form.Item label="Рік">
              <Input
                id="year"
                value={formik.values.year}
                onChange={formik.handleChange}
              />
              {formik.errors.year && (
                <div className="error-message">{formik.errors.year}</div>
              )}
            </Form.Item>
          </Col>
        </Row>
        <Row className="adaptive-row">
          <Col span={8} className="col">
            <Form.Item label="Повна назва">
              <Input id="fullName" value={fullName} />
            </Form.Item>
          </Col>
          <Col span={8} className="col">
            <Form.Item label="Форма навчання">
              <Input id="educationForm" value={educationForm} />
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
            >
              Видалити
            </Button>
          ) : null}
        </div>
      </Form>
    </div>
  );
};

export default GroupForm;
