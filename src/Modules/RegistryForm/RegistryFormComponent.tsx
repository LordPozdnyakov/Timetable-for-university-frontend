import React from "react";
import { Link, RouteComponentProps, withRouter } from "react-router-dom";
import { Form, Input, Space, Spin, Select } from "antd";
import { useFormik, FormikProps } from "formik";
import ButtonComponent from "../../Components/Button/ButtonComponent";
import FormWrapper from "../../Components/FormWrapper/FormWrapper";
import RegStudentForm from "../../Components/RegStudentForm/RegStudentFormComponent";
import RegTeacherForm from "../../Components/RegTeacherForm/RegTeacherFormComponent";
import { validateField } from "../../Utils/helpers/validateField";
import { LoginSchema } from "../../Utils/validator";
import { useTypedDispatch, useTypedSelector } from "../../hooks/redux-hooks";
import { setLogin } from "../../Redux/Actions/setLogin";

import { FormikValues } from "..";
import { render } from "react-dom";

interface logginType<Values = FormikValues> extends RouteComponentProps {
  initialValues: Values;
}

const RegistryFormComponent: React.FC<logginType> = () => {
  const { Option } = Select;
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
      const status = await dispatch(setLogin(values, "login"));
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
        <h3>Реєстрація</h3>
        <Form {...layout} name="LoginForm" onFinish={handleSubmit}>
          <Form.Item name="privilage">
            <div>
              <Select
                className="leftSideText"
                onSelect={(selectedOption) => {}}
              >
                <Option value="student">Student</Option>
                <Option value="teacher">Teacher</Option>
              </Select>
            </div>
          </Form.Item>
          {/* make a conditional operator with 2 components(RegStudentForm or RegTeacherForm) */}

          <Form.Item {...tailLayout}>
            <ButtonComponent
              type="submit"
              htmltype="submit"
              onClick={handleSubmit}
              disabled={isSubmitting}
            >
              Надіслати запит
            </ButtonComponent>
          </Form.Item>
          <Form.Item>
            <div>
              <Link to={"/login"}>Вже маєте аккаунт?</Link>
            </div>
          </Form.Item>
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

export default withRouter(RegistryFormComponent);
