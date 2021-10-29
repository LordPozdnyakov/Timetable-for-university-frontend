import * as Yup from "yup";

export const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email("Введіть коректне мило")
    .required(`Це поле обов'язковое`),
  password: Yup.string()
    .required(`Це поле обов'язковое`)
    .min(7, "Пароль має бути 7 символів"),
  passwordConfirmation: Yup.string()
    .required(`Це поле обов'язковое`)
    .oneOf([Yup.ref("password"), null], "Пароли повинні співпадати"),
});
