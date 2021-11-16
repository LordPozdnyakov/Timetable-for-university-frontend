import React, { FormEvent, useEffect, useState } from "react";
import { Form, Input, Row, Col, Button, message } from "antd";
import { useFormik } from "formik";
import GroupFormInfo from "../../Types/GroupFormInfo";
import * as Yup from "yup";
import { useTypedDispatch, useTypedSelector } from "../../hooks/redux-hooks";
import {
  addGroup,
  clearAddGroupDataForm,
  deleteGroup,
  editGroup,
  getGroupById,
} from "../../Redux/Actions/groupsActions";
import { useParams } from "react-router-dom";
import SimpleModal from "../SimpleModal/SimpleModal";

const initialState: GroupFormInfo = {
  id: 0,
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
  const { error, groupAddedSuccess, selectedGroup } = useTypedSelector(
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
  }, [groupAddedSuccess, error, dispatch, formik]);

  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    if (!editMode || !id) return;
    if (!selectedGroup || selectedGroup.id !== +id) {
      dispatch(getGroupById(+id));
    }
    if (!selectedGroup) return;
    setGroup(selectedGroup);
    formik.values.shortName = selectedGroup.shortName;
    formik.values.course = selectedGroup.course;
    formik.values.year = selectedGroup.year;
  }, [selectedGroup, dispatch, editMode, id]);

  const handleSaveGroup = () => {
    if (!editMode) {
      dispatch(addGroup(group));
      setCancelIsActive(false);
      return;
    }
    if (!group.id) {
      message.error("Групи з заданим id не існує");
      return;
    }
    dispatch(editGroup(group.id, group));
    setCancelIsActive(false);
    formik.resetForm();
  };

  const { shortName, fullName, educationForm } = group;

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
    if (!selectedGroup) return;
    if (target.value === selectedGroup[target.id as keyof GroupFormInfo]) {
      setCancelIsActive(false);
    } else {
      setCancelIsActive(true);
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
    if (!selectedGroup) return;
    setGroup(selectedGroup);
    setCancelIsActive(false);
    formik.resetForm();
  };

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
    if (!selectedGroup) return;
    dispatch(deleteGroup(selectedGroup.id));
    setGroup(initialState);
    formik.values.shortName = "";
    formik.values.course = "";
    formik.values.year = "";
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
              onClick={showModal}
            >
              Видалити
            </Button>
          ) : null}
        </div>
      </Form>
      <SimpleModal
        title="Видалити группу?"
        content={`Группа ${shortName} ${fullName} буде повністю видалена із системи.
                     Продовжити?`}
        isModalVisible={isModalVisible}
        hideModal={hideModal}
        handleCancel={handleCancelDeleting}
        handleConfirm={handleConfirmDeleting}
      />
    </div>
  );
};

export default GroupForm;
