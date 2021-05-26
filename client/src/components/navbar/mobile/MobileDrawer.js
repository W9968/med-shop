import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import { useAuth } from '../../../global/exports'
import Menu from '../header/menu/Menu'
import { BiCustomize, BiHeart, BiUser } from 'react-icons/bi'

const MobileDrawer = () => {
  const { currentUser, logged } = useAuth()

  return (
    <>
      <Container>
        {logged && (
          <UserWrapper>
            <ConntectedUser>
              <Avatar> {currentUser.name[0]}</Avatar>
              {currentUser.name}
            </ConntectedUser>
            <List>
              <Linker to='/profile'>
                <BiUser className='navIcon' />
                Profile
              </Linker>

              <Linker to='/dashboard'>
                <BiHeart className='navIcon' />
                wish List
              </Linker>
              {currentUser.role === 1 && (
                <Linker to='/dash'>
                  <BiCustomize className='navIcon' />
                  Admin Panel
                </Linker>
              )}
            </List>
          </UserWrapper>
        )}
        <Menu />
      </Container>
    </>
  )
}

export default MobileDrawer

const Container = styled.div`
  display: flex;
  flex-direction: column;
`

const UserWrapper = styled.div`
  background-color: ${({ theme }) => theme.hover};
`

const ConntectedUser = styled.div`
  padding: 1rem;
  display: flex;
  font-weight: 600;
  align-items: center;
  font-size: 1.225rem;
  justify-content: stretch;
  text-transform: capitalize;
`

const Avatar = styled.div`
  font-weight: 900;
  padding: 5px 12px;
  margin-right: 1rem;
  border-radius: 10px;
  text-transform: capitalize;
  color: ${({ theme }) => theme.text};
  background: ${({ theme }) => theme.body};
`

const List = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding-bottom: 1rem;

  .navIcon {
    margin-right: 10px;
    font-size: 1.5rem;
  }
`
const Linker = styled(NavLink)`
  width: 100%;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  color: ${({ theme }) => theme.text};

  &:hover {
    background-color: ${({ theme }) => theme.body};
  }
`
