import styled from 'styled-components'
import { Modal } from 'antd'

export const AddButton = styled.button`
  border: none;
  outline: none;
  color: var(--wht);
  border-radius: 5px;
  padding: 10px 1rem;
  letter-spacing: 1px;
  background-color: #5868f0;
  text-transform: capitalize;
  transition: 0.3s ease-in-out;

  &:hover {
    cursor: pointer;
    background-color: var(--hov);
  }
`

export const StyledModal = styled(Modal)`
  .ant-modal-content {
    width: 700px;
    border-radius: 15px;
  }

  .ant-modal-header {
    border-radius: 15px 15px 0px 0px;
  }

  .ant-btn {
    outline: none;
    border: none;
    border-radius: 5px;
    background-color: var(--bgd);

    :hover {
      color: #5868f0;
    }
  }

  .ant-btn-primary {
    background-color: #5868f0;

    :hover {
      color: var(--bgd);
      background-color: var(--nab);
    }
  }
`
