import React from 'react'

import CardHeader from '../../shared/hero/CardHeader'
import { Wrapper } from '../../styles/content.element'

const Customer = () => {
  return (
    <>
      <Wrapper>
        <CardHeader title='customer list' buttonUri='add customer' />
      </Wrapper>
    </>
  )
}

export default Customer
