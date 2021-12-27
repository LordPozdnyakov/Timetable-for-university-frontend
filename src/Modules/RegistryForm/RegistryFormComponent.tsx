import React, { useState } from "react";
import { Link, RouteComponentProps, withRouter } from "react-router-dom";
import { Form, Space, Spin, Select, Input } from "antd";
import { useFormik, FormikProps } from "formik";
import FormWrapper from "../../Components/FormWrapper/FormWrapper";
import { validateField } from "../../Utils/helpers/validateField";
import { useTypedDispatch, useTypedSelector } from "../../hooks/redux-hooks";
import FormikValues from "./FormikValues";
import { UserAddOutlined } from "@ant-design/icons";
import { registrationSchema } from "../../Utils/validator";
import { ButtonComponent } from "../../Components";
import { registerUser } from "../../Redux/Actions/registerUser";
import RegUserFormInfo from "../../Types/RegStudentInfo";

interface registryType<Values = FormikValues> extends RouteComponentProps {
  initialValues: Values;
}

const initialState: RegUserFormInfo = {
  privilage: "",
  firstName: "",
  lastName: "",
  patronymic: "",
  phoneNumber: "",
  email: "",
  password: "",
  passwordConfirmation: "",
  address: "",
  fullName: {},
};

const RegistryFormComponent: React.FC<registryType> = () => {
  let [user, setUser] = useState<RegUserFormInfo>(initialState);
  const { Option } = Select;
  const { loading } = useTypedSelector((state) => state.registrationSlice);
  const dispatch = useTypedDispatch();
  const layout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 30 },
  };
  const tailLayout = {
    wrapperCol: { offset: 0, span: 30 },
  };
  const {
    firstName,
    lastName,
    patronymic,
    phoneNumber,
    email,
    password,
    passwordConfirmation,
    address,
  } = user;

  const [privilage, setPrivilage] = useState("");

  const formik: FormikProps<FormikValues> = useFormik<FormikValues>({
    enableReinitialize: true,
    initialValues: {
      privilage: privilage,
      email: email,
      password: password,
      passwordConfirmation,
      firstName: firstName,
      lastName: lastName,
      patronymic: patronymic,
      address: address,
      phoneNumber: phoneNumber,
    },
    validationSchema: registrationSchema,
    onSubmit: async (values, { setSubmitting }) => {
      let newValues = { ...values };
      delete newValues.firstName;
      delete newValues.lastName;
      delete newValues.patronymic;
      newValues["fullName"] = {
        firstName: values.firstName,
        lastName: values.lastName,
        patronymic: values.patronymic,
      };
      console.log(newValues);
      const status = await dispatch(
        registerUser(newValues, "api/v1/auth/register")
      );
      console.log(values);
      if (status === 200) {
        window.location.replace("/");
      } else {
        setSubmitting(true);
      }
    },
  });

  const handleChangePrivilage = (privilage: string) => {
    formik.errors.privilage = "";
  };

  const {
    touched,
    errors,
    handleBlur,
    handleChange,
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
    <div className="wrapper__form wrapper__form-regPage">
      <FormWrapper>
        <span className="wrapper__form-icon">
          <UserAddOutlined className="wrapper__form-icon-i" />
        </span>
        <h3>Реєстрація</h3>
        <Form {...layout} name="LoginForm">
          <Form.Item name="privilage">
            <div>
              <Select
                className="leftSideText"
                placeholder={"Оберіть роль"}
                value={formik.values.privilage}
                onSelect={(selectedOption: string) => {
                  setPrivilage(selectedOption);
                  handleChangePrivilage(selectedOption);
                }}
              >
                <Option value="student">Студент</Option>
                <Option value="teacher">Вчитель</Option>
              </Select>
              {formik.errors.privilage && (
                <div className="error-message">{formik.errors.privilage}</div>
              )}
            </div>
          </Form.Item>
          <Form.Item
            name="email"
            hasFeedback
            validateStatus={validateField("email", touched, errors)}
          >
            <Input
              size={"large"}
              placeholder="Email"
              onChange={handleChange}
              onBlur={handleBlur}
              id="email"
              value={formik.values.email}
            ></Input>
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
              placeholder="Пароль"
              onChange={formik.handleChange}
              type="password"
              onBlur={formik.handleBlur}
              id="password"
              value={formik.values.password}
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
              placeholder="Підтвердження паролю"
              onChange={formik.handleChange}
              type="password"
              onBlur={formik.handleBlur}
              id="passwordConfirmation"
              value={formik.values.passwordConfirmation}
            />
          </Form.Item>
          {errors.passwordConfirmation && touched.passwordConfirmation && (
            <div className="wrapper__form-error">
              {errors.passwordConfirmation}
            </div>
          )}
          <Form.Item>
            <Input
              id="firstName"
              placeholder="Ім'я"
              value={formik.values.firstName}
              onChange={formik.handleChange}
            />
            {formik.errors.firstName && (
              <div className="error-message">{formik.errors.firstName}</div>
            )}
          </Form.Item>
          <Form.Item>
            <Input
              id="lastName"
              placeholder="Прізвище"
              value={formik.values.lastName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.errors.lastName && (
              <div className="error-message">{formik.errors.lastName}</div>
            )}
          </Form.Item>
          <Form.Item>
            <Input
              id="patronymic"
              value={formik.values.patronymic}
              onChange={formik.handleChange}
              placeholder="По батькові"
            />
            {formik.errors.patronymic && (
              <div className="error-message">{formik.errors.patronymic}</div>
            )}
          </Form.Item>
          <Form.Item>
            <Input
              id="address"
              placeholder="Місце проживання"
              className="form__input"
              onChange={formik.handleChange}
              value={formik.values.address}
            />
          </Form.Item>
          <Form.Item>
            <Input
              id="phoneNumber"
              className="form__input"
              placeholder="Номер телефону"
              onChange={formik.handleChange}
              value={formik.values.phoneNumber}
            />
          </Form.Item>
          <Form.Item {...tailLayout}>
            <ButtonComponent
              type="submit"
              htmltype="submit"
              onClick={handleSubmit}
              disabled={isSubmitting}
            >
              Зареєструватися
            </ButtonComponent>
          </Form.Item>
          <Form.Item>
            <div>
              <Link to={"/login"}>Вже маєте аккаунт?</Link>
            </div>
          </Form.Item>
        </Form>
      </FormWrapper>
    </div>
  );
};

export default withRouter(RegistryFormComponent);
