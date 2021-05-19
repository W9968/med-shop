import React, { useEffect } from 'react'
import { useCrud } from '../../../global/exports'
import { ContentHeader } from '../../../components/imports'

import { Switch, Route, useRouteMatch } from 'react-router-dom'
import { AddProduct, EditProduct } from '../../../components/imports'

const _Products = () => {
  const { loadData, socket } = useCrud()
  const { path } = useRouteMatch()
  //const { socket, loadData, loading } = useCrud()

  useEffect(() => {
    loadData('products')
  }, []) // eslint-disable-line

  return (
    <>
      <>
        <ContentHeader
          header='producst list'
          path={'products'}
          boolState={true}
        />
        <Switch>
          <Route exact path={path}>
            {/* {loading ? <ContentLoader /> : 'hello'} */}
            {socket.map((value) => {
              return (
                <div key={value.id}>
                  <p>
                    {value.name} {value.price}
                  </p>
                  <p>
                    {value.images.map((key) => {
                      return (
                        <img
                          key={key.id}
                          src={`http://localhost:8000/storage/products/${key.file_path}`}
                          alt='yes'
                        />
                      )
                    })}
                  </p>
                  <hr />
                </div>
              )
            })}
          </Route>
          <Route path={`${path}/add`}>
            <AddProduct />
          </Route>
          <Route path={`${path}/edit/:id`}>
            <EditProduct />
          </Route>
        </Switch>
      </>
    </>
  )
}

export default _Products
