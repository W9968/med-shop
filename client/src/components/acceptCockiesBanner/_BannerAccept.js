import React, { useState } from 'react'
import styled from 'styled-components'

const _BannerAccept = () => {
  const [unmountComponent, setUnmountComponent] = useState(true)

  const componentMutation = () => {
    localStorage.setItem('accpet-cockies', false)
    setUnmountComponent(false)
  }

  const mutateComponent = () => {
    localStorage.setItem('accpet-cockies', false)
    setUnmountComponent(false)
    setTimeout(() => {
      localStorage.setItem('accpet-cockies', true)
      setUnmountComponent(true)
    }, 600000)
  }

  if (JSON.parse(localStorage.getItem('accpet-cockies') || unmountComponent)) {
    return (
      <>
        <Banner>
          <Content>
            <h1 style={{ marginBottom: '1rem' }}>Cockies</h1>
            We are using cookies to give you the best experience on our site.
            Cookies are files stored in your browser and are used by most
            websites to help personalize and secure your web experience.
          </Content>
          <Closable>
            <Button onClick={mutateComponent}>not now</Button>
            <Button onClick={componentMutation}>accept all</Button>
          </Closable>
        </Banner>
      </>
    )
  } else {
    return null
  }
}

export default _BannerAccept

const Banner = styled.div`
  left: 0%;
  top: 100%;
  padding: 1rem;
  z-index: 109;
  width: 100%;
  height: 30vh;
  display: flex;
  background: red;
  position: fixed;
  flex-direction: column;
  justify-content: space-between;
  transform: translate(0%, -100%);
  color: ${({ theme }) => theme.text};
  background-color: ${({ theme }) => theme.hover};

  @media (max-width: 768px) {
    height: 60%;
  }
`

const Content = styled.p`
  margin-top: 1rem;
  font-size: 1.125rem;
  line-height: 1.7rem;
`

const Closable = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 1rem;
  justify-content: flex-end;

  @media (max-width: 768px) {
    flex-direction: column-reverse;
  }
`

const Button = styled.button`
  border: none;
  outline: none;
  font-weight: 600;
  padding: 1rem 2rem;
  text-transform: uppercase;
  color: ${({ theme }) => theme.body};
  background-color: ${({ theme }) => theme.text};

  &:first-child {
    margin: 0rem 1rem;
  }

  @media (max-width: 768px) {
    width: 100%;
    &:first-child {
      margin: 1rem 0rem;
    }
  }
`
