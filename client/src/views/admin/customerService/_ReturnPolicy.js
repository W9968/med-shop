import React, { useState, useEffect } from 'react'
import { useCrud } from '../../../global/exports'
import { ContentHeader, ContentLoader } from '../../../components/imports'
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
  useEffect(() => {
    loadData('returnpolicy')
  }, []) // eslint-disable-line

  const [period, setPeriod] = useState()
  const { updateData, storeData, loadData, socket, loading } = useCrud()
  const [checkes, setChecks] = useState(
    ...socket.map((val) => val.return_policy)
  )

  return (
    <>
      <ContentHeader header='Return policy' boolState={false} />
      <Wrapper>
        {socket.length === 0 ? (
          <>
            <InputGroup>
              <Checkbox onChange={(e) => setChecks(e.target.checked)}>
                <p>status: Enabled</p>
              </Checkbox>
            </InputGroup>
            <InputGroup>
              <Label>set period</Label>
              <Input
                type='number'
                placeholder='set a period of time'
                onChange={(e) => setPeriod(e.target.value)}
              />
            </InputGroup>
            <Div>
              <Button
                onClick={() => {
                  storeData('returnpolicy', {
                    return_policy: checkes,
                    duration: period,
                  })
                }}>
                create
              </Button>
            </Div>
          </>
        ) : loading ? (
          <ContentLoader />
        ) : (
          <>
            <InputGroup>
              <Checkbox
                defaultChecked={checkes}
                onChange={(e) => setChecks(e.target.checked)}>
                <p>status: {checkes ? 'Enabled' : 'Disabled'}</p>
              </Checkbox>
            </InputGroup>
            <InputGroup>
              <Label>set period</Label>
              <Input
                type='number'
                placeholder='set a period of time'
                defaultValue={socket.map((val) => val.duration)}
                onChange={(e) => setPeriod(e.target.value)}
              />
            </InputGroup>
            <Div>
              <Button
                onClick={() => {
                  updateData('returnpolicy', 1, {
                    return_policy: checkes,
                    duration: period,
                  })
                }}>
                update
              </Button>
            </Div>
            <div style={{ margin: '1rem 0rem', padding: '1rem' }}>
              {socket.map((value) => {
                return value.return_policy ? (
                  <>
                    <p style={{ listStyle: 'none' }}>
                      Return policy is set to <>{value.duration}</> days
                    </p>
                  </>
                ) : (
                  <>
                    <p style={{ listStyle: 'none' }}>
                      Return policy is disabled
                    </p>
                  </>
                )
              })}
            </div>
          </>
        )}
      </Wrapper>
    </>
  )
}

export default _ReturnPolicy
