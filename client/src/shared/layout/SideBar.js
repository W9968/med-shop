import React, { useState } from 'react'
import Brand from '../hero/Brand'
import {
  StyledSider,
  Logo,
  LeftArrow,
  RightArrow,
} from '../../styles/Dashboard.element'

import { Menu } from 'antd'
import {
  AppstoreAddOutlined,
  ShoppingCartOutlined,
  BookOutlined,
  UserOutlined,
  CreditCardOutlined,
  CarryOutOutlined,
} from '@ant-design/icons'
const { SubMenu } = Menu

const SideBar = () => {
  const [collapsed, setCollapsed] = useState(false)

  const items = [
    { key: 1, name: 'order' },
    { key: 2, name: 'inovice' },
    { key: 3, name: 'credit' },
    { key: 4, name: 'delivery' },
    { key: 5, name: 'products' },
    { key: 6, name: 'Categories' },
    { key: 7, name: 'Atributes' },
    { key: 8, name: 'Brands' },
    { key: 9, name: 'Discound' },
    { key: 10, name: 'Stocks' },
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
              <Brand link='/dashboard/' name='MedShop' />
              <LeftArrow onClick={toggle} />
            </>
          ) : (
            <RightArrow onClick={toggle} />
          )}
        </Logo>
        <Menu theme='dark' mode='inline' defaultSelectedKeys={['0']}>
          <Menu.Item key={0} icon={<AppstoreAddOutlined />}>
            Dashboard
          </Menu.Item>
          {/* order sub */}
          <SubMenu key='sub0' icon={<CreditCardOutlined />} title='Orders'>
            {items
              .filter((el) => el.key >= 1 && el.key <= 4)
              .map((item) => {
                return <Menu.Item key={item.key}>{item.name}</Menu.Item>
              })}
          </SubMenu>
          {/* order sub end */}
          {/* catalog sub */}
          <SubMenu key='sub1' icon={<BookOutlined />} title='Catalog'>
            {items
              .filter((el) => el.key >= 5 && el.key <= 10)
              .map((item) => {
                return <Menu.Item key={item.key}>{item.name}</Menu.Item>
              })}
          </SubMenu>
          {/* catalog sub end */}
          <Menu.Item key={11} icon={<UserOutlined />}>
            Customer
          </Menu.Item>
        </Menu>
      </StyledSider>
    </>
  )
}

export default SideBar
