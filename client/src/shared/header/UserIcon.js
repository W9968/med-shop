import React from 'react'

//imports
import { useAuth } from '../../services/context/AuthContext'
//styles
import { LogginIcon, LoggoutIcon } from '../../styles/Header.element'

const UserIcon = () => {
  const { currentUser } = useAuth()
  return <>{currentUser !== null ? <LoggoutIcon /> : <LogginIcon />}</>
}

export default UserIcon
