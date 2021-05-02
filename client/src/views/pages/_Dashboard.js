import React from 'react'
import Dashlayout from '../../layout/Dash.layout'

const _Dashboard = () => {
  return (
    <>
      <Dashlayout />
    </>
  )
}

export default _Dashboard

/* 
  const column = useMemo(
    () => [
      { Header: 'id', accessor: 'id' },
      { Header: 'title', accessor: 'title' },
      { Header: 'Time', accessor: 'created_at' },
    ],
    []
  )
  const datas = useMemo(
    () => [
      { id: 'aa', title: 'aa', time: 'aa' },
      { id: 'bb', title: 'bb', time: 'bb' },
      { id: 'cc', title: 'cc', time: 'cc' },
      { id: 'cc', title: 'cc', time: 'cc' },
      { id: 'cc', title: 'cc', time: 'cc' },
      { id: 'cc', title: 'cc', time: 'cc' },
      { id: 'cc', title: 'cc', time: 'cc' },
      { id: 'cc', title: 'cc', time: 'cc' },
      { id: 'cc', title: 'cc', time: 'cc' },
      { id: 'cc', title: 'cc', time: 'cc' },
      { id: 'aa', title: 'aa', time: 'aa' },
      { id: 'bb', title: 'bb', time: 'bb' },
      { id: 'cc', title: 'cc', time: 'cc' },
      { id: 'cc', title: 'cc', time: 'cc' },
      { id: 'cc', title: 'cc', time: 'cc' },
      { id: 'cc', title: 'cc', time: 'cc' },
      { id: 'cc', title: 'cc', time: 'cc' },
      { id: 'cc', title: 'cc', time: 'cc' },
      { id: 'cc', title: 'cc', time: 'cc' },
      { id: 'cc', title: 'cc', time: 'cc' },
    ],
    []
  )
*/
