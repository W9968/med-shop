import React, { useLayoutEffect } from 'react'
import useApi from '../../../hooks/useApi'
import { Doughnut } from 'react-chartjs-2'
import { Card } from '@geist-ui/react'
import styled from 'styled-components'

const UserCount = () => {
  const [users, setUsers] = React.useState([])
  const [loading, setLoading] = React.useState(false)

  useLayoutEffect(() => {
    setLoading(true)
    useApi
      .get('/api/customer')
      .then((response) => {
        setUsers(response.data)
      })
      .then(() => setLoading(false))
  }, [setUsers])

  const verified = users.filter((el) => el.email_verified_at !== null).length
  const non_verified = users.filter(
    (el) => el.email_verified_at === null
  ).length

  const data = {
    datasets: [
      {
        data: [verified, non_verified],
        backgroundColor: ['rgba(54, 162, 235, 1)', 'rgba(255, 99, 132, 1)'],
        borderWidth: 0,
      },
    ],
  }

  const options = {
    responsive: true,
    maintainAspectRatio: false,
  }

  const CardStyle = {
    margin: '1.5rem 0',
    color: localStorage.getItem('mode') === 'dark' ? '#fff' : '#222',
    background: localStorage.getItem('mode') === 'light' ? '#fff' : '#333',
    border: 'none',
  }

  return (
    <>
      {loading ? (
        ''
      ) : (
        <Card shadow style={CardStyle}>
          <Div>
            <div
              style={{
                display: 'flex',
                width: '150px',
              }}>
              <Doughnut
                className='canvas'
                height={150}
                width={150}
                data={data}
                options={options}
              />
            </div>
            <div style={{ flex: 1, margin: '0 1rem' }}>
              <h1>Total users</h1>
              <h1>{users.length}</h1>
            </div>
          </Div>
          <Card.Footer>
            <Div>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <div className='color1' /> Verfied
              </div>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  margin: '0 5px',
                }}>
                <div className='color2' />
                Non verified
              </div>
            </Div>
          </Card.Footer>
        </Card>
      )}
    </>
  )
}

export default UserCount

const Div = styled.div`
  display: flex;
  align-items: center;

  .color1 {
    width: 10px;
    height: 10px;
    background-color: rgba(54, 162, 235, 1);
  }

  .color2 {
    width: 10px;
    height: 10px;
    background-color: rgba(255, 99, 132, 1);
  }
`
