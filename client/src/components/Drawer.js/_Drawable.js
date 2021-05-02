import React, { useState } from 'react'
import styled from 'styled-components'
import Drawer from 'antd/lib/drawer'
import 'antd/lib/drawer/style/index.css'

const Drawable = ({ icon, children, footer }) => {
  const [visible, setVisible] = useState(false)

  const FooterStyle = {
    border: 'none',
    backgroundColor: `#0b0e11`,
  }

  const DrawerStyle = {
    color: `#fcfffd`,
    overflowY: 'auto',
    backgroundColor: `#0b0e11`,
  }

  return (
    <>
      <Button onClick={() => setVisible(true)}>{icon}</Button>
      <Drawerr
        height={100}
        placement='left'
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
  border: none;
  display: flex;
  cursor: pointer;
  background: none;
  font-size: 1.5rem;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.primary};
`

const Drawerr = styled(Drawer)`
  .ant-drawer-body {
    padding: 0 !important;
  }
`
