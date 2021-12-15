import * as Yup from "yup";

export const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email("Введіть коректне email")
    .required(`Це поле обов'язковое`),
  password: Yup.string()
    .required(`Це поле обов'язковое`)
    .min(7, "Пароль має бути 7 символів"),
});

export const recoverySchema = Yup.object().shape({
  email: Yup.string()
    .email("Введіть коректний email")
    .required(`Це поле обов'язковое`),
});

export const recoveryPasswordSchema = Yup.object().shape({
  password: Yup.string()
    .required(`Це поле обов'язковое`)
    .min(7, "Пароль має бути не маньше 7 символів"),
  confirmPassword: Yup.string()
    .required(`Це поле обов'язковое`)
    .oneOf([Yup.ref("password"), null], "Паролі повинні співпадати"),
});

export const registrationSchema = Yup.object().shape({
  privilage: Yup.string().required("Це поле обов'язковое"),
});
