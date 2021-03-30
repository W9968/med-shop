import React from 'react'

//imports
import UserIcon from './Menu'
//stlyes
import {
  List,
  Items,
  SearchIcon,
  HeartIcon,
  CartIcon,
} from '../../styles/Header.element'

const IconSection = () => {
  return (
    <>
      <List>
        <Items>
          <SearchIcon />
        </Items>
        <Items>
          <HeartIcon />
        </Items>
        <Items>
          <UserIcon />
        </Items>
        <Items>
          <CartIcon />
        </Items>
      </List>
    </>
  )
}

export default IconSection
