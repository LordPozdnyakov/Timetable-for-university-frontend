import React, { useState } from "react";
import { Upload, message, Button } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { useTypedDispatch } from "../../hooks/redux-hooks";

const DownloadStudentsComponent: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const dispatch = useTypedDispatch();

  const props = {
    name: "file",
    action: "https://jsonplaceholder.typicode.com/posts",
    // @ts-ignore
    onChange({ file, fileList }) {
      if (file.status == "uploading") {
        debugger;
        setLoading(true);
      }
      if (file.status === "done") {
        setLoading(false);
        message.success(`Студенты были успешно загружены`);
      } else if (file.status === "error") {
        setLoading(false);
        message.error(`Ошибка загрузки файла ${file.name}`);
      }
    },
  };
  {
    loading &&
      message.loading("Загрузка файла.Дождитесь уведомления об окончании", 2);
    return (
      <>
        <Upload {...props} showUploadList={false}>
          <Button
            className="add-btn"
            type="primary"
            shape="circle"
            icon={<UploadOutlined />}
          />
        </Upload>
      </>
    );
  }
};
export default DownloadStudentsComponent;
