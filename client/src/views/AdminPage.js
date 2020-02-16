import React from 'react'
import AdminLoginForm from '../components/AdminLoginForm'
import "../static/css/AdminPage.css"

const AdminPage = (props) =>{
    return(
        <div id = "body">
            <h1>Admin Login</h1>
            <AdminLoginForm></AdminLoginForm>
        </div>
    )
}
export default AdminPage