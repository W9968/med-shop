import React from 'react'
import {
  Wrapper,
  Sider,
  SubSide,
  Header,
  SubHeader,
  Content,
} from '../styles/DashLayout.element'
import {
  SideMenu,
  TopHeader,
  NextHeader,
  ContentSection,
} from '../components/imports.js'
import { useRouteMatch } from 'react-router-dom'
import { useMediaQuery } from '../hooks/useMediaQuery'

const Dashlayout = () => {
  const { path } = useRouteMatch()

  return (
    <>
      <Wrapper>
        {!useMediaQuery(1366) && (
          <Sider>
            <SideMenu />
          </Sider>
        )}
        <SubSide>
          <Header>
            <TopHeader />
          </Header>
          <SubHeader>
            <NextHeader />
          </SubHeader>
          <Content>
            <ContentSection route={path} />
          </Content>
        </SubSide>
      </Wrapper>
    </>
  )
}

export default Dashlayout
