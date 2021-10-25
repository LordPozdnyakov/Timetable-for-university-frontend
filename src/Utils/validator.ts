// @ts-ignore
export default ({ isAuth, values, errors }) => {
    const rules = {
        email: (value: string) => {
            if (!value) {
                errors.email = "Введите E-Mail";
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
                errors.email = "Неверный E-Mail";
            }
        },
        password: (value: string) => {
            if (!value) {
                errors.password = "Введите пароль";
            } else if (
                !isAuth &&
                !/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/.test(value)
            ) {
                errors.password = "Слишком лёгкий пароль";
            }
        },
        fullname: (value: any) => {
            if (!isAuth && !value) {
                errors.fullname = "Укажите свое имя и фамилию";
            }
        }
    };

    // @ts-ignore
    Object.keys(values).forEach(key => rules[key] && rules[key](values[key]));
};