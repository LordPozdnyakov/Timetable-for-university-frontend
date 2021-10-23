import { LockOutlined } from '@ant-design/icons';
import {Form, Input, Checkbox} from 'antd';
import React from 'react';
import {Link} from 'react-router-dom';
import ButtonComponent from '../../Components/Button/ButtonComponent';
import FormWrapper from '../../Components/FormWrapper/FormWrapper';
import "./LoginFormStyles.scss"

const LoginFormComponent = (props:any) => {
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
    // @ts-ignore
    return (
        <div className="wrapper__form">
            <FormWrapper>
                <span className="wrapper__form-icon">
                    <LockOutlined className="wrapper__form-icon-i" />
                </span>
                <p>Увійти</p>
                <Form
                    {...layout}
                    name="LoginForm"
                    // @ts-ignore
                    onSubmit={handleSubmit}
                >
                    <Form.Item
                        name="email"
                        hasFeedback
                        // @ts-ignore
                        // validateStatus={validateField('email', touched, errors)}
                    >

                        <Input size={"large"} placeholder="Введите логин" onChange={handleChange} onBlur={handleBlur}
                               id='email' value={values.name}/>
                    </Form.Item>


                    <Form.Item
                        name="password"
                        // @ts-ignore
                        // validateStatus={validateField('password', touched, errors)}
                    >
                        <Input size={"large"} placeholder="Введите пароль" onChange={handleChange}
                               onBlur={handleBlur} id='password' value={values.password}/>
                    </Form.Item>
                    <Form.Item
                        name="rememberMe"
                        // @ts-ignore
                        // validateStatus={validateField('password', touched, errors)}
                    >
                        <div className="checkbox">
                            <div><Checkbox onChange={handleChange} id='rememberMe' value={values.rememberMe} /></div>
                            <div><p>Запам’ятати мене</p></div>
                        </div>
                    </Form.Item>

                    <Form.Item {...tailLayout}>

                        <ButtonComponent  type="primary" htmlType="submit" onClick={handleSubmit} disabled={isSubmitting}>
                            Увійти
                        </ButtonComponent>
                    </Form.Item>
                    <Link to={'/recovery'} className={'auth__link-registered'}>Забули пароль?</Link>
                </Form>
            </FormWrapper>
        </div>
    );
};

export default LoginFormComponent;