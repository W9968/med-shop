import React from 'react'
import {
  Wrapper,
  MobileWrapper,
  Sider,
  SubSide,
  Header,
  SubHeader,
  Content,
  Footer,
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

  return useMediaQuery(1366) ? (
    <>
      <MobileWrapper>
        <Header>
          <Header>
            <TopHeader />
          </Header>
          <SubHeader>
            <NextHeader />
          </SubHeader>
        </Header>
        <Content>
          <ContentSection route={path} />
        </Content>

        <Footer>eee</Footer>
      </MobileWrapper>
    </>
  ) : (
    <Wrapper>
      <Wrapper>
        <Sider>
          <SideMenu />
        </Sider>
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
          <Footer>eee</Footer>
        </SubSide>
      </Wrapper>
    </Wrapper>
  )
}

export default Dashlayout
