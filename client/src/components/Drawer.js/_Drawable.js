import React, { useState } from 'react'
import styled from 'styled-components'
import Drawer from 'antd/lib/drawer'
import 'antd/lib/drawer/style/index.css'

const Drawable = ({ icon, children, footer }) => {
  const [visible, setVisible] = useState(false)

  const FooterStyle = {
    border: 'none',
    backgroundColor: `#ffffff`,
  }

  const DrawerStyle = {
    color: `#fcfffd`,
    overflowY: 'auto',
    backgroundColor: `#ffffff`,
  }

  return (
    <>
      <Button onClick={() => setVisible(true)}>{icon}</Button>
      <Drawerr
        width={300}
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
  top: 0;
  left: 0;
  margin: 0;
  padding: 0;
  border: none;
  display: flex;
  cursor: pointer;
  background: none;
  font-size: 1.5rem;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.secondary};

  &:hover {
    color: ${({ theme }) => theme.third};
  }
`

const Drawerr = styled(Drawer)`
  .ant-drawer-body {
    padding: 0 !important;
  }
`
