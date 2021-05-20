import React from 'react'
import styled from 'styled-components'
import FooterContent from './FooterContent'
import { RiCopyrightLine } from 'react-icons/ri'

const _Footer = () => {
  const time = new Date().getFullYear()

  return (
    <>
      <Wrapper>
        <Container>
          <FooterContent />
          <CopyRight>
            Copyright {time}{' '}
            <RiCopyrightLine style={{ margin: '0rem 0.5rem' }} /> MedEspoir Shop
          </CopyRight>
        </Container>
      </Wrapper>
    </>
  )
}

export default _Footer

const Wrapper = styled.footer`
  padding: 0rem 1rem;
`
const Container = styled.div`
  padding: 1rem 0rem;
  border-top: 1px solid ${({ theme }) => theme.darkhover};
`

const CopyRight = styled.div`
  display: flex;
  font-weight: 600;
  padding-top: 1rem;
  align-items: center;
  justify-content: center;
  border-top: 1px solid ${({ theme }) => theme.darkhover};
`
