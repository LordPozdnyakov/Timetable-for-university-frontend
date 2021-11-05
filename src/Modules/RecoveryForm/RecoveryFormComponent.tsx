import React from "react";
import { Link } from "react-router-dom";
import { LockOutlined } from "@ant-design/icons";
import { Form, Input, Space, Spin } from "antd";
import { useFormik } from "formik";
import ButtonComponent from "../../Components/Button/ButtonComponent";
import FormWrapper from "../../Components/FormWrapper/FormWrapper";
import { validateField } from "../../Utils/helpers/validateField";
import { recoverySchema } from "../../Utils/validator";
import { SetRecoveryEmail } from "../../Redux/Actions/setRecoveryEmail";
import { useTypedDispatch, useTypedSelector } from "../../hooks/redux-hooks";

const RecoveryFormComponent = (props: any) => {
  const dispatch = useTypedDispatch();
  const { loading, error } = useTypedSelector((state) => state.recoverySlice);
  const layout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 30 },
  };
  const tailLayout = {
    wrapperCol: { offset: 0, span: 30 },
  };

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: recoverySchema,
    onSubmit: async (values, { setSubmitting }) => {
      const status = await dispatch(
        SetRecoveryEmail(values, "forgot-password")
      );
      if (status === 200) {
        setSubmitting(true);
      } else {
        setSubmitting(true);
      }
    },
  });
  const {
    touched,
    errors,
    handleBlur,
    handleChange,
    values,
    handleSubmit,
    isSubmitting,
  } = formik;
  if (loading) {
    return (
      <div className="wrapper__form">
        <Space size="middle">
          <Spin size="large" />
        </Space>
      </div>
    );
  }

  return (
    <div className="wrapper__form">
      <FormWrapper>
        <span className="wrapper__form-icon">
          <LockOutlined className="wrapper__form-icon-i" />
        </span>
        <h3>Відновлення</h3>
        <Form {...layout} name="RecoveryForm" onFinish={handleSubmit}>
          <Form.Item
            name="email"
            hasFeedback
            validateStatus={validateField("email", touched, errors)}
          >
            <Input
              size={"large"}
              placeholder="Email *"
              onChange={handleChange}
              onBlur={handleBlur}
              id="email"
              value={values.email}
            />
          </Form.Item>
          {errors.email && touched.email && (
            <div className="wrapper__form-error">{errors.email}</div>
          )}
          <Form.Item {...tailLayout}>
            <ButtonComponent
              type="primary"
              htmltype="submit"
              onClick={handleSubmit}
              disabled={isSubmitting}
            >
              Відновити
            </ButtonComponent>
          </Form.Item>
          <Link to={"/login"}>Згадали пароль?</Link>
        </Form>
        {error ? (
          <div className="wrapper__form-global-error">{error}</div>
        ) : (
          <></>
        )}
      </FormWrapper>
    </div>
  );
};

export default RecoveryFormComponent;
