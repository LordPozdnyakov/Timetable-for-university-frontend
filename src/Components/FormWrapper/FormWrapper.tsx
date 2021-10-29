import React from 'react';
import './FormWrapperStyles.scss';

// @ts-ignore
const FormWrapper = ({ children }) => {
	return <div className="wrapper__form-block">{children}</div>;
};

export default FormWrapper;
