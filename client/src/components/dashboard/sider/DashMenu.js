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
            {OrderItem.map((value) => {
              return (
                <Linker key={value.id} to={value.path}>
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
            {CatalogItem.map((value) => {
              return (
                <Linker key={value.id} to={value.path}>
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
  color: ${({ theme }) => theme.secondary};

  &:hover {
    color: ${({ theme }) => theme.primary};
    background: ${({ theme }) => theme.hover};
  }
`

const Panel = styled(AccordionPanel)`
  padding: 5px;
  display: flex;
  flex-direction: column;
  border-left: 5px solid ${({ theme }) => theme.third};
`

const Linker = styled(NavLink)``

const Line = styled.p`
  display: flex;
  font-size: 1rem;
  padding: 13px 10px;
  align-items: center;

  color: ${({ theme }) => theme.secondary};

  &:hover {
    color: ${({ theme }) => theme.primary};
    background: ${({ theme }) => theme.hover};
  }
`
