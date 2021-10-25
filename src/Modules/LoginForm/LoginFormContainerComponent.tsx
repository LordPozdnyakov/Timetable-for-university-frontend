import { withFormik } from "formik";
import { setUserLogin } from "../../Redux/Reducers/userReducer";
import store from "../../Redux/Store";
import validator from "../../Utils/validator";
import LoginFormComponent from "./LoginFormComponent";




const LoginFormContainerComponent = withFormik({
    enableReinitialize: true,
    mapPropsToValues: () => ({
        email: '',
        password: '',
        rememberMe: false,
    }),
    validate: values => {
        // let errors = {};
        //
        // validator({ isAuth: true, values, errors });
        //
        // return errors;
    },


    handleSubmit: (values, { setSubmitting,props}) => {
        // @ts-ignore
        store.dispatch(setUserLogin(values))
        // @ts-ignore
        // props.history.push("/")

    },


    displayName: "LoginForm"
})(LoginFormComponent)




export default LoginFormContainerComponent

