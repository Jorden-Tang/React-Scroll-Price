import React, {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import "../static/css/AdminLoginForm.css"
import axios from 'axios';
import { navigate } from '@reach/router';

export default ({sendApiRequest}) =>{
    const [state, setState] = useState({email: "", password: ""});

    const onInputChangeHandler = (event) => {
        const {name, value} = event.target;
        console.log(event.target.value)
        setState({
            ...state,
            [name]: value
        })
    }

    const onFormSubmitHandler = (event) =>{
        event.preventDefault();
        console.log(state);
        sendApiRequest(state)
            .then((result) =>console.log(result))
            .catch((err)=> console.log)
    }
    return(
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
    )
}