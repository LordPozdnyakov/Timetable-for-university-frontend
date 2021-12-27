import React from "react";
import { Link, RouteComponentProps, withRouter } from "react-router-dom";
import { LockOutlined } from "@ant-design/icons";
import { Form, Input, Checkbox, Space, Spin } from "antd";
import { useFormik, FormikProps } from "formik";
import ButtonComponent from "../../Components/Button/ButtonComponent";
import FormWrapper from "../../Components/FormWrapper/FormWrapper";
import { validateField } from "../../Utils/helpers/validateField";
import { LoginSchema } from "../../Utils/validator";
import { useTypedDispatch, useTypedSelector } from "../../hooks/redux-hooks";
import { setLogin } from "../../Redux/Actions/setLogin";

import { FormikValues } from "..";

interface logginType<Values = FormikValues> extends RouteComponentProps {
  initialValues: Values;
}

const LoginFormComponent: React.FC<logginType> = () => {
  const dispatch = useTypedDispatch();
  const { loading, error } = useTypedSelector((state) => state.loginSlice);
  const layout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 30 },
  };
  const tailLayout = {
    wrapperCol: { offset: 0, span: 30 },
  };

  const formik: FormikProps<FormikValues> = useFormik<FormikValues>({
    enableReinitialize: true,
    initialValues: {
      email: "",
      password: "",
      rememberMe: false,
    },
    validationSchema: LoginSchema,
    onSubmit: async (values, { setSubmitting }) => {
      const status = await dispatch(setLogin(values, "api/v1/auth/login"));
      if (status === 200) {
        window.location.replace("/");
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
        <h3>Увійти</h3>
        <Form {...layout} name="LoginForm" onFinish={handleSubmit}>
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
                  checked={values.rememberMe}
                />
              </div>
              <div>
                <p>Запам’ятати мене</p>
              </div>
            </div>
          </Form.Item>
          <Form.Item {...tailLayout}>
            <ButtonComponent
              type="submit"
              htmltype="submit"
              onClick={handleSubmit}
              disabled={isSubmitting}
            >
              Увійти
            </ButtonComponent>
          </Form.Item>
          <div className="links">
            <Link to={"/recovery"}>Забули пароль?</Link>
            <Link to={"/registration"}>Реєстрація</Link>
          </div>
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

export default withRouter(LoginFormComponent);
