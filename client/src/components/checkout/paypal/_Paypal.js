import React, { useContext, useState } from 'react'
import styled from 'styled-components'

import { StyledSelect } from '../../../styles/Crud.element'
import { CartContext } from '../../../global/exports'
import { CustemStyles } from '../../../styles/DropDown.element'
import { countries } from '../stripe/prebuilt/Coutnries'
import { useToasts } from '@geist-ui/react'
import useApi from '../../../hooks/useApi'

const _Paypal = () => {
  const paypal = React.useRef()
  const [, setToast] = useToasts()
  const { total } = useContext(CartContext)

  const [line1, setLine1] = useState('')
  const [line2, setLine2] = useState('')
  const [country, setCoutry] = useState('')
  const [countrieFN, setCountriesFN] = useState('')
  const [city, setCity] = useState('')
  const [zipCode, setZipCode] = useState()
  const [numberStart, setNumberStart] = useState('')
  const [returnableVal, setReturnableVal] = useState()

  const [paied, setPied] = useState(false)
  const [disable, setDisable] = useState(false)
  const [shipping, setShipping] = useState('')

  React.useLayoutEffect(() => {
    useApi
      .get('/api/returnpolicy')
      .then((res) => setReturnableVal(res.data.duration))
  }, [])

  React.useEffect(() => {
    window.paypal
      .Buttons({
        createOrder: (data, actions, err) => {
          return actions.order.create({
            intent: 'CAPTURE',
            purchase_units: [
              {
                amount: {
                  currency_code: 'GBP',
                  value: Math.ceil(total * 0.72411175 * 100) / 100,
                },
              },
            ],
          })
        },
        onApprove: async (data, actions) => {
          const order = await actions.order.capture()
          setShipping(order.id)
          setPied(true)
        },
        onError: (err) => {
          console.log(err)
        },
      })

      .render(paypal.current)
  }, []) // eslint-disable-line

  return (
    <>
      <Wrapper>
        {paied ? (
          <Div>
            <FormFieldContainer>
              <Label htmlFor='line1'>Adress1</Label>
              <Input
                name='line1'
                type='text'
                placeholder='adress'
                required
                onChange={(e) => setLine1(e.target.value)}
              />
            </FormFieldContainer>

            <FormFieldContainer>
              <Label htmlFor='line2'>Adress 2</Label>
              <Input
                name='line2'
                type='text'
                placeholder='adress 2, optional'
                onChange={(e) => setLine2(e.target.value)}
              />
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
              <Input
                name='city'
                type='text'
                placeholder='city...'
                required
                onChange={(e) => setCity(e.target.value)}
              />
            </FormFieldContainer>

            <FormFieldContainer>
              <Label htmlFor='postal_code'>postal code</Label>
              <Input
                name='postal_code'
                type='number'
                placeholder='postal code...'
                required
                onChange={(e) => setZipCode(e.target.value)}
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
              {numberStart}
            </FormFieldContainer>
            <FormFieldContainer>
              <br />
              <SubmitButton
                disabled={disable}
                onClick={() => {
                  useApi
                    .post('/api/payement/facture', {
                      transaction_id: `pp_${shipping.toString()}`,
                      payment_methode: 'PayPal',
                      amount_to_pay: Math.ceil(total * 0.72411175 * 100) / 100,
                      country: countrieFN,
                      state: city,
                      postal_code: zipCode,
                      phone_number: numberStart,
                      line1: line1,
                      line2: line2,
                      returnable: returnableVal,
                    })
                    .then(() => {
                      setDisable(true)
                      setToast({
                        text: 'your payement went through',
                        type: 'success',
                        actions: [
                          { name: 'check reciep', handler: () => alert('see') },
                        ],
                      })
                    })
                }}>
                {disable ? 'Order has been placed' : 'verify address'}
              </SubmitButton>
            </FormFieldContainer>
          </Div>
        ) : (
          <Wrapper>
            <Div>
              <p>Please verify your billing address after paying</p>
              <div ref={paypal} />
            </Div>
          </Wrapper>
        )}
      </Wrapper>
    </>
  )
}

export default _Paypal

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const Div = styled.div`
  width: 500px;
  margin: 2rem auto;

  @media (max-width: 768px) {
    width: 100%;
  }
`

const FormFieldContainer = styled.div`
  width: 100%;
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
