import React, { FC } from "react";
import { Button, Modal } from "antd";
import "./SimpleModal.scss";

type SimpleModalProps = {
  title: string;
  content: string;
  isModalVisible: boolean;
  hideModal: () => void;
  handleCancel: () => void;
  handleConfirm: () => void;
};

const SimpleModal: FC<SimpleModalProps> = ({
  title,
  content,
  isModalVisible,
  hideModal,
  handleCancel,
  handleConfirm,
}) => {
  return (
    <Modal
      onCancel={hideModal}
      visible={isModalVisible}
      title={title}
      footer={[
        <Button
          type="link"
          onClick={handleCancel}
          className="simple-modal__btn-cancel"
          key="modal-btn-no"
        >
          Ні
        </Button>,
        <Button
          type="link"
          onClick={handleConfirm}
          className="simple-modal__btn-confirm"
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
