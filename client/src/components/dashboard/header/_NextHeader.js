import React from 'react'
import styled from 'styled-components'
import { BiChevronRight } from 'react-icons/bi'

import Breadcrumb from 'antd/lib/breadcrumb'
import 'antd/lib/breadcrumb/style/index.css'

const _NextHeader = () => {
  const path = window.location.pathname

  return (
    <>
      <Container>
        <Breadcrumb
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          separator={<BiChevronRight />}>
          {path
            .slice(1)
            .split('/')
            .map((route, key) => {
              return (
                <Breadcrumb.Item
                  style={{ fontSize: '1rem', fontWeight: 600 }}
                  key={key}>
                  {route}
                </Breadcrumb.Item>
              )
            })}
        </Breadcrumb>
      </Container>
    </>
  )
}

export default _NextHeader

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`
