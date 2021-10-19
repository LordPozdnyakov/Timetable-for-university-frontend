import React from 'react';
import "./HeaderStyles.scss"
import {UserOutlined,ExportOutlined } from "@ant-design/icons";

const HeaderComponent = () => {
    return (
        <header className="header">
            <div className="header__page">
                Главная
            </div>
            <div className="header__navigate">
                <div className="header__navigate-user">
                    <UserOutlined />
                </div>
                <div className="header__navigate-logout">
                    <ExportOutlined />
                </div>
            </div>
        </header>
    );
};

export default HeaderComponent;