import React from 'react'

//imports
import { useHistory } from 'react-router'
import { useAuth } from '../../services/context/AuthContext'
//styles
import { Menu, Dropdown } from 'antd'
import { LogginIcon, MenuIcon } from '../../styles/Header.element'

const UserIcon = () => {
  const history = useHistory()
  const { logged, Logout } = useAuth()

  const menu = (
    <Menu>
      <Menu.Item key='0'>Profile</Menu.Item>
      <Menu.Item key='1'>Dashboard</Menu.Item>
      <Menu.Divider />
      <Menu.Item key='2' onClick={Logout}>
        Log out
      </Menu.Item>
    </Menu>
  )

  return (
    <>
      {logged ? (
        <Dropdown overlay={menu} trigger={['click']}>
          <MenuIcon />
        </Dropdown>
      ) : (
        <LogginIcon onClick={() => history.push('/login')} />
      )}
    </>
  )
}

export default UserIcon
