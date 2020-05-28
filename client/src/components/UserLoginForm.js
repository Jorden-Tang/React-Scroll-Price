import React , {useState} from 'react'
import {useHistory} from 'react-router-dom'
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl'
import Button from '@material-ui/core/Button'
import "../static/css/UserLoginForm.css"
import axios from 'axios'
import auth from "../auth/auth"
import jwt from 'jsonwebtoken'

const UserLoginForm = (props) =>{
    const [userData, setUserData] = useState({email: "", password: ""})
    const [errorBool, setErrorBool] = useState(false)
    const history = useHistory();

    //handles key press events
    const keyPress = (e) =>{
        if(e.key === "Enter"){
            onSubmitHandler(e);
        }
    }

    //handles input events
    const onInputHandler = (e) =>{
        e.preventDefault();
        setErrorBool(false);
        const {name, value} = e.target;
        setUserData({...userData, [name]: value})
    }

    //submit function for user login form
    //makes axios post request with user confidentials
    const onSubmitHandler =(e) =>{
        e.preventDefault();
        axios.post("http://localhost:8000/api/login", userData, {withCredentials: true})
            .then((result)=>{
                if('err' in result.data){
                    setErrorBool(true);
                }
                if('isAuth' in result.data){
                    if(result.data.isAdmin){
                        auth.adminLogin();
                        localStorage.setItem("admin_id", result.data.admin_id)
                        localStorage.setItem("user_id", result.data.user_id)
                        history.push("/")
                    }
                    else{
                        if(result.data.isAuth){
                            localStorage.setItem("user_id", result.data.user_id)
                            history.push("/")
                        }
                    }
                }
            })
            .catch(console.log)
    }

    const navToRegister = (e) =>{
        e.preventDefault();
        history.push("/registration")
    }


    return(
        <div id = "container">
            <FormControl id= "user_login_form" onKeyDown = {keyPress}   class = "form-group">
                {errorBool ?
                <>
                <TextField error  name = "email" value = {userData.email}   label="Email" onChange ={onInputHandler}/> 
                <TextField error  type = "password" name = "password" value = {userData.password} label="Password" style={{fontSize: "2rem", color: "white", labelRoot: {fontWeight: "bold"}}} onChange = {onInputHandler}/>
                </>
                :
                <>
                <TextField name = "email" value = {userData.email}   label="email" onChange ={onInputHandler}/>
                <TextField  type = "password" name = "password" value = {userData.password} label="password" style={{fontSize: "1rem", color: "white"}} onChange = {onInputHandler}/>
                </>
                }
               
                <Button id = "user_login_form_button"type = "Submit" onClick = {(e) => {onSubmitHandler(e)}} variant="contained" style={{height: "45px", marginLeft: "5px",backgroundColor: "orange", fontWeight: "bold"}} href="#contained-buttons">Login</Button>
                <Button id = "user_login_form_button"onClick = {navToRegister} variant="contained"  style={{height: "45px" ,marginLeft: "5px",backgroundColor: "orange", fontWeight: "bold"}} href="#contained-buttons">Register</Button>
            </FormControl>
           
        </div>
    )

}

export default UserLoginForm