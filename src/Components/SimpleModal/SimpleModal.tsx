import React, { FC } from "react";
import { Button, Modal } from "antd";
import "./SimpleModal.scss";

type SimpleModalProps = {
  title: string;
  content: string;
  isModalVisible: boolean;
  hideModal: () => void;
  handleNo: () => void;
  handleYes: () => void;
};

const SimpleModal: FC<SimpleModalProps> = ({
  title,
  content,
  isModalVisible,
  hideModal,
  handleNo,
  handleYes,
}) => {
  return (
    <Modal
      onCancel={hideModal}
      visible={isModalVisible}
      title={title}
      footer={[
        <Button
          type="link"
          onClick={handleNo}
          className="simple-modal__btn-no"
          key="modal-btn-no"
        >
          Ні
        </Button>,
        <Button
          type="link"
          onClick={handleYes}
          className="simple-modal__btn-yes"
          key="modal-btn-yes"
        >
          Так
        </Button>,
      ]}
    >
      <p>{content}</p>
    </Modal>
  );
};

export default SimpleModal;
