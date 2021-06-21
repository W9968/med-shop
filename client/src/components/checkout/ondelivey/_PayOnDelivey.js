import React, { useContext, useLayoutEffect, useState } from 'react'
import styled from 'styled-components'
import useApi from '../../../hooks/useApi'
import { CartContext, useAuth } from '../../../global/exports'
import { StyledSelect } from '../../../styles/Crud.element'
import { CustemStyles } from '../../../styles/DropDown.element'
import { countries } from '../stripe/prebuilt/Coutnries'
import { useToasts } from '@geist-ui/react'

import MD5 from 'crypto-js/md5'

const _PayOnDelivey = () => {
  const [, setToast] = useToasts()
  const { total, cartItems } = useContext(CartContext)
  const [country, setCoutry] = useState('')
  const [countrieFN, setCountriesFN] = useState('')
  const { logged, currentUser } = useAuth()
  const [numberStart, setNumberStart] = useState('')
  const [returnableVal, setReturnableVal] = useState()

  useLayoutEffect(() => {
    useApi
      .get('/api/returnpolicy')
      .then((res) => setReturnableVal(res.data.duration))
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()

    const billingDetails = {
      name: e.target.name.value,
      email: logged ? currentUser.email : e.target.email.value,
      phone: numberStart,
      address: {
        city: e.target.city.value,
        line1: e.target.line1.value,
        line2: e.target.line2.value,
        country: countrieFN,
        postal_code: e.target.postal_code.value,
      },
    }

    useApi
      .post('/api/payement/facture', {
        transaction_id: `od_${MD5(
          currentUser.id + +new Date() + currentUser.name
        )
          .toString()
          .substring(0, 27)}`,
        payment_methode: 'On Delivery',
        amount_to_pay: Math.ceil(total * 0.72411175 * 100) / 100,
        country: billingDetails.address.country,
        state: billingDetails.address.city,
        postal_code: billingDetails.address.postal_code,
        phone_number: billingDetails.phone,
        line1: billingDetails.address.line1,
        line2: billingDetails.address.line2,
        returnable: returnableVal,
        cart: JSON.stringify(cartItems),
      })
      .then((response) => console.log(response))
      .then(() =>
        setToast({
          text: 'your order has been placed',
          type: 'success',
          actions: [{ name: 'check reciep', handler: () => alert('see') }],
        })
      )
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
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
        <Div>
          <SubmitButton type='submit'>order now</SubmitButton>
        </Div>
      </form>
    </>
  )
}

export default _PayOnDelivey

const SubmitButton = styled.button`
  width: 100%;
  padding: 1rem;
  border: none;
  outline: none;
  display: flex;
  cursor: pointer;
  font-weight: 600;
  font-size: 1rem;
  align-items: center;
  justify-content: center;
  text-transform: capitalize;
  color: ${({ theme }) => theme.body};
  background: ${({ theme }) => theme.text};
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
`

const Div = styled.div`
  width: 500px;
  margin: 2rem auto;

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
