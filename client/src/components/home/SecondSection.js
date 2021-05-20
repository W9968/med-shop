import React from 'react'
import styled from 'styled-components'
import { useHistory } from 'react-router'

const SecondSection = () => {
  const history = useHistory()
  return (
    <>
      <Row>
        <Col>
          <Image src='asset/homeprod/pro3.png' />
        </Col>
        <Col>
          <h1 style={{ marginBottom: '1rem' }}>Medecine esthetique</h1>
          <p>
            Faire sa médecine esthétique en tunisie, c'est profiter de la
            compétance de chirurgiens confirmés de prix trés intéressants chez
            notre clinique.
          </p>
          <button className='btn' onClick={() => history.push('/cosmetic')}>
            S'avoir Plus
          </button>
        </Col>
      </Row>
    </>
  )
}

export default SecondSection

const Row = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: 96px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column-reverse;
  }
`

const Col = styled.div`
  flex: 1;
  position: relative;

  .btn {
    border: none;
    outline: none;
    font-weight: 600;
    margin: 1.5rem 0rem;
    padding: 10px 15px;
    border-radius: 8px;
    font-size: 1.125rem;
    color: ${({ theme }) => theme.primary};
    background-color: ${({ theme }) => theme.third};

    :hover {
      cursor: pointer;
      background-color: ${({ theme }) => theme.hover};
    }
  }
`

const Image = styled.img`
  width: 500px;
  border-radius: 25px;

  @media (max-width: 1100px) {
    width: 400px;
  }

  @media (max-width: 900px) {
    width: 350px;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`
