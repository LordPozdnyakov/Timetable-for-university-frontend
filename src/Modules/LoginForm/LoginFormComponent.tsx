import React from "react";
import { Link } from "react-router-dom";
import { LockOutlined } from "@ant-design/icons";
import { Form, Input, Checkbox } from "antd";
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
      password: "",
      rememberMe: false,
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
        <h3>Увійти</h3>
        <Form
          {...layout}
          name="LoginForm"
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
          <Form.Item name="rememberMe" valuePropName="checked">
            <div className="checkbox">
              <div>
                <Checkbox
                  onChange={handleChange}
                  id="rememberMe"
                  value={values.rememberMe}
                />
              </div>
              <div>
                <p>Запам’ятати мене</p>
              </div>
            </div>
          </Form.Item>
          <Form.Item {...tailLayout}>
            <ButtonComponent
              type="primary"
              htmltype="submit"
              onClick={handleSubmit}
              disabled={isSubmitting}
            >
              Увійти
            </ButtonComponent>
          </Form.Item>
          <Link to={"/recovery"}>Забули пароль?</Link>
        </Form>
      </FormWrapper>
    </div>
  );
};

export default LoginFormComponent;
