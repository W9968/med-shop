import React from 'react'
import { StyledSelect } from '../../styles/Crud.element'
import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'

import OnlinePayment from './OnlinePayment'

const stripePromise = loadStripe(
  'pk_test_51I4STaBEBLmRHvyUsptzgZAmygVNvpLgkuRO7YCQimjzizz3QAymZBcXK8wOLMXuema537fB62dDZhSr6eBbAUwR00MwLhIltq'
)

const BillingInformation = () => {
  const [methode, setMethode] = React.useState()

  const CustemStyles = {
    singleValue: () => ({
      color: localStorage.getItem('mode') === 'light' ? '#232323' : '#efefef',
    }),

    container: (provided) => ({
      ...provided,
      width: '100%',
    }),

    control: () => ({
      display: 'flex',
      padding: '5px',
      background:
        localStorage.getItem('mode') === 'light' ? '#efefef' : '#232323',
    }),

    menu: (provided, state) => ({
      ...provided,
      color: state.isSelected && 'red',
      background:
        localStorage.getItem('mode') === 'light' ? '#efefef' : '#232323',
    }),

    option: (provided, state) => ({
      ...provided,
      color: localStorage.getItem('mode') === 'light' ? '#232323' : '#efefef',
      background: state.isSelected
        ? localStorage.getItem('mode') === 'light'
          ? '#ffffff'
          : '#111111'
        : 'none',
      '&:hover': {
        background:
          localStorage.getItem('mode') === 'light' ? '#ffffff' : '#111111',
      },
    }),
  }

  const options = [
    { label: 'pay on delivery', value: 'pay on delivery' },
    { label: 'pay online', value: 'pay online' },
  ]

  return (
    <>
      <StyledSelect
        name='category'
        styles={CustemStyles}
        placeholder='select my brand'
        options={options}
        onChange={(e) => {
          setMethode(e.value)
        }}
      />
      {methode}
      <Elements stripe={stripePromise}>
        <OnlinePayment price={15} />
      </Elements>
    </>
  )
}

export default BillingInformation
