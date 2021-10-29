import { withFormik } from "formik";

import RecoveryFormComponent from "./RecoveryFormComponent";

const RecoveryFormContainerComponent = withFormik({
  // @ts-ignore
  mapPropsToValues: () => ({
    email: "",
  }),
  validate: (values) => {
    let errors = {};

    return errors;
  },

  handleSubmit: (values, { setSubmitting, props }) => {
    alert(values.email);
  },

  displayName: "RecoveryForm",
})(RecoveryFormComponent);

export default RecoveryFormContainerComponent;
