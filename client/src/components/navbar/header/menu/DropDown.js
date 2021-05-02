import React from 'react'
import { Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/menu'
import styled from 'styled-components'
import { useAuth } from '../../../../global/exports'
import { MdExitToApp, MdDashboard, MdAccountCircle } from 'react-icons/md'
import { useHistory } from 'react-router-dom'
const DropDown = ({ icon }) => {
  const history = useHistory()
  const { currentUser, logged, logout } = useAuth()

  return (
    <>
      <Menu>
        <Button>{icon}</Button>
        <List>
          <Item onClick={() => history.push('/profile')}>
            <MdAccountCircle className='icon' />
            {logged && <p>{currentUser.name}</p>}
          </Item>

          {logged && currentUser.role === 1 && (
            <Item onClick={() => history.push('/dash')}>
              <MdDashboard className='icon' /> <p>Dashboard</p>
            </Item>
          )}

          <Item onClick={logout}>
            <MdExitToApp className='icon' />
            <p>Logout</p>
          </Item>
        </List>
      </Menu>
    </>
  )
}

export default DropDown

const List = styled(MenuList)`
  padding: 10px 0px;
  border-radius: 10px 0px 10px 10px;
  color: ${({ theme }) => theme.secondary};
  border: 1px solid ${({ theme }) => theme.fourth};
  background-color: ${({ theme }) => theme.primary};
  box-shadow: ${({ theme }) => theme.darkhover} 0px 30px 60px -12px,
    ${({ theme }) => theme.darkhover} 0px 18px 36px -18px;
`

const Item = styled(MenuItem)`
  width: 100%;
  border: none;
  margin: 5px 0px;
  cursor: pointer;
  background: none;
  font-size: 1.125rem;
  display: flex;
  padding: 10px 15px;
  align-items: center;
  flex-direction: row;
  color: ${({ theme }) => theme.third};

  .icon {
    font-size: 1.5rem;
    margin-right: 5px;
  }
  &:hover {
    color: ${({ theme }) => theme.fourth};
    background-color: ${({ theme }) => theme.third};
  }
`

const Button = styled(MenuButton)`
  border: none;
  cursor: pointer;
  background: none;
  font-size: 1.5rem;
  transition: none;
  color: ${({ theme }) => theme.primary};

  &:hover {
    transition: none;
    color: ${({ theme }) => theme.third};
  }
`
