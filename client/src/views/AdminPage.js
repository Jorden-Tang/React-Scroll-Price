import React, {useState, useEffect}from 'react'
import {Router, Link} from '@reach/router'
import ScrollUpdateForm from '../components/ScrollUpdateForm'
import UserUpdateForm from '../components/UserUpdateForm'

const AdminPage = (props) =>{
    return(
        <>
        <h1>Weclome Almighty Admin</h1>
        <Link to="user">user</Link>
        <ScrollUpdateForm path="/"></ScrollUpdateForm>
        <UserUpdateForm path="/user"></UserUpdateForm>
        </>
    )
}
export default AdminPage