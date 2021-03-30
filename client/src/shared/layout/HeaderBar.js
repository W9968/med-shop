import React from 'react'
import { useAuth } from '../../services/context/AuthContext'
import {
  StyledHeader,
  List,
  Item,
  Space,
  Div,
  Button,
} from '../../styles/Dashboard.element'
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
} from '@chakra-ui/menu'

const HeaderBar = () => {
  const { logged, currentUser, Logout } = useAuth()
  return (
    <>
      <StyledHeader>
        <List>
          {/* drop down */}
          <Item>
            <Menu
              placement='bottom-end'
              isLazy
              preventOverflow={true}
              arrowPadding={111}>
              <MenuButton>
                hi,&nbsp;
                <span className='name'>{logged && currentUser.name}</span>
              </MenuButton>
              <MenuList width={300} right={0}>
                <Space style={{ marginBottom: '1rem' }}>
                  <img src='/assets/bg-1.jpg' />
                  <div className='overlay' />
                  <Div>
                    <p className='name svg'>{currentUser.name[0]}</p>
                    <p className='name' style={{ color: '#f3f6f9' }}>
                      {currentUser.name}
                    </p>
                  </Div>
                </Space>

                <MenuItem>go home</MenuItem>
                <MenuDivider />
                <Space>
                  <Button onClick={Logout}>sign out</Button>
                </Space>
              </MenuList>
            </Menu>
          </Item>
          {/* drop down end */}
        </List>
      </StyledHeader>
    </>
  )
}

export default HeaderBar
