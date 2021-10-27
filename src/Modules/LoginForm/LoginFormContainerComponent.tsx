import {FormikErrors, withFormik } from "formik";
import { setUserLogin } from "../../Redux/Reducers/userReducer";
import store from "../../Redux/Store";
import MyFormProps from "../../Types/IFormikType";
import validator from "../../Utils/validator";
import LoginFormComponent from "./LoginFormComponent";

interface FormValues {
        status: number
        history: any
}


const LoginFormContainerComponent = withFormik<FormValues, MyFormProps>({
    enableReinitialize: true,
    mapPropsToValues: () => ({
        email: '',
        password: '',
        rememberMe: false,
    }),
    validate: (values:MyFormProps) => {
        // let errors: FormikErrors<MyFormProps> = {};
        //
        // validator({ isAuth: true, values, errors });
        //
        // return errors;
    },


    handleSubmit: (values:MyFormProps, { setSubmitting,props}) => {
        // @ts-ignore
        store.dispatch(setUserLogin(values)).then( (status) => {
            if(status = 200) {
                props.history.push('/')
                setSubmitting(false)
            } else {
                setSubmitting(true)
            }
        })

    },


    displayName: "LoginForm"
    // @ts-ignore
})(LoginFormComponent)




export default LoginFormContainerComponent

