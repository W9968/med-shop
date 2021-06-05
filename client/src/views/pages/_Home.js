import React, { useEffect } from 'react'
import Homelayout from '../../layout/Home.layout'
import { useToasts } from '@geist-ui/react'

const _Home = () => {
  const [, setToast] = useToasts()

  useEffect(() => {
    setToast({
      text: 'Your email address is not verified, make sure to verify your account',
      type: 'warning',
    })
  }, []) // eslint-disable-line

  return (
    <>
      <Homelayout />
    </>
  )
}

export default _Home
