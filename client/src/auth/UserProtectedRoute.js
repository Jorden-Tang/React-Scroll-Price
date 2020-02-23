import React from 'react'
import {Route, Redirect} from 'react-router-dom'
import auth from "./auth"

const UserProtectedRoute = ({component: Component, ...rest}) =>{
    let result  = auth.isAdminAuth();
    console.log(result);
    return(
        <Route {...rest} render={
            (props)=>{
                if(auth.isAuth()){
                  return<Component {...props}/>
                }
                else{
                  return <Redirect to={{pathname : "/", state: {from: props.location}}}/>
                }
            }
        }/>
    )
}
export default UserProtectedRoute