import React, { useState, useEffect } from 'react'

import styled from 'styled-components'
import useApi from '../../hooks/useApi.js'
import { useAuth } from '../../global/exports.js'
import { TextArea } from '../../styles/Crud.element'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import Comments from './Comments.js'

const OneProducttabs = ({ item }) => {
  const { logged } = useAuth()
  const [req, setRes] = useState([])
  const [comment, setComment] = useState('')
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    useApi.get(`api/comment/${item.id}`).then((response) => {
      if (response.status === 200) {
        setRes(response.data.comments)
      }
    })
  })

  return (
    <>
      <Stylich>
        <Tabs style={{ width: '100%', margin: '1rem 0' }} variant='enclosed'>
          <TabList>
            <StyledTabs
              _selected={{
                bg: localStorage.getItem('mode') === 'light' ? '#fff' : '#333',
              }}>
              details
            </StyledTabs>
            <StyledTabs
              _selected={{
                bg: localStorage.getItem('mode') === 'light' ? '#fff' : '#333',
              }}>
              comments
            </StyledTabs>
          </TabList>

          <Panel>
            <TabPanel>
              <div dangerouslySetInnerHTML={{ __html: item.details }} />
            </TabPanel>
            {logged ? (
              <TabPanel>
                <div className='comment-section'>
                  <TextArea
                    onChange={(e) => setComment(e.target.value)}
                    placeholder='place your comment here...'
                  />
                  <Button
                    style={{ margin: '1rem 0', alignSelf: 'flex-end' }}
                    onClick={() => {
                      setLoading(true)
                      useApi
                        .post('/api/comment', {
                          comment: comment,
                          product_id: item.id,
                        })
                        .then((response) => {
                          return
                        })
                        .then(() => setLoading(false))
                    }}>
                    {loading ? 'posting comment...' : 'add Comment'}
                  </Button>
                </div>

                {req.map((el) => {
                  return (
                    <Comments
                      key={el.id}
                      name={el.user_name}
                      comments={el.comment}
                    />
                  )
                })}

                {}
              </TabPanel>
            ) : (
              <TabPanel>
                <p>you need to be logged in to comment</p>
              </TabPanel>
            )}
          </Panel>
        </Tabs>
      </Stylich>
    </>
  )
}

export default OneProducttabs

const Stylich = styled.div`
  .chakra-tabs__tablist {
    background: ${({ theme }) => theme.hover};
  }
`

const Button = styled.button`
  flex: 1;
  border: none;
  outline: none;
  cursor: pointer;
  padding: 13px 2rem;
  font-size: 1.125rem;
  text-transform: capitalize;
  color: ${({ theme }) => theme.body};
  background: ${({ theme }) => theme.text};

  @media (max-width: 768px) {
    width: 100%;
  }
`

const StyledTabs = styled(Tab)`
  border: none;
  outline: none;
  display: flex;
  cursor: pointer;
  font-weight: 600;
  padding: 10px;
  font-size: 1.125rem;
  align-items: center;
  margin-right: 15px;
  text-transform: capitalize;
  font-family: proxima-nova, sans-serif;
  color: ${({ theme }) => theme.text};
  background: ${({ theme }) => theme.hover};
`

const Panel = styled(TabPanels)`
  padding: 1rem 0;
  border-top: 1px solid ${({ theme }) => theme.hover};

  .comment-section {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
`
