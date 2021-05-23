import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from '@chakra-ui/react'
import {
  BiCustomize,
  BiCreditCard,
  BiBookmarks,
  BiUser,
  BiSend,
  BiFile,
} from 'react-icons/bi'

const DashMenu = ({ size }) => {
  const OrderItem = [
    { name: 'Orders', path: '/dash/orders' },
    { name: 'Inovice', path: '/dash/inovices' },
    { name: 'Credit Slips', path: '/' },
    { name: 'Delivery Slips', path: '/' },
  ]

  const CatalogItem = [
    { name: 'Products', path: '/dash/products' },
    { name: 'Attributes', path: '/dash/attributes' },
    { name: 'Brands', path: '/dash/brands' },
    { name: 'Discount', path: '/dash/discount' },
    { name: 'Stocks', path: '/dash/stocks' },
  ]

  return (
    <>
      <Menu allowToggle>
        <Box flex='1' textAlign='left'>
          <Linker to={'/dash'}>
            {size ? (
              <Line>
                <BiCustomize className='icon' />
                dashboard
              </Line>
            ) : (
              <Line style={{ justifyContent: 'center' }}>
                <BiCustomize className='icon' />
              </Line>
            )}
          </Linker>
        </Box>

        <AccordionItem>
          <Button>
            {size ? (
              <>
                <Box flex='1' className='align' textAlign='left'>
                  <BiCreditCard className='icon' />
                  Orders
                </Box>
                <AccordionIcon style={{ fontSize: '1.125rem' }} />
              </>
            ) : (
              <Box
                flex='1'
                style={{ justifyContent: 'center' }}
                className='align'
                textAlign='left'>
                <BiCreditCard className='icon' />
              </Box>
            )}
          </Button>

          <Panel pb={4}>
            {OrderItem.map((value, id) => {
              return (
                <Linker key={`order-${id}`} to={value.path}>
                  <Line>{value.name}</Line>
                </Linker>
              )
            })}
          </Panel>
        </AccordionItem>

        <AccordionItem>
          <Button>
            {size ? (
              <>
                <Box flex='1' className='align' textAlign='left'>
                  <BiBookmarks className='icon' />
                  Catalogue
                </Box>
                <AccordionIcon style={{ fontSize: '1.125rem' }} />
              </>
            ) : (
              <Box
                flex='1'
                style={{ justifyContent: 'center' }}
                className='align'
                textAlign='left'>
                <BiBookmarks className='icon' />
              </Box>
            )}
          </Button>

          <Panel pb={4}>
            {CatalogItem.map((value, id) => {
              return (
                <Linker key={`catalog-${id}`} to={`${value.path}`}>
                  <Line>{value.name}</Line>
                </Linker>
              )
            })}
          </Panel>
        </AccordionItem>

        <Box flex='1' textAlign='left'>
          <Linker to={'/dash/users'}>
            {size ? (
              <Line>
                <BiUser className='icon' />
                users
              </Line>
            ) : (
              <Line style={{ justifyContent: 'center' }}>
                <BiUser className='icon' />
              </Line>
            )}
          </Linker>
        </Box>

        <AccordionItem>
          <Button>
            {size ? (
              <>
                <Box flex='1' className='align' textAlign='left'>
                  <BiSend className='icon' />
                  Service
                </Box>
                <AccordionIcon style={{ fontSize: '1.125rem' }} />
              </>
            ) : (
              <Box
                flex='1'
                style={{ justifyContent: 'center' }}
                className='align'
                textAlign='left'>
                <BiSend className='icon' />
              </Box>
            )}
          </Button>

          <Panel pb={4}>
            <Linker to='/dash/returnpolicy'>
              <Line>Return Policy</Line>
            </Linker>
            <Linker to='/dash/activities'>
              <Line>activities</Line>
            </Linker>
          </Panel>
        </AccordionItem>

        <Box flex='1' textAlign='left'>
          <Linker to={'/dash/blogs'}>
            {size ? (
              <Line>
                <BiFile className='icon' />
                blogs
              </Line>
            ) : (
              <Line style={{ justifyContent: 'center' }}>
                <BiFile className='icon' />
              </Line>
            )}
          </Linker>
        </Box>
      </Menu>
    </>
  )
}

export default DashMenu

const Menu = styled(Accordion)`
  margin-top: 3rem;

  .icon {
    margin-right: 5px;
    font-size: 1.5rem;
  }

  .align {
    display: flex;
    align-items: center;
  }
`

const Button = styled(AccordionButton)`
  border: none;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 600;
  background: none;
  padding: 15px 10px;
  color: ${({ theme }) => theme.text};

  &:hover {
    color: ${({ theme }) => theme.text};
    background: ${({ theme }) => theme.body};
  }
`

const Panel = styled(AccordionPanel)`
  padding: 5px;
  display: flex;
  flex-direction: column;
  border-left: 5px solid ${({ theme }) => theme.text};
`

const Linker = styled(NavLink)``

const Line = styled.p`
  display: flex;
  font-size: 1rem;
  padding: 13px 10px;
  align-items: center;
  color: ${({ theme }) => theme.text};

  &:hover {
    color: ${({ theme }) => theme.text};
    background: ${({ theme }) => theme.body};
  }
`
