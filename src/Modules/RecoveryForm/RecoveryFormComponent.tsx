import React from "react";
import { Link } from "react-router-dom";
import { LockOutlined } from "@ant-design/icons";
import { Form, Input } from "antd";
import { useFormik } from "formik";
import ButtonComponent from "../../Components/Button/ButtonComponent";
import FormWrapper from "../../Components/FormWrapper/FormWrapper";
import { setUserLogin } from "../../Redux/Reducers/userReducer";
import validateField from "../../Utils/helpers/validateField";
import { useDispatch } from "react-redux";
import { LoginSchema } from "../../Utils/validator";

const LoginFormComponent = (props: any) => {
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
      email: "",
    },
    validationSchema: LoginSchema,
    onSubmit: (values, { setSubmitting }) => {
      // @ts-ignore
      dispatch(setUserLogin(values)).then((status) => {
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
        <h3>Відновлення</h3>
        <Form
          {...layout}
          name="RecoveryForm"
          // @ts-ignore
          onSubmit={handleSubmit}
        >
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
      </FormWrapper>
    </div>
  );
};

export default LoginFormComponent;
