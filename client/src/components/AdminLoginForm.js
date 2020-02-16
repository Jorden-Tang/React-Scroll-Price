import React, {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import "../static/css/AdminLoginForm.css"
import Axios from 'axios';
import { navigate } from '@reach/router';

const AdminLoginForm = (props) =>{
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
        Axios.post("http://localhost:8000/login", state)
            .then(()=> navigate('/'))
            .catch(console.log)
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
export default AdminLoginForm;