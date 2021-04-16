import React from 'react'
import { Breadcrumb } from 'antd'
import { useHistory } from 'react-router-dom'
import { useAuth } from '../../services/context/AuthContext'
import { Menu, MenuButton, MenuList } from '@chakra-ui/menu'
import {
  StyledHeader,
  List,
  Item,
  Space,
  Div,
  Button,
} from '../../styles/Dashboard.element'

const HeaderBar = () => {
  const history = useHistory()
  const { logged, currentUser, Logout } = useAuth()

  return (
    <>
      <StyledHeader>
        <List>
          {/* drop down */}
          <Item>
            <Menu
              isLazy
              placement='bottom-end'
              preventOverflow={true}
              arrowPadding={111}>
              <MenuButton>
                hi,&nbsp;
                <span className='name'>{logged && currentUser.name}</span>
              </MenuButton>
              <MenuList
                style={{
                  borderTop: 'none',
                  borderLeft: 'none',
                  borderRight: 'none',
                  borderBottom: 'none',
                  borderRadius: '10px',
                }}
                width={300}
                right={0}>
                <Space style={{ marginBottom: '1rem' }}>
                  <img src='/assets/bg-1.jpg' alt='bg' />
                  <div className='overlay' />
                  <Div>
                    <p className='name svg'>{currentUser.name[0]}</p>
                    <p className='name' style={{ color: '#f3f6f9' }}>
                      {currentUser.name}
                    </p>
                  </Div>
                </Space>
                <Space>
                  <Button onClick={() => history.push('/')}>go home</Button>
                  <Button onClick={Logout}>sign out</Button>
                </Space>
              </MenuList>
            </Menu>
          </Item>
          {/* drop down end */}
          {/* bread crumb */}
          <Item>
            <Breadcrumb>
              {window.location.pathname
                .slice(1)
                .split('/')
                .map((paths, key) => {
                  return (
                    <Breadcrumb.Item key={key}>
                      <span>{paths}</span>
                    </Breadcrumb.Item>
                  )
                })}
            </Breadcrumb>
          </Item>
          {/* bread crumb end */}
        </List>
      </StyledHeader>
    </>
  )
}

export default HeaderBar
