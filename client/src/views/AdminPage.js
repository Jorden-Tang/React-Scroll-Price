import React, {useState, useEffect}from 'react'
import {Router, Link} from '@reach/router'
import ScrollUpdateForm from '../components/ScrollUpdateForm'
import UserUpdateForm from '../components/UserUpdateForm'

const AdminPage = (props) =>{
    return(
        <div style={{width: "100vw",height: "auto", display:"flex", justifyContent: "center", flexDirection:"column"}}>
        <ScrollUpdateForm path="/"></ScrollUpdateForm>
        {/* <UserUpdateForm path="/user"></UserUpdateForm> */}
        </div>
    )
}
export default AdminPage