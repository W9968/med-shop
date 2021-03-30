import React from 'react'

//imports
import SideBar from '../shared/layout/SideBar'
import HeaderBar from '../shared/layout/HeaderBar'
import Content from '../shared/layout/Content'
// styles
import { Layout } from 'antd'
import { Wrapper } from '../styles/Dashboard.element'

const Dashboard = () => {
  return (
    <>
      <Wrapper>
        <Layout style={{ minHeight: '100vh' }}>
          <SideBar />
          <Layout>
            <HeaderBar />
            <Content />
          </Layout>
        </Layout>
      </Wrapper>
    </>
  )
}

export default Dashboard
