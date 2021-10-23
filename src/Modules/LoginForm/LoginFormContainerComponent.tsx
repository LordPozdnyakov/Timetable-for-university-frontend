import { withFormik } from "formik";
import LoginFormComponent from "./LoginFormComponent";




const LoginFormContainerComponent = withFormik({
    mapPropsToValues: () => ({
        email: '',
        password: '',
        rememberMe: false,
    }),


    handleSubmit: (values, { setSubmitting,props}) => {
        alert(values.email)
        setSubmitting(false)
    },


    displayName: "LoginForm"
})(LoginFormComponent)




export default LoginFormContainerComponent