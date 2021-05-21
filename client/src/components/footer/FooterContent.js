import React from 'react'
import styled from 'styled-components'
import FooterLogo from './FooterLogo'
import { BiPhone, BiEnvelope } from 'react-icons/bi'

const FooterContent = () => {
  return (
    <>
      <Container>
        <Grid>
          <FooterLogo />
          <h3 style={{ margin: '1rem 0rem' }}>Contactez-nous</h3>
          <Div>
            <BiEnvelope style={{ fontSize: '1.5rem' }} />:
            <a
              style={{
                color: '#232323',
                textTransform: 'initial',
                margin: '0rem 0.5rem',
                fontWeight: 400,
              }}
              href='mailto:devis@medespoir-shop.com'>
              devis@medespoir-shop.com
            </a>
          </Div>
          <Div>
            <BiPhone style={{ fontSize: '1.5rem' }} />:{' '}
            <p style={{ fontWeight: 400, margin: '0rem 0.5rem' }}>
              0033 (0)1 84 800 400
            </p>
          </Div>
        </Grid>

        <Grid style={{ flex: 0 }}>
          <h3 style={{ marginBottom: '1rem' }}>Newsletter</h3>
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
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`

const Grid = styled.div`
  @media (max-width: 768px) {
    margin-bottom: 2rem;
  }
`

const InputGroup = styled.div`
  width: 400px;
  display: flex;
  padding: 0px 8px;
  margin: 1rem 0rem;
  align-items: center;
  flex-direction: row;
  background-color: ${({ theme }) => theme.fourth};

  @media (max-width: 768px) {
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
const Div = styled.div`
  display: flex;
  align-items: center;
`
