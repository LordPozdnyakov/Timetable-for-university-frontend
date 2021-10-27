import {FormikErrors, withFormik } from "formik";
import { setUserLogin } from "../../Redux/Reducers/userReducer";
import store from "../../Redux/Store";
import MyFormProps from "../../Types/IFormikType";
import validator from "../../Utils/validator";
import LoginFormComponent from "./LoginFormComponent";

interface FormValues {

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
        store.dispatch(setUserLogin(values))
        // @ts-ignore
        // props.history.push("/")

    },


    displayName: "LoginForm"
    // @ts-ignore
})(LoginFormComponent)




export default LoginFormContainerComponent

