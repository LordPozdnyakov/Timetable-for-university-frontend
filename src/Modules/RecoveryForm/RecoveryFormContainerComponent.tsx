import { withFormik } from 'formik';

import RecoveryFormComponent from "./RecoveryFormComponent"


const RecoveryFormContainerComponent = withFormik({
    // @ts-ignore
    mapStateToProps: () => ({
        email: ""
    }),

    handleSubmit: (values, { setSubmitting,props}) => {
        alert(values.email)
    },


    displayName: "RecoveryForm"
})(RecoveryFormComponent)

export default RecoveryFormContainerComponent;