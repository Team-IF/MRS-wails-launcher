import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { useSelector } from 'react-redux'

export default ({ component: Component, ...rest }) => {
  const isAuth = useSelector((state) => state.auth.isAUth)
  return (
    <Route
      {...rest}
      render={(props) =>
        isAuth ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{ pathname: '/auth', state: { from: props.location } }}
          />
        )
      }
    />
  )
}
