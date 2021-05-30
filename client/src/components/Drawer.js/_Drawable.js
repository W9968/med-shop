import React, { useState } from 'react'
import styled from 'styled-components'
import Drawer from 'antd/lib/drawer'
import 'antd/lib/drawer/style/index.css'

const Drawable = ({ icon, children, footer, direction }) => {
  const [visible, setVisible] = useState(false)

  const FooterStyle = {
    border: 'none',
    backgroundColor:
      sessionStorage.getItem('mode') === 'light' ? '#ffffff' : '#111111',
  }

  const DrawerStyle = {
    color: sessionStorage.getItem('mode') === 'light' ? '#111111' : '#ffffff',
    overflowY: 'auto',
    backgroundColor:
      sessionStorage.getItem('mode') === 'light' ? '#ffffff' : '#111111',
  }

  return (
    <>
      <Button onClick={() => setVisible(true)}>{icon}</Button>
      <Drawerr
        width={300}
        height={100}
        placement={direction === 'left' ? 'left' : 'right'}
        onClose={() => setVisible(false)}
        closable={false}
        visible={visible}
        footer={footer}
        footerStyle={FooterStyle}
        drawerStyle={DrawerStyle}>
        {children}
      </Drawerr>
    </>
  )
}

export default Drawable

const Button = styled.button`
  top: 0;
  left: 0;
  margin: 0;
  padding: 0;
  border: none;
  display: flex;
  cursor: pointer;
  background: none;
  font-size: 1.7rem;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.text};

  &:hover {
    color: ${({ theme }) => theme.text};
  }
`

const Drawerr = styled(Drawer)`
  .ant-drawer-body {
    padding: 0 !important;
  }
`
