import React from 'react';
import {Button, Modal} from 'antd';
import './SimpleModal.scss';
import ISimpleModalProps from "../Types/ISimpleModalProps";

const SimpleModal = ({
                       title,
                       content,
                       isModalVisible,
                       hideModal,
                       handleNo,
                       handleYes
                     }: ISimpleModalProps) => {

  return (
    <Modal
      onCancel={hideModal}
      visible={isModalVisible}
      title={title}
      footer={[
        <Button type='link' onClick={handleNo} className='simple-modal__btn-no' key='modal-btn-no'>
          Ні
        </Button>,
        <Button type='link' onClick={handleYes} className='simple-modal__btn-yes' key='modal-btn-yes'>
          Так
        </Button>
      ]}
    >
      <p>{content}</p>
    </Modal>
  );
};

export default SimpleModal;