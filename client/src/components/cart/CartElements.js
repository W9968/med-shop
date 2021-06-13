import React from 'react'
import styled from 'styled-components'
import { CartContext } from '../../global/exports'
import { BiPlus, BiMinus, BiTrashAlt } from 'react-icons/bi'

const CartElements = () => {
  const {
    cartItems,
    increase,
    decrease,
    removeProduct,
    // clearCart,
    // itemCount,
    // addProduct,
  } = React.useContext(CartContext)

  React.useEffect(() => {
    cartItems.forEach((el) => el.quantity === 0 && removeProduct(el))
  })

  return (
    <>
      {cartItems.map((elem, key) => {
        return (
          <Card key={key}>
            <Side>
              <Image
                src={`http://localhost:8000/storage/products/${elem.image}`}
                alt={elem.image}
              />
            </Side>
            <Side>
              <div>
                <p
                  style={{
                    fontSize: '1.125rem',
                    fontWeight: 600,
                    textTransform: 'capitalize',
                  }}>
                  {elem.name}
                </p>
                <p
                  style={{
                    fontSize: '1rem',
                    textTransform: 'capitalize',
                  }}>
                  Price: {elem.price}
                </p>
                <p
                  style={{
                    fontSize: '1rem',
                    textTransform: 'capitalize',
                  }}>
                  Qty: {elem.quantity}
                </p>
              </div>
              <CounterInput>
                <Button
                  disabled={elem.quantity === 0 && true}
                  onClick={() => decrease(elem)}>
                  <BiMinus className='cartIncDec' />
                </Button>
                <p>{elem.quantity}</p>
                <Button onClick={() => increase(elem)}>
                  <BiPlus className='cartIncDec' />
                </Button>
              </CounterInput>
            </Side>
            <Side>
              <BiTrashAlt
                className='remove-product-icon'
                onClick={() => removeProduct(elem)}
              />
            </Side>
          </Card>
        )
      })}
    </>
  )
}

export default CartElements

const Card = styled.div`
  display: flex;
  padding: 10px 5px;
  margin-bottom: 1rem;
  border-radius: 12px;

  &:not(:first-child) {
    margin: 0;
  }
`

const Image = styled.img`
  width: 100px;
  height: 100%;
`

const Side = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: space-between;

  &:not(:first-child, :last-child) {
    flex: 1;
    padding: 0 15px;
  }

  .remove-product-icon {
    cursor: pointer;
    margin: 0 0.5rem;
    font-size: 1.5rem;

    :hover {
      color: ${({ theme }) => theme.error};
    }
  }
`

const CounterInput = styled.div`
  width: 100%;
  display: flex;
  margin: 0.225rem 0;
  align-items: center;
  justify-content: space-between;
  background: ${({ theme }) => theme.hover};

  .cartIncDec {
    font-size: 1rem;
  }
`

const Button = styled.div`
  padding: 5px;
  display: flex;
  cursor: pointer;

  &:first-child {
    border-right: 1px solid ${({ theme }) => theme.sameHover};
  }

  &:last-child {
    border-left: 1px solid ${({ theme }) => theme.sameHover};
  }

  &:disabled {
    background-color: ${({ theme }) => theme.error};
  }
`
