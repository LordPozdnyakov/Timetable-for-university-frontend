import React, { useState } from "react";
import { Button, Layout, Modal } from "antd";
import "./HeaderStyles.scss";
import { UserOutlined, ExportOutlined } from "@ant-design/icons";

interface propsHeader {
  logOut: () => void;
}

const HeaderComponent: React.FC<propsHeader> = (props) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const { logOut } = props;
  const { Header } = Layout;
  const handle = () => {
    setIsModalVisible(!isModalVisible);
  };

  return (
    <Header className="header">
      <div className="header__page">Главная</div>
      <div className="header__navigate">
        <div className="header__navigate-user">
          <Button shape="circle" type="primary" icon={<UserOutlined />} />
        </div>
        <div className="header__navigate-logout">
          <Button
            shape="circle"
            type="primary"
            onClick={handle}
            icon={<ExportOutlined />}
          />
          <Modal
            title="Вийди звідси, Розбійник!"
            visible={isModalVisible}
            onOk={logOut}
            onCancel={handle}
          >
            <p>Ви дійсно бажаєті покинути цей бездоганний додаток?</p>
          </Modal>
        </div>
      </div>
    </Header>
  );
};

export default HeaderComponent;
