import React, { useState, useEffect } from 'react'
import { ContentHeader, ContentLoader } from '../../../components/imports'
import useApi from '../../../hooks/useApi'
import {
  Wrapper,
  InputGroup,
  Label,
  Input,
  Checkbox,
  Div,
  Button,
} from '../../../styles/Crud.element'

const _ReturnPolicy = () => {
  const [update, setupdate] = useState()
  const [enable, setEnable] = useState(false)
  const [loading, setLoading] = useState(false)
  const [returnable, setReturnable] = useState('')

  const loadData = async () => {
    setLoading(true)
    await useApi
      .get('/api/returnpolicy')
      .then((res) => setReturnable(res.data))
      .then(() => setLoading(false))
  }

  useEffect(() => {
    loadData()
  }, [])

  return (
    <>
      <ContentHeader header='Return policy' boolState={false} />
      {loading ? (
        <ContentLoader />
      ) : returnable.duration === 0 ? (
        <Wrapper>
          <Label>
            <Checkbox onChange={() => setEnable(true)} />
            <span style={{ margin: '0 1rem' }}>enable reutrn policy</span>
          </Label>
          {enable && (
            <>
              <InputGroup key={returnable.duration}>
                <Label>update return policy</Label>
                <Input
                  type='number'
                  placeholder='return periode'
                  defaultValue={returnable.duration}
                  onChange={(e) => setupdate(e.target.value)}
                />
              </InputGroup>
              <Div>
                <Button
                  onClick={() => {
                    useApi
                      .put('/api/returnpolicy', {
                        duration: update,
                      })
                      .then(() => loadData())
                  }}>
                  update
                </Button>
              </Div>
            </>
          )}
        </Wrapper>
      ) : (
        <Wrapper>
          <InputGroup key={returnable.duration}>
            <Label>update return policy</Label>
            <Input
              type='number'
              placeholder='return periode'
              defaultValue={returnable.duration}
              onChange={(e) => setupdate(e.target.value)}
            />
          </InputGroup>
          <Div>
            <Button
              onClick={() => {
                useApi
                  .put('/api/returnpolicy', {
                    duration: update,
                  })
                  .then(() => loadData())
              }}>
              update
            </Button>
          </Div>
        </Wrapper>
      )}
    </>
  )
}

export default _ReturnPolicy
