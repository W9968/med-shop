import React from 'react'

// imports
import { useAuth } from '../services/context/AuthContext'

const Home = () => {
  const { currentUser } = useAuth()

  return (
    <>
      <p>home</p>
      {console.log(currentUser)}
      {currentUser === null ? <p>error</p> : <p>{currentUser.name}</p>}
    </>
  )
}

export default Home
