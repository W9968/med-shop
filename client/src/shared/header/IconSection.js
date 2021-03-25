import React from 'react'

//imports
import UserIcon from './UserIcon'
//stlyes
import { Row } from 'antd'
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
      <Row>
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
      </Row>
    </>
  )
}

export default IconSection
