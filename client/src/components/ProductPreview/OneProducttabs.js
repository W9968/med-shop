import React, { useState, useEffect } from 'react'

import styled from 'styled-components'
import useApi from '../../hooks/useApi.js'
import { useAuth } from '../../global/exports.js'
import { TextArea } from '../../styles/Crud.element'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'

const OneProducttabs = ({ item }) => {
  const { logged, currentUser } = useAuth()
  const [req, setRes] = useState([])
  const [comment, setComment] = useState('')
  const [loading, setLoading] = useState(false)
  const [update, setUpdate] = useState({ key: null, content: '', type: false })

  useEffect(() => {
    useApi.get(`api/comment/${item.id}`).then((response) => {
      if (response.status === 200) {
        setRes(response.data.comments.reverse())
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
                  {update.type ? (
                    <>
                      <TextArea
                        onChange={(e) => setComment(e.target.value)}
                        placeholder='edit your comment here...'
                      />
                      <Button
                        style={{ margin: '1rem 0', alignSelf: 'flex-end' }}
                        onClick={() => {
                          setLoading(true)
                          useApi
                            .put(`/api/comment/${update.key}`, {
                              comment: comment,
                            })
                            .then(() => {
                              return
                            })
                            .then(() => setLoading(false))
                        }}>
                        {loading ? 'posting edit...' : 'edit Comment'}
                      </Button>
                    </>
                  ) : (
                    <>
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
                            .then(() => {
                              return
                            })
                            .then(() => setLoading(false))
                        }}>
                        {loading ? 'posting comment...' : 'add Comment'}
                      </Button>
                    </>
                  )}
                </div>
                <div
                  style={{ height: '400px', overflowY: 'auto' }}
                  className='comment'>
                  {req.map((el) => {
                    return (
                      <Container key={el.id}>
                        <Avatar>
                          <p style={{ margin: 0, padding: 0 }}>
                            {el.user_name[0]}
                          </p>
                        </Avatar>
                        <div style={{ marginLeft: '1rem', width: '90%' }}>
                          <Name>{el.user_name}</Name>
                          <Comment>{el.comment}</Comment>

                          {currentUser.id === el.user_id && (
                            <Edit>
                              <span
                                className='action'
                                onClick={() =>
                                  setUpdate({
                                    key: el.id,
                                    content: el.comment,
                                    type: true,
                                  })
                                }>
                                edit
                              </span>
                              <span
                                className='action'
                                onClick={() =>
                                  useApi.delete(`/api/comment/${el.id}`)
                                }>
                                delete
                              </span>
                            </Edit>
                          )}
                        </div>
                      </Container>
                    )
                  })}
                </div>
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

  .comment {
    ::-webkit-scrollbar {
      width: 5px;
    }

    .action {
      font-size: 15px;
      cursor: pointer;
      margin-right: 5px;
      color: ${({ theme }) => theme.optional};
    }
  }
`

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

const Edit = styled.div``
