import React from "react";
import { Button, Layout } from "antd";
import "./HeaderStyles.scss";
import { UserOutlined, ExportOutlined } from "@ant-design/icons";

interface propsHeader {
  logOut: () => void;
}

const HeaderComponent: React.FC<propsHeader> = (props) => {
  const { logOut } = props;
  const { Header } = Layout;
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
            onClick={logOut}
            icon={<ExportOutlined />}
          />
        </div>
      </div>
    </Header>
  );
};

export default HeaderComponent;
