import React, { useEffect } from 'react'
import Homelayout from '../../layout/Home.layout'
import { useToasts } from '@geist-ui/react'
import { useAuth } from '../../global/exports'

const _Home = () => {
  const [, setToast] = useToasts()
  const { currentUser, logged } = useAuth()

  useEffect(() => {
    logged &&
      currentUser.email_verified_at === null &&
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
