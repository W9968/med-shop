import React from 'react'
import styled from 'styled-components'

const Comments = ({ name, comments }) => {
  return (
    <>
      <Container>
        <Avatar>
          <p style={{ margin: 0, padding: 0 }}>{name[0]}</p>
        </Avatar>
        <div style={{ marginLeft: '1rem' }}>
          <Name>{name}</Name>
          <Comment>{comments}</Comment>
        </div>
      </Container>
    </>
  )
}

export default Comments

const Container = styled.div`
  display: flex;
  padding: 10px 0;
  flex-direction: row;
  align-items: flex-start;
  border-bottom: 1px solid ${({ theme }) => theme.hover};
`

const Avatar = styled.div`
  width: 36px;
  height: 36px;
  display: flex;
  border-radius: 50%;
  align-items: center;
  justify-content: center;
  border: 1px solid ${({ theme }) => theme.text};
`

const Name = styled.h3`
  font-size: 130%;
  text-transform: capitalize;
`

const Comment = styled.p``
