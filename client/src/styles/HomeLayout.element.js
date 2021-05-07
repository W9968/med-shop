import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`

export const Container = styled.div`
  padding: 1rem;
  width: 1204px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  @media (max-width: 1204px) {
    width: 100%;
  }
`

export const FlexBox = styled.div`
  width: 100%;
  display: flex;
  margin: 24px 0px;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 768px) {
    width: 100%;
    flex-direction: column;
  }
`
export const Flexed = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
`

export const Overlay = styled.div`
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  padding: 1rem;
  position: absolute;
  align-items: center;
  flex-direction: row;
  justify-content: flex-start;
  transform: translate(0%, 0%);
  background: rgba(0, 0, 0, 0.3);
`

export const Image = styled.img`
  margin: 0;
  width: 100%;
  height: 100%;
`

export const Text = styled.h1`
  font-size: 1.752rem;
  text-transform: capitalize;
  color: ${({ theme }) => theme.secondary};
`

export const Parag = styled.p`
  font-weight: 500;
`
