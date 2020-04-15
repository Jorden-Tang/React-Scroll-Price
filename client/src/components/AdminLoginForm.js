import React, {useState} from 'react'
import {useHistory} from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css';
import "../static/css/AdminLoginForm.css"
import auth from '../auth/auth'

export default ({sendApiRequest}) =>{
    const [state, setState] = useState({email: "", password: "", errors: []});
    const [error, setError] = useState([])
    const history = useHistory();

    const onInputChangeHandler = (event) => {
        const {name, value} = event.target;
        // console.log(event.target.value)
        setState({
            ...state,
            [name]: value
        })
    }

    const onFormSubmitHandler = async (event) =>{
        event.preventDefault();
        setError([])
        sendApiRequest(state)
            .then((result) =>{
                if('err' in result.data){
                    setError(result.data.err);
                }
                if('isAdmin' in result.data){
                    if(result.data.isAdmin){
                        // auth.adminLogin();
                        localStorage.setItem("admin_id", result.data.user_id)
                        localStorage.setItem("user_id", result.data.user_id)
                        history.push("/admin")
                    }
                }
                else{
                    console.log("else")
                }
            })
            .catch((err)=> console.log)
    }
    return(
        <>
        {error.map((x) =>
                    <p style={{color: "red"}}>{x}</p>       
        )}
                <h1>Admin Login</h1>
                <form onSubmit = {onFormSubmitHandler}>
                    <div className = "form-group">
                        <label for="exampleInputEmail1">Email address</label>
                        <input onChange = {onInputChangeHandler} type="email" name = "email" class="form-control" value = {state.email} aria-describedby="emailHelp"></input>
                        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1">Password</label>
                        <input onChange = {onInputChangeHandler} type="password" name = "password" class="form-control" value = {state.password}></input>
                    </div>
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
        </>
     
    )
}