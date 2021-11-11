import React, { useState } from "react";
import { Upload, message, Button, Modal } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { useTypedDispatch } from "../../hooks/redux-hooks";
import { setDownloadStudentFile } from "../../Redux/Actions";

const DownloadStudentsComponent: React.FC = () => {
  const dispatch = useTypedDispatch();
  const [visible, setVisible] = React.useState(false);
  const [confirmLoading, setConfirmLoading] = React.useState(false);
  const [showMoldal, setShowModal] = useState(false);
  const [modalText, setModalText] = React.useState("Content of the modal");
  const showModal: () => void = () => {
    setVisible(true);
  };

  const handleOk: () => void = () => {
    setConfirmLoading(true);
    setModalText("The modal will be closed after two seconds");
    dispatch(setDownloadStudentFile({}));
  };

  const handleCancel: () => void = () => {
    console.log("Clicked cancel button");
    setVisible(false);
  };
  const props = {
    name: "file",
    action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
    headers: {
      authorization: "authorization-text",
    },
    onChange(info: any) {
      if (info.file.status !== "uploading") {
        console.log(info.file, info.fileList);
        setModalText("The modal will be closed after two seconds");
      }
      if (info.file.status === "done") {
        message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };
  return (
    <>
      <Button
        className="add-btn"
        type="primary"
        shape="circle"
        icon={<UploadOutlined />}
        onClick={showModal}
      />
      <Modal
        title="Завантажити студентів"
        visible={visible}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
        bodyStyle={{ textAlign: "center" }}
      >
        <Upload {...props}>
          <Button icon={<UploadOutlined />}>Click to Upload</Button>
        </Upload>
      </Modal>
    </>
  );
};

export default DownloadStudentsComponent;
