import React from 'react';

import "./SidebarStyles.scss"

import { NavLink } from 'react-router-dom'

import { Menu } from 'antd';
import {  UserOutlined , TeamOutlined,SolutionOutlined,BookFilled,ReadFilled,FieldTimeOutlined} from '@ant-design/icons';

const { SubMenu } = Menu;


const SidebarComponent = () => {
    return (
        <section className="sidebar">
            <Menu

                style={{ width: 270, backgroundColor: "#7986CB" }}
                defaultSelectedKeys={['0']}
                defaultOpenKeys={['sub1']}
                theme="dark"
                mode="inline"
            >
                <SubMenu className="sidebar__item" key="sub1" icon={<UserOutlined className="sidebar__icon" />} title="Студенти">
                    <Menu.Item className="sidebar__item" key="1" ><NavLink to="/students">Всі студенти</NavLink></Menu.Item>
                        <Menu.Item className="sidebar__item" key="2">Додати студента</Menu.Item>
                </SubMenu>
                <SubMenu className="sidebar__item" key="sub2" icon={<TeamOutlined className="sidebar__icon" />} title="Групи">
                    <Menu.Item className="sidebar__item" key="3">Next Update</Menu.Item>
                    <Menu.Item className="sidebar__item" key="4">Next Update</Menu.Item>
                </SubMenu>
                <SubMenu className="sidebar__item" key="sub3" icon={<SolutionOutlined className="sidebar__icon" />} title="Викладачі">
                    <Menu.Item className="sidebar__item" key="5"><NavLink to="/teachers">Всі викладачі</NavLink></Menu.Item>
                </SubMenu>
                <SubMenu className="sidebar__item" key="sub4" icon={<BookFilled className="sidebar__icon" />} title="Предмети">
                    <Menu.Item className="sidebar__item" key="6">Next Update</Menu.Item>
                </SubMenu>
                <SubMenu className="sidebar__item" key="sub5" icon={<ReadFilled className="sidebar__icon"/>} title="Дисципліни">
                    <Menu.Item className="sidebar__item" key="7">Next Update</Menu.Item>
                </SubMenu>
                <SubMenu className="sidebar__item" key="sub6" icon={<FieldTimeOutlined className="sidebar__icon" />} title="Навантаження">
                    <Menu.Item className="sidebar__item" key="8">Next Update</Menu.Item>
                </SubMenu>
            </Menu>
        </section>
    );
};

export default SidebarComponent;