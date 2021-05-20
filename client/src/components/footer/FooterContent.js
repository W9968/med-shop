import React from 'react'
import styled from 'styled-components'
import FooterLogo from './FooterLogo'

const FooterContent = () => {
  return (
    <>
      <Container>
        <Grid>
          <FooterLogo />
          <p>dqs</p>
          <p>dqs</p>
          <p>dqs</p>
        </Grid>
        <Grid>
          <FooterLogo />
          <p>dqs</p>
          <p>dqs</p>
          <p>dqs</p>
        </Grid>
        <Grid style={{ flex: 0 }}>
          <h3>Newsletter</h3>
          <p>
            L'abonnement signifie que vous acceptez de recevoir nos emails, plus
            de details s'il vous plais se référer a notre politique de
            confidentialité.
          </p>
          <InputGroup>
            <Input type='text' name='text' />
            <p style={{ cursor: 'pointer' }}>Suivre</p>
          </InputGroup>
        </Grid>
      </Container>
    </>
  )
}

export default FooterContent

const Container = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 1rem;
  justify-content: space-between;
`

const Grid = styled.div``

const InputGroup = styled.div`
  width: 400px;
  display: flex;
  padding: 0px 8px;
  margin: 1rem 0rem;
  align-items: center;
  flex-direction: row;
  background-color: ${({ theme }) => theme.fourth};

  @media (max-width: 400px) {
    width: 100%;
  }
`

const Input = styled.input`
  width: 100%;
  border: none;
  outline: none;
  font-size: 1rem;
  padding: 16px 0px;
  letter-spacing: 0.78px;
  background: transparent;
  color: ${({ theme }) => theme.secondary};
  background-color: ${({ theme }) => theme.fourth};
`
