import { notification } from 'antd';



// @ts-ignore
export default  ({text,type='info',title}) => notification.open({
    message: title,
    description: text
});