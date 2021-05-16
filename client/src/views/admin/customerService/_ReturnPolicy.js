import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useCrud } from '../../../global/exports'
import { ContentHeader } from '../../../components/imports'
import Switch from 'antd/lib/switch'
import 'antd/lib/switch/style/index.css'

const _ReturnPolicy = () => {
  const { loadData, socket, loading } = useCrud()
  const [state, setState] = React.useState(socket.retun_policy)

  const handleSwitchChange = (checked) => {
    setState(checked)
  }

  useEffect(() => {
    loadData('returnpolicy')
  }, []) // eslint-disable-line

  return (
    <>
      <ContentHeader header='Return policy' boolState={false} />
      <Wrapper>
        <Parag>
          by changing this, all product will have a return policy for certain
          amount of time you can define later
        </Parag>
        {!loading && (
          <Div>
            <p
              style={{
                padding: '0rem 0.425rem',
                color: state === '1' ? 'gray' : 'blue',
              }}>
              enabled
            </p>
            <Switch defaultChecked={state} onChange={handleSwitchChange} />
            <p
              style={{
                padding: '0rem 0.425rem',
                color: state === '0' ? 'gray' : 'blue',
              }}>
              disabled
            </p>
          </Div>
        )}
      </Wrapper>
    </>
  )
}

export default _ReturnPolicy

const Wrapper = styled.div`
  display: flex;
  padding: 1rem;
  align-items: flex-start;
  flex-direction: column;
`

const Div = styled.div`
  display: flex;
  margin: 0rem auto;
  flex-direction: row;
`

const Parag = styled.p`
  font-size: 1.125rem;
  margin-bottom: 1rem;
`
