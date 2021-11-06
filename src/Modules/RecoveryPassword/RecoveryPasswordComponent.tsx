import React from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import { LockOutlined } from "@ant-design/icons";
import { Form, Input, Space, Spin } from "antd";
import { useFormik } from "formik";
import ButtonComponent from "../../Components/Button/ButtonComponent";
import FormWrapper from "../../Components/FormWrapper/FormWrapper";
import { validateField } from "../../Utils/helpers/validateField";
import { useTypedDispatch, useTypedSelector } from "../../hooks/redux-hooks";
import { recoveryPasswordSchema } from "../../Utils/validator";
import { setRecoveryPassword } from "../../Redux/Actions/setRecoveryPassword";

const RecoveryPasswordComponent = () => {
  const { loading, error } = useTypedSelector(
    (state) => state.RecoveryPasswordSlice
  );
  const location = useLocation();
  const dispatch = useTypedDispatch();
  const history = useHistory();
  const layout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 30 },
  };
  const tailLayout = {
    wrapperCol: { offset: 0, span: 30 },
  };
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      token: location.search.split("=")[1],
      password: "",
      confirmPassword: "",
    },
    validationSchema: recoveryPasswordSchema,
    onSubmit: async (values, { setSubmitting }) => {
      const status = await dispatch(
        setRecoveryPassword(values, "reset-password")
      );
      if (status === 200) {
        history.push("/login");
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
        <h3>Зміна паролю</h3>
        <Form {...layout} name="LoginForm" onFinish={handleSubmit}>
          <Form.Item
            name="password"
            hasFeedback
            validateStatus={validateField("password", touched, errors)}
          >
            <Input.Password
              size={"large"}
              placeholder="Пароль *"
              onChange={handleChange}
              type="password"
              onBlur={handleBlur}
              id="password"
              value={values.password}
            />
          </Form.Item>
          {errors.password && touched.password && (
            <div className="wrapper__form-error">{errors.password}</div>
          )}
          <Form.Item
            name="passwordConfirmation"
            hasFeedback
            validateStatus={validateField(
              "passwordConfirmation",
              touched,
              errors
            )}
          >
            <Input.Password
              size={"large"}
              placeholder="Пароль *"
              onChange={handleChange}
              type="password"
              onBlur={handleBlur}
              id="passwordConfirmation"
              value={values.confirmPassword}
            />
          </Form.Item>
          {errors.confirmPassword && touched.confirmPassword && (
            <div className="wrapper__form-error">{errors.confirmPassword}</div>
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

export default RecoveryPasswordComponent;
