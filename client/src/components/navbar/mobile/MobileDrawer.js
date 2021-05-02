import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { useAuth } from '../../../global/exports'

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
              <Item>
                <Link to='/profile'>Profile</Link>
              </Item>
              <Item>
                <Link to='/profile'>Activity</Link>
              </Item>
              {currentUser.role === 1 && (
                <Item>
                  <Link to='/dash'>Dashboard</Link>
                </Item>
              )}
            </List>
          </UserWrapper>
        )}
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
  background-color: ${({ theme }) => theme.lighthover};
`

const ConntectedUser = styled.div`
  padding: 1rem;
  display: flex;
  align-items: center;
  font-size: 1.225rem;
  justify-content: stretch;
`

const Avatar = styled.div`
  font-weight: 900;
  padding: 5px 12px;
  margin-right: 1rem;
  border-radius: 10px;
  text-transform: capitalize;
  color: ${({ theme }) => theme.secondary};
  background: ${({ theme }) => theme.darkhover};
`

const List = styled.ul`
  list-style: none;
  padding: 0rem 1rem;
`
const Item = styled.li`
  padding: 0rem 1rem;
`

const Link = styled(NavLink)`
  font-size: 1rem;
  color: ${({ theme }) => theme.primary};
`
