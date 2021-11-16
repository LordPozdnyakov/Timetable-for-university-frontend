import React, { useState } from "react";
import { Upload, message, Button } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { useTypedDispatch } from "../../hooks/redux-hooks";
import { setDownloadStudentFile } from "../../Redux/Actions";

const DownloadStudentsComponent: React.FC = () => {
  const dispatch = useTypedDispatch();

  const props = {
    name: "file",
    action: "https://jsonplaceholder.typicode.com/posts",
    // @ts-ignore
    onChange({ file, fileList }) {
      let uploading = false;
      if (file.status === "uploading") {
        if (uploading) {
          message.loading("loading");
        }
        uploading = true;
      }
      if (file.status === "done") {
        message.success(`Студенты были успешно загружены`);
      } else if (file.status === "error") {
        message.error(`Ошибка загрузки файла ${file.name}`);
      }
    },
  };
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
};

export default DownloadStudentsComponent;
