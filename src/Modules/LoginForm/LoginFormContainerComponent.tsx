import { withFormik } from "formik";
import { Redirect } from "react-router-dom";
import LoginFormComponent from "./LoginFormComponent";




const LoginFormContainerComponent = withFormik({
    mapPropsToValues: () => ({
        email: '',
        password: '',
        rememberMe: false,
    }),


    handleSubmit: (values, { setSubmitting,props}) => {
        debugger
        alert(values.email)
        setSubmitting(false)

        // @ts-ignore
        props.history.push("/")

    },


    displayName: "LoginForm"
})(LoginFormComponent)




export default LoginFormContainerComponent