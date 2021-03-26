import styled from 'styled-components'

export const Wrapper = styled.div`
  top: 0;
  left: 0;
  width: 100%;
  min-height: 100vh;
  position: absolute;
  background-color: var(--bgd);
`

export const Container = styled.div`
  display: flex;
  max-width: 100%;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  background-color: var(--bgd);
`

export const Div = styled.div`
  width: 500px;
  display: flex;
  padding: 15px;
  border-radius: 10px;
  align-items: center;
  flex-direction: column;
  background-color: var(--wht);
  box-shadow: 0px 15px 15px 00px #e1e1e1;

  @media (max-width: 768px) {
    width: 90%;
  }
`

export const Image = styled.img`
  width: 40%;
  margin: 2rem 0rem;
`

export const Heading = styled.h1`
  font-weight: 600;
  letter-spacing: 1px;
`

export const Parag = styled.p`
  width: 70%;
  text-align: justify;
  text-justify: inter-word;
`

export const Button = styled.button`
  width: 70%;
  border: none;
  outline: none;
  color: var(--bgd);
  letter-spacing: 1px;
  border-radius: 10px;
  margin: 2rem 0rem;
  padding: 0.8rem 1rem;
  text-transform: capitalize;
  background-color: var(--txt);
  transition: 0.3s ease-in-out;

  &:hover {
    cursor: pointer;
    background-color: var(--hov);
  }
`
