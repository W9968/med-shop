import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'
import { useAuth } from '../../../global/exports'
import { Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/menu'
import { IoRocketOutline, IoHomeOutline } from 'react-icons/io5'

const Droper = () => {
  const history = useHistory()
  const [uri, setUri] = useState(null)
  const { currentUser, logged, logout } = useAuth()

  useEffect(() => {
    logged && setUri(currentUser.name)
  }, [uri, logged, currentUser])

  return (
    <>
      <Menu placement='bottom-end'>
        <Button>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
            }}>
            <Avatar>{currentUser.name[0]}</Avatar>
            <p
              style={{
                fontSize: '1.125rem',
                fontWeight: '600',
                textTransform: 'capitalize',
              }}>
              {currentUser.name}
            </p>
          </div>
        </Button>
        <List>
          <Item onClick={() => history.push('/')}>
            <IoHomeOutline style={{ color: '#00C9A7' }} className='icon' />
            <div>
              <p style={{ fontSize: '1rem', fontWeight: '600' }}>Go Home</p>
              <p style={{ fontSize: '15px' }}>home page and more</p>
            </div>
          </Item>
          <Item onClick={() => history.push(`/dash/recent/admin`)}>
            <IoRocketOutline style={{ color: '#db3069' }} className='icon' />
            <div>
              <p style={{ fontSize: '1rem', fontWeight: '600' }}>My Activity</p>
              <p style={{ fontSize: '15px' }}>logs and notification</p>
            </div>
          </Item>

          <br />

          <div style={{ padding: '15px' }}>
            <ActionButton onClick={logout}>sign out</ActionButton>
          </div>
        </List>
      </Menu>
    </>
  )
}

export default Droper

const List = styled(MenuList)`
  width: 300px;
  padding: 10px 0px;
  border-radius: 10px 0px 10px 10px;
  color: ${({ theme }) => theme.secondary};
  border: 1px solid ${({ theme }) => theme.fourth};
  background-color: ${({ theme }) => theme.primary}!important;
  box-shadow: ${({ theme }) => theme.darkhover} 0px 30px 60px -12px,
    ${({ theme }) => theme.darkhover} 0px 18px 36px -18px;

  @media (max-width: 768px) {
    width: 100vw;
  }

  .icon {
    font-size: 1.5rem;
    margin-right: 1.5rem;
  }
`

const Item = styled(MenuItem)`
  border: none;
  outline: none;
  display: flex;
  cursor: pointer;
  background: none;
  padding: 10px 15px;
  align-items: center;
  justify-content: flex-start;

  &:hover {
    background-color: ${({ theme }) => theme.fourth};
  }
`

const Button = styled(MenuButton)`
  border: none;
  padding: 5px;
  display: flex;
  cursor: pointer;
  background: none;
  align-items: center;
  flex-direction: row;

  &:hover {
    background-color: ${({ theme }) => theme.darkhover};
  }

  @media (max-width: 1366px) {
    color: ${({ theme }) => theme.primary};

    &:hover {
      transition: none;
      background-color: ${({ theme }) => theme.lighthover};
    }
  }
`
const ActionButton = styled.button`
  border: none;
  display: flex;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 5px;
  padding: 12px 20px;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  color: ${({ theme }) => theme.primary};
  background: ${({ theme }) => theme.hover};

  &:hover {
    background-color: ${({ theme }) => theme.third};
  }
`

const Avatar = styled.p`
  padding: 5px 10px;
  font-weight: 900;
  margin-right: 1rem;
  border-radius: 5px;
  font-size: 1.125rem;
  text-transform: capitalize;
  color: ${({ theme }) => theme.secondary};
  background: ${({ theme }) => theme.fourth};
`
