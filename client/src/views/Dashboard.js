import React from 'react'
import { useRouteMatch } from 'react-router-dom'
//imports
import SideBar from '../shared/layout/SideBar'
import HeaderBar from '../shared/layout/HeaderBar'
import Content from '../shared/layout/Content'
// styles
import { Layout } from 'antd'
import { Wrapper } from '../styles/Dashboard.element'

const Dashboard = () => {
  let { path, url } = useRouteMatch()

  return (
    <>
      <Wrapper>
        <Layout style={{ minHeight: '100vh' }}>
          <SideBar />
          <Layout>
            <HeaderBar />
            <Content route={path} />
          </Layout>
        </Layout>
      </Wrapper>
    </>
  )
}

export default Dashboard
