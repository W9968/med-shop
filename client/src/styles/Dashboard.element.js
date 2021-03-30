import styled from 'styled-components'
import { Layout } from 'antd'
import { BiChevronsLeft, BiChevronsRight } from 'react-icons/bi'

const { Content, Sider } = Layout

export const Wrapper = styled.div`
  top: 0;
  left: 0;
  width: 100%;
  min-height: 100vh;
  position: absolute;
  background-color: #ebecf5;
`
// header //
export const StyledHeader = styled.div`
  display: flex;
  flex-direction: row;
  padding: 0.5rem 1rem;
  justify-content: flex-end;
  background-color: var(--wht);
  box-shadow: 0px 10px 10px 00px #e1e1e1;
`

export const List = styled.ul`
  display: flex;
  list-style: none;
  flex-direction: row-reverse;
`

export const Item = styled.li`
  display: flex;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  border-radius: 5px;
  color: var(--txt);

  &:hover {
    background-color: var(--bgd);
  }

  .name {
    font-weight: 700;
    letter-spacing: 1px;
  }
`

export const Space = styled.div`
  position: relative;

  .overlay {
    top: 0%;
    left: 0%;
    position: absolute;
    width: 100%;
    height: 100%;
    opacity: 0.3;
    background-color: var(--nab);
  }
`

export const Div = styled.div`
  top: 50%;
  left: 10%;
  width: 50%;
  display: flex;
  position: absolute;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  transform: translate(-10%, -50%);

  .svg {
    margin: 0px;
    padding: 12px 15px;
    border-radius: 10px;
    background-color: #f3f6f9;
  }
`

export const Button = styled.button`
  margin: 1rem;
  border: none;
  outline: none;
  color: #3699ff;
  font-weight: 700;
  border-radius: 10px;
  padding: 0.4rem 0.8rem;
  text-transform: capitalize;
  background-color: #e1f0ff;

  &:hover {
    color: var(--wht);
    background-color: #3699ff;
  }
`

// header //

// content
export const StyledContent = styled(Content)`
  height: 80vh;
  padding: 1.5rem;
  margin: 1.5rem 1rem;
  overflow-y: auto;
  background-color: var(--wht);
`
// content //

// side bar //
export const StyledSider = styled(Sider)`
  .anticon {
    font-size: 1.2rem;
  }

  .ant-menu-item {
    text-transform: capitalize;
  }
  .ant-menu-item-selected {
    background-color: #3699ff !important;
  }
`

export const Logo = styled.div`
  width: 100%;
  padding: 1rem;
  color: white;
  display: flex;
  margin-bottom: 2rem;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
`

export const LeftArrow = styled(BiChevronsLeft)`
  cursor: pointer;
  font-size: 1.7rem;
`
export const RightArrow = styled(BiChevronsRight)`
  cursor: pointer;
  font-size: 1.7rem;
  margin: 0rem auto;
`
// side bar //
