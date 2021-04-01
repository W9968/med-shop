import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import Brand from '../hero/Brand'
import { Menu } from 'antd'
import {
  StyledSider,
  Logo,
  LeftArrow,
  RightArrow,
} from '../../styles/Dashboard.element'

import {
  AppstoreAddOutlined,
  BookOutlined,
  UserOutlined,
  CreditCardOutlined,
  CustomerServiceOutlined,
  FileOutlined,
} from '@ant-design/icons'

const SideBar = ({ parent }) => {
  const { SubMenu } = Menu
  const [collapsed, setCollapsed] = useState(false)

  const items = [
    { key: 1, select: '/dashboard/order', name: 'order', path: 'order' },
    { key: 2, select: '', name: 'inovice', path: '' },
    { key: 3, select: '', name: 'credit slips', path: '' },
    { key: 4, select: '', name: 'delivery slips', path: '' },
    { key: 5, select: '', name: 'products', path: 'product' },
    { key: 6, select: '', name: 'Categories', path: 'category' },
    { key: 7, select: '', name: 'Attributes', path: 'attribute' },
    { key: 8, select: '', name: 'Brands', path: 'brand' },
    { key: 9, select: '', name: 'Discound', path: 'discound' },
    { key: 10, select: '', name: 'Stocks', path: 'stocks' },
  ]

  const toggle = () => {
    setCollapsed(!collapsed)
  }

  return (
    <>
      <StyledSider width={256} trigger={null} collapsible collapsed={collapsed}>
        <Logo>
          {!collapsed ? (
            <>
              <Brand link='/dashboard' name='MedShop' />
              <LeftArrow onClick={toggle} />
            </>
          ) : (
            <RightArrow onClick={toggle} />
          )}
        </Logo>
        <Menu
          theme='dark'
          mode='inline'
          selectedKeys={[`${window.location.pathname}`]}>
          <Menu.Item key='/dashboard' icon={<AppstoreAddOutlined />}>
            <NavLink to={`${parent}`}>Dashboard</NavLink>
          </Menu.Item>
          {/* order sub */}
          <SubMenu key='sub0' icon={<CreditCardOutlined />} title='Orders'>
            {items
              .filter((el) => el.key >= 1 && el.key <= 4)
              .map((item) => {
                return (
                  <Menu.Item key={item.select}>
                    <NavLink to={`${parent}/${item.path}`}>{item.name}</NavLink>
                  </Menu.Item>
                )
              })}
          </SubMenu>
          {/* order sub end */}
          {/* catalog sub */}
          <SubMenu key='sub1' icon={<BookOutlined />} title='Catalog'>
            {items
              .filter((el) => el.key >= 5 && el.key <= 10)
              .map((item) => {
                return (
                  <Menu.Item key={item.select}>
                    <NavLink to={`${parent}/${item.path}`}>{item.name}</NavLink>
                  </Menu.Item>
                )
              })}
          </SubMenu>
          {/* catalog sub end */}
          <Menu.Item key={`${parent}/customer`} icon={<UserOutlined />}>
            <NavLink to={`${parent}/customer`}>Customer</NavLink>
          </Menu.Item>
          {/* cutsomer service */}
          <SubMenu
            key='sub2'
            icon={<CustomerServiceOutlined />}
            title='Customer service'></SubMenu>
          {/* cutsomer service end */}
          <Menu.Item key={`${parent}/blog`} icon={<FileOutlined />}>
            <NavLink to={`${parent}/blog`}>blog</NavLink>
          </Menu.Item>
        </Menu>
      </StyledSider>
    </>
  )
}

export default SideBar
