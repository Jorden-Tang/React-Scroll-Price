import React from 'react'
import AdminLoginForm from '../components/AdminLoginForm'
import "../static/css/AdminLoginPage.css"
import axios from 'axios'

const AdminPage = (props) =>{

    function sendApiRequest(data) {
        return axios.post("http://localhost:8000/api/login", data, {withCredentials: true});
    }
    return(
        <div id = "body">
            <AdminLoginForm sendApiRequest = {sendApiRequest}></AdminLoginForm>
        </div>
    )
}
export default AdminPage