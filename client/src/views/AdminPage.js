import React, {useState, useEffect}from 'react'
import {Router, Link} from '@reach/router'
import ScrollUpdateForm from '../components/ScrollUpdateForm'
import UserUpdateForm from '../components/UserUpdateForm'
import auth from '../auth/auth'
import {useHistory} from 'react-router-dom'

const AdminPage = (props) =>{
    // const history = useHistory();
    // const [loginStatus, setLoginStatus] = useState(false);

    // useEffect(()=>{
    //     if(auth.isAdminAuth()){
    //         setLoginStatus(true);
    //     }
    //     else{
    //         history.push("/")
    //     }
    // }, [])

    return(
        <div style={{width: "100vw",height: "auto", display:"flex", justifyContent: "center", flexDirection:"column"}}>
        <ScrollUpdateForm path="/"></ScrollUpdateForm>
        {/* <UserUpdateForm path="/user"></UserUpdateForm> */}
        </div>
    )
}
export default AdminPage