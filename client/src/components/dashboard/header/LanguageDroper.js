import React from 'react'
import styled from 'styled-components'
import FlagIcon from './FlagIcon'
import { MdLanguage } from 'react-icons/md'
import { Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/menu'

const Droper = () => {
  return (
    <>
      <Menu placement='bottom-end'>
        <Button>
          <MdLanguage />
        </Button>
        <List>
          <Item>
            <FlagIcon squared code='tn' size='2x' className='flag' />
            <div>
              <p style={{ fontSize: '1rem', fontWeight: '600' }}>Arabic</p>
              <p style={{ fontSize: '15px' }}>change to Arabic</p>
            </div>
          </Item>
          <Item>
            <FlagIcon squared code='gb' size='2x' className='flag' />
            <div>
              <p style={{ fontSize: '1rem', fontWeight: '600' }}>English</p>
              <p style={{ fontSize: '15px' }}>change to English</p>
            </div>
          </Item>
          <Item>
            <FlagIcon squared code='fr' size='2x' className='flag' />
            <div>
              <p style={{ fontSize: '1rem', fontWeight: '600' }}>Frensh</p>
              <p style={{ fontSize: '15px' }}>change to Frensh</p>
            </div>
          </Item>
        </List>
      </Menu>
    </>
  )
}

export default Droper

const List = styled(MenuList)`
  width: 300px;
  padding: 10px 0px;
  border-radius: 10px 0px 10px 10px;
  color: ${({ theme }) => theme.secondary};
  border: 1px solid ${({ theme }) => theme.fourth};
  background-color: ${({ theme }) => theme.primary}!important;
  box-shadow: ${({ theme }) => theme.darkhover} 0px 30px 60px -12px,
    ${({ theme }) => theme.darkhover} 0px 18px 36px -18px;

  @media (max-width: 768px) {
    width: 100vw;
  }

  .date {
    font-weight: 600;
    color: ${({ theme }) => theme.third};
  }

  .flag {
    border-radius: 25%;
    margin-right: 1.5rem;
  }
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
    background-color: ${({ theme }) => theme.fourth};
  }
`

const Button = styled(MenuButton)`
  border: none;
  display: flex;
  cursor: pointer;
  padding-top: 5px;
  background: none;
  margin: 0rem 0.5rem;
  border-radius: 5px;
  font-size: 1.5rem;
  align-items: center;
  flex-direction: row;
  color: ${({ theme }) => theme.secondary};
`
