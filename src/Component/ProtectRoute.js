import React, { Component, useState, useEffect } from 'react';
import {Route, Redirect} from 'react-router-dom';
//export default function ProtectRoute ({component: Component, ...rest})  {
export const ProtectRoute = ({component: Component, ...rest}) => {
  const[testState,setLogin] = useState(0);
  /*
  useEffect(() => {
    //if (!isLogin) {
      //setLogin(0);
   //}
  })
  */

  return (
    <Route
     {...rest}
      render = { props => {
          console.dir(props)
          console.dir(rest.isAuth)
          if(props.location.state != undefined && props.location.state.isLogin) {
          //if(rest.isLogin) {
            return <Component {...props}/>
          } else {
            return <Redirect to={{pathname: '/login', state: {from: props.location}}}/>
          }
        }
      }
    />
  )
}
