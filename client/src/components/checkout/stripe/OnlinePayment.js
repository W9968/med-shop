import React, { useLayoutEffect, useState } from 'react'

import styled from 'styled-components'
import useApi from '../../../hooks/useApi'
import { MdPayment } from 'react-icons/md'
import { CartContext, useAuth } from '../../../global/exports'
import CheckoutError from './prebuilt/CheckoutError'
import { StyledSelect } from '../../../styles/Crud.element'
import { CustemStyles } from '../../../styles/DropDown.element'
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js'
import { countries } from './prebuilt/Coutnries'
import { useToasts } from '@geist-ui/react'

const OnlinePayment = ({ price, onSuccessfulCheckout }) => {
  const [isProcessing, setProcessingTo] = useState(false)
  const [checkoutError, setCheckoutError] = useState()
  const [numberStart, setNumberStart] = useState('')
  const [country, setCoutry] = useState('')
  const [countrieFN, setCountriesFN] = useState('')
  const [returnableVal, setReturnableVal] = useState()
  const { cartItems } = React.useContext(CartContext)
  const stripe = useStripe()
  const elements = useElements()
  const [, setToast] = useToasts()
  const { logged, currentUser } = useAuth()

  useLayoutEffect(() => {
    useApi
      .get('/api/returnpolicy')
      .then((res) => setReturnableVal(res.data.duration))
  }, [])

  const handleCardDetailsChange = (event) => {
    event.error ? setCheckoutError(event.error.message) : setCheckoutError()
  }

  const handleFormSubmit = async (e) => {
    e.preventDefault()
    setProcessingTo(true)

    if (!stripe || !elements) {
      setProcessingTo(false)
      return
    }
    const billingDetails = {
      name: e.target.name.value,
      email: logged ? currentUser.email : e.target.email.value,
      phone: numberStart,
      address: {
        city: e.target.city.value,
        line1: e.target.line1.value,
        line2: e.target.line2.value,
        country: country,
        postal_code: e.target.postal_code.value,
      },
    }
    const cardElement = elements.getElement(CardElement)

    const { error } = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
      billing_details: billingDetails,
    })

    if (error) {
      setCheckoutError(error.message)
      setToast({
        text: error.message,
        type: 'error',
      })
      setProcessingTo(false)
    } else {
      try {
        logged
          ? await useApi
              .post('api/payment', {
                amount: Math.ceil(price * 0.72411175 * 100),
              })
              .then((response) => {
                useApi
                  .post('/api/payement/facture', {
                    transaction_id: response.data.id,
                    payment_methode: 'Card',
                    amount_to_pay: response.data.amount / 100,
                    country: countrieFN,
                    state: billingDetails.address.city,
                    postal_code: billingDetails.address.postal_code,
                    phone_number: billingDetails.phone,
                    line1: billingDetails.address.line1,
                    line2: billingDetails.address.line2,
                    returnable: returnableVal,
                    cart: JSON.stringify(cartItems),
                  })
                  .then(() =>
                    setToast({
                      text: 'your payement went through',
                      type: 'success',
                      actions: [
                        { name: 'check reciep', handler: () => alert('see') },
                      ],
                    })
                  )
              })
              .then(() => setProcessingTo(false))
          : setToast({
              text: 'you need to be logged into your account',
              type: 'error',
            })
      } catch (err) {
        console.log('err')
        setProcessingTo(false)
      }
      setProcessingTo(false)
    }
  }

  const iframeStyles = {
    base: {
      color: localStorage.getItem('mode') === 'light' ? '#111' : '#fff',
      fontSize: '16px',
      iconColor: localStorage.getItem('mode') === 'light' ? '#111' : '#fff',
      '::placeholder': {
        color: '#232323',
      },
    },
    invalid: {
      iconColor: '#c50000',
      color: '#c50000',
    },
    complete: {
      iconColor: '#29bc9b',
    },
  }

  const cardElementOpts = {
    iconStyle: 'solid',
    style: iframeStyles,
    hidePostalCode: true,
  }

  return (
    <>
      <form onSubmit={handleFormSubmit}>
        <Div>
          <FormFieldContainer>
            <Label htmlFor='name'>full name</Label>
            <Input name='name' type='text' placeholder='your name' required />
          </FormFieldContainer>

          {logged ? (
            <FormFieldContainer>
              <Label htmlFor='email'>email</Label>
              <Input
                readOnly
                defaultValue={currentUser.email}
                name='email'
                type='text'
                placeholder='your name'
                required
              />
            </FormFieldContainer>
          ) : (
            <FormFieldContainer>
              <Label htmlFor='email'>email</Label>
              <Input
                name='email'
                type='email'
                placeholder='your email'
                required
              />
            </FormFieldContainer>
          )}

          <FormFieldContainer>
            <Label htmlFor='line1'>Adress1</Label>
            <Input name='line1' type='text' placeholder='adress' required />
          </FormFieldContainer>

          <FormFieldContainer>
            <Label htmlFor='line2'>Adress 2</Label>
            <Input name='line2' type='text' placeholder='adress 2, optional' />
          </FormFieldContainer>

          <FormFieldContainer>
            <Label htmlFor='country'>country</Label>
            <StyledSelect
              name='country'
              styles={CustemStyles}
              placeholder='select my brand'
              options={countries}
              onChange={(e) => {
                setCoutry(e.value)
                setCountriesFN(e.label)
              }}
            />
          </FormFieldContainer>

          <FormFieldContainer>
            <Label htmlFor='city'>city</Label>
            <Input name='city' type='text' placeholder='city...' required />
          </FormFieldContainer>

          <FormFieldContainer>
            <Label htmlFor='postal_code'>postal code</Label>
            <Input
              name='postal_code'
              type='number'
              placeholder='postal code...'
              required
            />
          </FormFieldContainer>

          <FormFieldContainer>
            <Label htmlFor='phone_number'>phone</Label>
            <Input
              name='phone_number'
              type='number'
              autoComplete='no'
              placeholder='your country code will automatically be added...'
              onChange={(e) => {
                setNumberStart(
                  `(${
                    countries.filter((el) => el.value === country)[0].dialcode
                  }) ${e.target.value}`
                )
              }}
              required
            />
          </FormFieldContainer>
          {numberStart}
        </Div>

        <Row>
          <CardElementContainer>
            <CardElement
              options={cardElementOpts}
              onChange={handleCardDetailsChange}
            />
          </CardElementContainer>
        </Row>
        <Div>
          {checkoutError && <CheckoutError>{checkoutError}</CheckoutError>}
        </Div>
        <Div>
          <SubmitButton type='submit' disabled={isProcessing || !stripe}>
            {isProcessing ? (
              'Processing...'
            ) : (
              <>
                <span>pay</span>
                <MdPayment style={{ margin: '0 0.5rem' }} />
              </>
            )}
          </SubmitButton>
        </Div>
      </form>
    </>
  )
}

