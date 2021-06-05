import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'
import { useAuth } from '../../../global/exports'
import { Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/menu'
import {
  IoRocketOutline,
  IoHomeOutline,
  IoTimerOutline,
  IoPerson,
} from 'react-icons/io5'

const Droper = () => {
  const date = `${new Date()
    .toLocaleString('default', { month: 'short' })
    .toString()} ${new Date().getDate()}`

  const history = useHistory()
  const [uri, setUri] = useState(null)
  const { currentUser, logged, logout } = useAuth()

  useEffect(() => {
    logged && setUri(currentUser.name)
  }, [uri, logged, currentUser])

  return (
    <>
      <StyledMenu placement='bottom-end'>
        <Button>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
            }}>
            <Avatar />
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
          <MenuItem
            style={{
              display: 'flex',
              padding: '10px 15px',
              alignItems: 'center',
              flexDirection: 'row',
              background: 'none',
              outline: 'none',
              border: 'none',
              justifyContent: 'flex-start',
            }}>
            <IoTimerOutline style={{ color: '#3699ff' }} className='icon' />
            <div>
              <p
                style={{
                  fontSize: '1rem',
                  fontWeight: '600',
                  margin: 0,
                  padding: 0,
                }}>
                Today <span className='date'>{date}</span>
              </p>
              <p style={{ fontSize: '15px', margin: 0, padding: 0 }}>
                showing time
              </p>
            </div>
          </MenuItem>
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
      </StyledMenu>
    </>
  )
}

export default Droper

const List = styled(MenuList)`
  z-index: 11;
  width: 300px;
  padding: 10px 0px;
  border-radius: 10px 0px 10px 10px;
  border: 1px solid ${({ theme }) => theme.hover};
  background-color: ${({ theme }) => theme.body}!important;

  @media (max-width: 768px) {
    width: 100vw;
  }

  .icon {
    font-size: 1.5rem;
    margin-right: 1.5rem;
  }

  .date {
    font-weight: 600;
    color: ${({ theme }) => theme.text};
  }
`

const StyledMenu = styled(Menu)`
  z-index: 11;
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
    background-color: ${({ theme }) => theme.hover};
  }
`

const Button = styled(MenuButton)`
  border: none;
  padding: 10px;
  display: flex;
  cursor: pointer;
  background: none;
  align-items: center;
  flex-direction: row;
  color: ${({ theme }) => theme.text};
  background-color: ${({ theme }) => theme.hover};
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
  color: ${({ theme }) => theme.text};
  background: ${({ theme }) => theme.hover};
`

const Avatar = styled(IoPerson)`
  font-size: 1.5rem;
  margin-right: 5px;
  color: ${({ theme }) => theme.text};
`
