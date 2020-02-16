import React from 'react'
import UpdateDataForm from '../components/updateDataForm'
import "../static/css/AdminPage.css"

const AdminPage = (props) =>{
    return(
        
        <div id = "body">
            <h1>Admin Login</h1>
            <UpdateDataForm></UpdateDataForm>
        </div>
    )
}
export default AdminPage