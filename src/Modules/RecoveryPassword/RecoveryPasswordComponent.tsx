import React from "react";
import { Link } from "react-router-dom";
import { LockOutlined } from "@ant-design/icons";
import { Form, Input } from "antd";
import { useFormik } from "formik";
import ButtonComponent from "../../Components/Button/ButtonComponent";
import FormWrapper from "../../Components/FormWrapper/FormWrapper";

import { validateField } from "../../Utils/helpers/validateField";
import { useDispatch } from "react-redux";
import { LoginSchema } from "../../Utils/validator";
import { setLogin } from "../../Redux/Actions/setLogin";

const RecoveryPasswordComponent = (props: any) => {
  const dispatch = useDispatch();
  const layout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 30 },
  };
  const tailLayout = {
    wrapperCol: { offset: 0, span: 30 },
  };

  const formik = useFormik({
    initialValues: {
      password: "",
      passwordConfirmation: "",
    },
    validationSchema: LoginSchema,
    onSubmit: (values, { setSubmitting }) => {
      // @ts-ignore
      dispatch(setLogin(values)).then((status) => {
        if ((status = 200)) {
          props.history.push("/");
          setSubmitting(false);
        } else {
          setSubmitting(true);
        }
      });
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

  return (
    <div className="wrapper__form">
      <FormWrapper>
        <span className="wrapper__form-icon">
          <LockOutlined className="wrapper__form-icon-i" />
        </span>
        <h3>Зміна паролю</h3>
        <Form
          {...layout}
          name="LoginForm"
          // @ts-ignore
          onSubmit={handleSubmit}
        >
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
              value={values.passwordConfirmation}
            />
          </Form.Item>
          {errors.passwordConfirmation && touched.passwordConfirmation && (
            <div className="wrapper__form-error">
              {errors.passwordConfirmation}
            </div>
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
      </FormWrapper>
    </div>
  );
};

export default RecoveryPasswordComponent;
