export  default () =>( {
    email: (errors:any, values:any,touched:any) => {
        if (!values) {
            debugger
            errors.email = 'Эмаил указан не корректно';
        }  else if(touched) {
            errors.email = "Ви залилишили крим"
        }


    },
    password: (errors:any, values:any) => {
        if (!values) {
            errors.password ? "Не верный пароль" : 'Введите пароль';
        }
    }
})