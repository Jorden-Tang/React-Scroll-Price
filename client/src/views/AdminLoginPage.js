import React from 'react'
import AdminLoginForm from '../components/AdminLoginForm'
import "../static/css/AdminPage.css"
import axios from 'axios'

const AdminPage = (props) =>{

    function sendApiRequest(data) {
        return axios.post("http://localhost:8000/login", data, {withCredentials: true});
    }
    return(
        <div id = "body">
            <h1>Admin Login</h1>
            <AdminLoginForm sendApiRequest = {sendApiRequest}></AdminLoginForm>
        </div>
    )
}
export default AdminPage