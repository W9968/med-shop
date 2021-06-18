import React from 'react'
import { Card } from '@geist-ui/react'
import useApi from '../../hooks/useApi'
import styled from 'styled-components'
import Pagelayout from '../../layout/Page.layout'
import { useProducts } from '../../global/exports'

const _WishList = () => {
  const CardStyle = {
    margin: '1.5rem 0',
    color: localStorage.getItem('mode') === 'dark' ? '#fff' : '#222',
    background: localStorage.getItem('mode') === 'light' ? '#fff' : '#333',
    border: 'none',
  }

  React.useEffect(() => {
    useApi.get('/api/wishlists').then((res) => console.log(res.data))
  }, [])

  const { fetched } = useProducts()

  return (
    <>
      <Pagelayout>
        <SimilarText>My Wishlist</SimilarText>
        <Wrapper>
          {fetched.map((val) => {
            return (
              <Card style={CardStyle} key={val.id}>
                <Card.Body className='cardBody'>
                  <img
                    className='image'
                    alt={val.images[0].file_path}
                    src={`http://localhost:8000/storage/products/${val.images[0].file_path}`}
                  />

                  <div className='left-side'>
                    <div>
                      <h1 className='cardTitle'>{val.name}</h1>
                      <p>{val.price}$</p>
                      <br />
                      <p>{val.description}</p>
                      <br />
                    </div>
                    <Button>Delete from wishlist</Button>
                  </div>
                </Card.Body>
              </Card>
            )
          })}
        </Wrapper>
      </Pagelayout>
    </>
  )
}

export default _WishList

const SimilarText = styled.h1`
  margin-bottom: 2rem;
  color: ${({ theme }) => theme.sameHover};
`

const Wrapper = styled.div`
  .cardTitle {
    display: flex;
    font-size: 1.25rem;
    align-items: center;
    justify-content: space-between;
    /* margin-bottom: 1rem; */
    text-transform: capitalize;
  }

  .left-side {
    width: 600px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    @media (max-width: 900px) {
      widows: 100%;
    }
  }

  .heartButton {
    border: none;
    outline: none;
    display: flex;
    cursor: pointer;
    background: none;
    color: ${({ theme }) => theme.text};
  }

  .image {
    display: flex;
    margin-right: 1rem;
    width: 200px !important;
  }

  .cardBody {
    display: flex;
    flex-direction: row;
  }

  .cardFooter {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .cardlink {
    font-size: 110%;
    cursor: pointer;
    color: ${({ theme }) => theme.optional};
  }
  .wishlistIcon {
    display: flex;
    border: none;
    outline: none;
    padding: 10px;
    margin-left: 5px;
    cursor: pointer;
    color: ${({ theme }) => theme.body};
    background: ${({ theme }) => theme.text};
  }
`

const Button = styled.button`
  width: 200px;
  border: none;
  outline: none;
  cursor: pointer;
  padding: 13px 0rem;
  font-size: 1.125rem;
  text-transform: capitalize;
  color: ${({ theme }) => theme.body};
  background: ${({ theme }) => theme.error};

  @media (max-width: 768px) {
    width: 100%;
  }
`
