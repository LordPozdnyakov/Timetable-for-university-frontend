import React from 'react';
import {Breadcrumb} from 'antd';
import {HomeFilled, UserOutlined} from '@ant-design/icons';
import {useLocation} from 'react-router-dom';
import './Breadcrumps.scss';

const pathnamesProperties = [
  {
    path: 'students',
    title: 'Студенти',
    icon: <UserOutlined/>
  },
  {
    path: 'teachers',
    title: 'Викладачі',
    icon: <UserOutlined/>
  }
]

const Breadcrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((p) => p);

  return (
    <Breadcrumb className='breadcrumps'>
      {
        pathnames.length > 0 ? (
          <Breadcrumb.Item href="/">
            <HomeFilled/>
            <span>Головна</span>
          </Breadcrumb.Item>
        ) : (
          <Breadcrumb.Item>
            <HomeFilled/>
            <span>Головна</span>
          </Breadcrumb.Item>
        )
      }
      {
        pathnames.map((path, index) => {
          const pathProperty = pathnamesProperties.find((pathProps) => path === pathProps.path);
          if (!pathProperty) return null;
          const {title, icon} = pathProperty;
          const isLastElem = index === pathnames.length - 1;
          const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;

          return isLastElem ? (
              <Breadcrumb.Item key={path}>
                {icon}
                <span>{title}</span>
              </Breadcrumb.Item>
          ) : (
            <Breadcrumb.Item key={path} href={routeTo}>
              {icon}
              <span>{title}</span>
            </Breadcrumb.Item>
          );
        })
      }
    </Breadcrumb>
  );
};

export default Breadcrumbs;