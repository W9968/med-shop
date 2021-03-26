import React, { useRef } from 'react'

//imports
import { useHistory } from 'react-router'
import { useAuth } from '../../services/context/AuthContext'
//styles
import { Menu, Dropdown } from 'antd'
import { UserOutlined } from '@ant-design/icons'
import { LogginIcon, MenuIcon } from '../../styles/Header.element'

const UserIcon = () => {
  const history = useHistory()
  const parentRef = useRef()
  const { logged, Logout, currentUser } = useAuth()

  const menu = (
    <Menu>
      {logged && (
        <Menu.Item icon={<UserOutlined />} disabled>
          {currentUser.name}
        </Menu.Item>
      )}

      <Menu.Divider />
      <Menu.Item key='0'>Profile</Menu.Item>
      {logged && currentUser.role === 1 && (
        <Menu.Item key='1' onClick={() => history.push('/dashboard')}>
          Dashboard
        </Menu.Item>
      )}
      <Menu.Divider />
      <Menu.Item key='2' onClick={Logout}>
        Log out
      </Menu.Item>
    </Menu>
  )

  return (
    <>
      {logged ? (
        <Dropdown refs={parentRef} overlay={menu} trigger={['hover']}>
          <MenuIcon onClick={(e) => e.preventDefault()} />
        </Dropdown>
      ) : (
        <LogginIcon onClick={() => history.push('/login')} />
      )}
    </>
  )
}

export default UserIcon