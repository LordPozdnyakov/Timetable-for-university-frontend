import { withFormik } from "formik";
import LoginFormComponent from "./LoginFormComponent";



const LoginFormContainerComponent = withFormik({
    mapPropsToValues: () => ({
        email: '',
        password: ''
    }),


    handleSubmit: (values, { setSubmitting,props}) => {
        // store.dispatch(UsserAction.fetchUserLogin(values)).then(({status}) =>{
        //     if (status === 'success') {
        //         props.props.history.push('/')
        //     }
        //     setSubmitting(false)
        // })
    },


    displayName: "LoginForm"
})(LoginFormComponent)




export default LoginFormContainerComponent