export default OnlinePayment

const SubmitButton = styled.button`
  width: 100%;
  padding: 1rem;
  border: none;
  outline: none;
  display: flex;
  cursor: pointer;
  font-weight: 600;
  font-size: 1.25rem;
  align-items: center;
  justify-content: center;
  text-transform: capitalize;
  color: ${({ theme }) => theme.body};
  background: ${({ theme }) => theme.text};
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
`

const CardElementContainer = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  & .StripeElement {
    width: 100%;
    padding: 15px;
  }
`

const Div = styled.div`
  width: 500px;
  margin: 2rem auto;

  @media (max-width: 768px) {
    width: 100%;
  }
`

const Row = styled.div`
  width: 500px;
  margin: 2rem auto;
  border: 2px solid ${({ theme }) => theme.text};

  @media (max-width: 768px) {
    width: 100%;
  }
`

const FormFieldContainer = styled.div`
  display: flex;
  margin-bottom: 10px;
  flex-direction: column;
`

const Label = styled.label`
  width: 100%;
  font-size: 1rem;
  text-transform: capitalize;
  color: ${({ theme }) => theme.sameHover};
  background-color: ${({ theme }) => theme.body};
`

const Input = styled.input`
  width: 100%;
  border: none;
  padding: 15px;
  display: flex;
  outline: none;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  background-color: transparent;
  color: ${({ theme }) => theme.text};
  background-color: ${({ theme }) => theme.hover};

  &:read-only {
    color: ${({ theme }) => theme.body};
    background-color: ${({ theme }) => theme.sameHover};
  }
`
