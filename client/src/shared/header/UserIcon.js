import React from 'react'

//imports
import { useAuth } from '../../services/context/AuthContext'
//styles
import { Links, LogginIcon, LoggoutIcon } from '../../styles/Header.element'

const UserIcon = () => {
  const { currentUser, Logout } = useAuth()
  return (
    <>
      {currentUser !== '' ? (
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
