import styled from 'styled-components'
import { BiHeart } from 'react-icons/bi'

export const Container = styled.div`
  width: 100%;
  display: flex;
  min-height: 100vh;
  padding-top: 80px;
  align-items: center;
  justify-content: center;
`

export const Row = styled.div`
  height: 100%;
  width: 1104px;
  padding: 1rem;
  display: flex;
  flex-direction: row;

  @media (max-width: 768px) {
    flex-direction: column;
  }

  .col2 {
    display: flex;
    padding: 0rem 2rem;
    align-items: flex-start;
    justify-content: space-between;

    @media (max-width: 768px) {
      padding: 2rem 0rem;
    }
  }
`

export const Col = styled.div`
  flex: 1;
  display: flex;
  position: relative;
  flex-direction: column;

  .image {
    width: 100%;
    height: 100%;
    @media (max-width: 550px) {
      width: 100%;
    }
  }

  .thumbs {
    left: 0%;
    top: 100%;
    width: 100%;
    display: flex;
    padding: 5px;
    position: absolute;
    transform: translate(-0%, -100%);
    background: rgba(0, 0, 0, 0.5);
  }
`

export const Images = styled.img`
  height: 3rem;
  margin-right: 5px;
`

export const IconBtn = styled.button`
  top: 0%;
  left: 100%;
  border: none;
  padding: 5px;
  outline: none;
  display: flex;
  color: #ffffff;
  cursor: pointer;
  position: absolute;
  background: #276ef1;
  align-items: center;
  margin-bottom: 2rem;
  justify-content: center;
  transform: translate(-100%, -0%);
  color: ${({ theme }) => theme.body};
  background-color: ${({ theme }) => theme.text};
`

export const Wishing = styled(BiHeart)`
  font-size: 3rem;
`

export const Span = styled.div``

export const Title = styled.h1`
  padding: 10px;
  text-transform: capitalize;
  color: ${({ theme }) => theme.body};
  background-color: ${({ theme }) => theme.text};
`
export const Price = styled.p`
  padding: 10px;
  font-weight: 600;
  text-transform: capitalize;
  color: ${({ theme }) => theme.body};
  background-color: ${({ theme }) => theme.text};
`

export const Category = styled.h2`
  text-transform: capitalize;
`
export const Attribute = styled.p`
  margin: 0rem 1rem;
  text-transform: capitalize;
`

export const Discount = styled.p``
export const Description = styled.p`
  margin-top: 2rem;
  font-size: 1.125rem;
  line-height: 2rem;
`
export const Tag = styled.p`
  padding: 5px 10px;
  margin: 1rem 0rem;
  color: ${({ theme }) => theme.body};
  background-color: ${({ theme }) => theme.text};
`

export const AddToCart = styled.button`
  width: 100%;
  border: none;
  outline: none;
  display: flex;
  padding: 1rem;
  cursor: pointer;
  font-size: 1.125rem;
  align-items: center;
  flex-direction: row;
  text-decoration: none;
  text-transform: capitalize;
  transition: 0.3s ease-in-out;
  justify-content: space-around;
  color: ${({ theme }) => theme.body};
  background-color: ${({ theme }) => theme.text};

  &:hover {
    background-color: ${({ theme }) => theme.sameHover};
  }

  &::before {
    content: 'add to cart';
  }
`
