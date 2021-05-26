import React from 'react'
import styled from 'styled-components'
import { BiUser } from 'react-icons/bi'
import { useAuth } from '../../global/exports'

const Hero = () => {
  const { currentUser, resentVerificationMail, message } = useAuth()
  return (
    <>
      <Container>
        <Row>
          <Col>
            <Avatar>
              <BiUser />
            </Avatar>
          </Col>
          <Col>
            <h2 style={{ margin: '0rem 1rem', textTransform: 'capitalize' }}>
              @{currentUser.name}
            </h2>
            <p style={{ margin: '0rem 1rem', letterSpacing: '1px' }}>
              {currentUser.email}
            </p>
          </Col>
        </Row>
        {currentUser.email_verified_at === null && (
          <Verification
            style={{ background: message.type === 'success' && '#00C9A7' }}>
            {message.type === 'success' ? (
              <p style={{ color: 'white' }}>{message.content}</p>
            ) : (
              <p style={{ color: 'white' }}>
                Your account is not verfieid yet, if you did not recieve the
                verification email{' '}
                <span
                  style={{ textDecoration: 'underline' }}
                  onClick={() => resentVerificationMail()}>
                  click
                </span>{' '}
                here to resend
              </p>
            )}
          </Verification>
        )}
      </Container>
    </>
  )
}

export default Hero

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

const Row = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
`

const Col = styled.div``

const Avatar = styled.div`
  padding: 10px;
  display: flex;
  width: inherit;
  font-size: 2rem;
  align-items: center;
  border-radius: 15px;
  justify-content: center;
  background-color: ${({ theme }) => theme.hover};
`

const Verification = styled.div`
  width: 100%;
  display: flex;
  padding: 10px;
  margin: 1rem 0rem;
  background: ${({ theme }) => theme.error};
`
