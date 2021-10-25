import { LockOutlined } from '@ant-design/icons';
import { Form, Input } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';
import ButtonComponent from '../../Components/Button/ButtonComponent';
import FormWrapper from '../../Components/FormWrapper/FormWrapper';
import validateField from '../../Utils/helpers/validateField';

const RecoveryFormComponent = (props:any) => {
    const layout = {
        labelCol: {span: 4},
        wrapperCol: {span: 30},
    };
    const tailLayout = {
        wrapperCol: {offset: 0, span: 30},
    };
    const {
        values,
        touched,
        errors,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        history,
        isAuth
    } = props;
    // @ts-ignore
    return (
        <div className="wrapper__form">
            <FormWrapper>
                <span className="wrapper__form-icon">
                    <LockOutlined className="wrapper__form-icon-i" />
                </span>
                <h3>Відновлення паролю</h3>
                <p>Введіть e-mail, на який буде надіслан інструкцію щодо відновлення пароля</p>
                <Form
                    {...layout}
                    name="RecoveryForm"
                    // @ts-ignore
                    onSubmit={handleSubmit}
                >
                    <Form.Item
                        name="email"
                        hasFeedback
                        validateStatus={validateField('email', touched, errors)}
                    >
                        <Input size={"large"} placeholder="Email*" onChange={handleChange} onBlur={handleBlur}
                               id='email' value={values.name}/>
                    </Form.Item>
                    {errors.email && touched.email && <div className="wrapper__form-error" >{errors.email}</div>}
                    <Form.Item {...tailLayout}>
                        <ButtonComponent  type="primary" htmlType="submit" onClick={handleSubmit} disabled={isSubmitting}>
                            Надіслати
                        </ButtonComponent>
                    </Form.Item>
                    <Link to={'/login'} >Згадали пароль?</Link>
                </Form>
            </FormWrapper>
        </div>
    );
};

export default RecoveryFormComponent;