import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import {
  Accordion,
  AccordionItem,
  AccordionPanel,
  AccordionButton,
} from '@chakra-ui/react'

import { BiChevronRight, BiChevronDown } from 'react-icons/bi'
import {
  AiOutlineDashboard,
  AiOutlineCreditCard,
  AiOutlineBook,
  AiOutlineUser,
  AiOutlineCustomerService,
  AiOutlineFileText,
} from 'react-icons/ai'

const Sider = ({ size }) => {
  const OrderItem = [
    { id: '1', name: 'Orders', path: '/dash/orders' },
    { id: '2', name: 'Inovice', path: '/dash/inovices' },
    { id: '3', name: 'Credit Slips', path: '/' },
    { id: '4', name: 'Delivery Slips', path: '/' },
  ]

  const CatalogItem = [
    { id: '5', name: 'Products', path: '/dash/products' },
    { id: '6', name: 'Attributes', path: '/dash' },
    { id: '7', name: 'Brands', path: '/dash/brands' },
    { id: '8', name: 'Discount', path: '/dash/discount' },
    { id: '9', name: 'Stocks', path: '/dash/stocks' },
  ]

  return (
    <>
      <Menu>
        <Accordion allowToggle>
          <List>
            <Item>
              <Link to='/dash'>
                <AiOutlineDashboard className='icon' />
                {size && <Line>Dashboard</Line>}
              </Link>
            </Item>

            {/* collapse */}

            <AccordionItem>
              {({ isExpanded }) => (
                <>
                  <Item>
                    <AccorButton>
                      <span style={{ display: 'flex', alignItems: 'center' }}>
                        <AiOutlineCreditCard className='icon' />
                        {size && <Line>Orders</Line>}
                      </span>
                      {size &&
                        (isExpanded ? (
                          <BiChevronDown className='icon' />
                        ) : (
                          <BiChevronRight className='icon' />
                        ))}
                    </AccorButton>
                  </Item>
                  {size && (
                    <Panel>
                      {OrderItem.map((item) => {
                        return (
                          <Item key={item.id} className='panelItem'>
                            <Link style={{ padding: 0 }} to={item.path}>
                              {item.name}
                            </Link>
                          </Item>
                        )
                      })}
                    </Panel>
                  )}
                </>
              )}
            </AccordionItem>

            {/* collapse */}
            {/* collapse */}

            <AccordionItem>
              {({ isExpanded }) => (
                <>
                  <Item>
                    <AccorButton>
                      <span style={{ display: 'flex', alignItems: 'center' }}>
                        <AiOutlineBook className='icon' />
                        {size && <Line>Catalog</Line>}
                      </span>
                      {size &&
                        (isExpanded ? (
                          <BiChevronDown className='icon' />
                        ) : (
                          <BiChevronRight className='icon' />
                        ))}
                    </AccorButton>
                  </Item>

                  {size && (
                    <Panel>
                      {CatalogItem.map((item) => {
                        return (
                          <Item key={item.id} className='panelItem'>
                            <Link style={{ padding: 0 }} to={item.path}>
                              {item.name}
                            </Link>
                          </Item>
                        )
                      })}
                    </Panel>
                  )}
                </>
              )}
            </AccordionItem>

            {/* collapse */}
            <Item>
              <Link to='/dash/users'>
                <AiOutlineUser className='icon' /> {size && <Line>Users</Line>}
              </Link>
            </Item>
            {/* collapse */}

            <AccordionItem>
              {({ isExpanded }) => (
                <>
                  <Item>
                    <AccorButton>
                      <span style={{ display: 'flex', alignItems: 'center' }}>
                        <AiOutlineCustomerService className='icon' />
                        {size && <Line>Customer Service</Line>}
                      </span>
                      {size &&
                        (isExpanded ? (
                          <BiChevronDown className='icon' />
                        ) : (
                          <BiChevronRight className='icon' />
                        ))}
                    </AccorButton>
                  </Item>

                  {size && (
                    <Panel>
                      <Item className='panelItem'>Return Policy</Item>
                      <Item className='panelItem'>Activities</Item>
                    </Panel>
                  )}
                </>
              )}
            </AccordionItem>

            {/* collapse */}
            <Item>
              <Link to='/dash/blogs'>
                <AiOutlineFileText className='icon' />
                {size && <Line>Blogs</Line>}
              </Link>
            </Item>
          </List>
        </Accordion>
      </Menu>
    </>
  )
}

export default Sider

const Menu = styled.div`
  height: 90%;
  width: inherit;
  position: fixed;
  overflow-y: auto;
  margin: 2rem 0rem;
  padding: 0rem 1rem;

  .icon {
    font-size: 1.5rem;
  }
`

const AccorButton = styled(AccordionButton)`
  display: flex;
  border: none;
  cursor: pointer;
  background: none;
  font-weight: 600;
  font-size: 1rem;
  padding: 8px 5px;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  color: ${({ theme }) => theme.primary};
`

const List = styled.ul`
  list-style: none;

  .panelItem {
    padding: 10px;
  }
`
const Item = styled.li`
  display: flex;
  cursor: pointer;
  font-size: 1rem;
  margin: 5px 0px;
  align-items: center;
  justify-content: flex-start;
  text-transform: capitalize;

  &:hover {
    background-color: ${({ theme }) => theme.third};
  }
`

const Panel = styled(AccordionPanel)`
  padding: 5px;
  background-color: ${({ theme }) => theme.lighthover};
`

const Link = styled(NavLink)`
  width: 100%;
  display: flex;
  padding: 8px 5px;
  margin: 0rem 0rem;
  border-radius: 2px;
  align-items: center;
  color: ${({ theme }) => theme.primary};

  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`

const Line = styled.p`
  font-size: 1rem;
  margin-left: 5px;
`
