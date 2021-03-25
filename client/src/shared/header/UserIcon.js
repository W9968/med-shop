import React from 'react'

//imports
import { useAuth } from '../../services/context/AuthContext'
//styles
import { Links, LogginIcon, LoggoutIcon } from '../../styles/Header.element'

const UserIcon = () => {
  const { logged, Logout } = useAuth()

  return (
    <>
      {logged ? (
        <LoggoutIcon onClick={Logout} />
      ) : (
        <Links to='/login'>
          <LogginIcon />
        </Links>
      )}
    </>
  )
}

export default UserIcon
