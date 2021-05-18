import React from 'react'
import styled from 'styled-components'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'

const ProductTabs = () => {
  return (
    <>
      <Row>
        <Tabs style={{ width: '100%' }} variant='enclosed'>
          <TabList style={{ display: 'flex', justifyContent: 'space-between' }}>
            <StyledTabs _selected={{ bg: 'none', color: '#5865f2' }}>
              Best Seller
            </StyledTabs>
            <StyledTabs _selected={{ bg: 'none', color: '#5865f2' }}>
              New Product
            </StyledTabs>
          </TabList>

          <TabPanels>
            <TabPanel>
              <p>one!</p>
            </TabPanel>
            <TabPanel>
              <p>two!</p>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Row>
    </>
  )
}

export default ProductTabs

const Row = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: 96px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 1100px) {
    flex-direction: column;
  }
`

const StyledTabs = styled(Tab)`
  width: 100%;
  border: none;
  outline: none;
  display: flex;
  cursor: pointer;
  font-weight: 600;
  padding: 15px 0rem;
  font-size: 1.125rem;
  align-items: center;
  justify-content: center;
  text-transform: capitalize;
  font-family: proxima-nova, sans-serif;
  background: ${({ theme }) => theme.fourth};
  border-bottom: 1px solid ${({ theme }) => theme.darkhover};
`
