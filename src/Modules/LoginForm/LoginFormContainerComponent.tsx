import { withFormik } from "formik";
import { setUserLogin } from "../../Redux/Reducers/userReducer";
import store from "../../Redux/Store";
import LoginFormComponent from "./LoginFormComponent";




const LoginFormContainerComponent = withFormik({
    mapPropsToValues: () => ({
        email: '',
        password: '',
        rememberMe: false,
    }),


    handleSubmit: (values, { setSubmitting,props}) => {
        // @ts-ignore
        store.dispatch(setUserLogin(values))
        // @ts-ignore
        props.history.push("/")

    },


    displayName: "LoginForm"
})(LoginFormComponent)




export default LoginFormContainerComponent