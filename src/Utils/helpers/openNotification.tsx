import { notification } from "antd";

type Notification = {
  text: string;
  title: string;
  type: any;
};

export const openNotification: (arg0: Notification) => void = ({
  text,
  type,
  title,
}) =>
  notification.open({
    message: title,
    description: text,
    type: type,
  });
