import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import {
  AiOutlineUser,
  AiOutlineMenu,
  AiOutlineSearch,
  AiOutlineHeart,
  AiOutlineShoppingCart,
} from 'react-icons/ai'

export const Wrapper = styled.div`
  display: flex;
  padding: 1rem;
  color: var(--bgd);
  align-items: center;
  justify-content: space-between;
  background-color: var(--txt);
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
  padding: 0px;
  margin: 0rem 5px;
`

export const LogginIcon = styled(AiOutlineUser)`
  cursor: pointer;
  font-size: 24px;
`
export const MenuIcon = styled(AiOutlineMenu)`
  cursor: pointer;
  font-size: 24px;
`

export const SearchIcon = styled(AiOutlineSearch)`
  cursor: pointer;
  font-size: 24px;
`

export const HeartIcon = styled(AiOutlineHeart)`
  cursor: pointer;
  font-size: 24px;
`

export const CartIcon = styled(AiOutlineShoppingCart)`
  cursor: pointer;
  font-size: 24px;
`
