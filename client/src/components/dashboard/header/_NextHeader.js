import React from 'react'
import { BiChevronRight } from 'react-icons/bi'
import { Breadcrumbs } from '@geist-ui/react'

const _NextHeader = () => {
  const path = window.location.pathname

  return (
    <>
      <Breadcrumbs
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
              <Breadcrumbs.Item
                style={{ fontSize: '1rem', fontWeight: 600 }}
                key={key}>
                {route}
              </Breadcrumbs.Item>
            )
          })}
      </Breadcrumbs>
    </>
  )
}

export default _NextHeader
