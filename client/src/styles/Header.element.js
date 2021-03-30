import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import { BiUser, BiMenu, BiSearch, BiHeart, BiCart } from 'react-icons/bi'

export const Wrapper = styled.div`
  display: flex;
  padding: 1rem;
  color: var(--bgd);
  align-items: center;
  justify-content: space-between;
  background-color: var(--nab);
`

export const Links = styled(NavLink)`
  margin: 0;
  font-size: 16px;
  color: var(--bgd);

  &:hover {
    color: var(--wht);
  }
`

export const List = styled.ul`
  margin: 0px;
  padding: 0px;
  display: flex;
  list-style: none;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
`
export const Items = styled.li`
  padding: 5px 5px;
  border-radius: 50%;
  &:hover {
    background-color: var(--hov);
  }
`

export const LogginIcon = styled(BiUser)`
  cursor: pointer;
  font-size: 1.5rem;
`
export const MenuIcon = styled(BiMenu)`
  cursor: pointer;
  font-size: 1.5rem;
`

export const SearchIcon = styled(BiSearch)`
  cursor: pointer;
  font-size: 1.5rem;
`

export const HeartIcon = styled(BiHeart)`
  cursor: pointer;
  font-size: 1.5rem;
`

export const CartIcon = styled(BiCart)`
  cursor: pointer;
  font-size: 1.5rem;
`
