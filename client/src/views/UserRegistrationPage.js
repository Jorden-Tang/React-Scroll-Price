import React , {useState} from 'react'
import {useHistory} from 'react-router-dom'
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl'
import Button from '@material-ui/core/Button'
import "../static/css/UserRegPage.css"
import axios from 'axios'

const UserRegPage = (props) => {
    const [userData, setUserData] = useState({name: "", email: "", password: "", repeatPassword: ""});
    const [error, setError] = useState([])
    const history = useHistory();
    
    const onInputHandler = (event) =>{
        setError([])
        const {name, value} = event.target;
        setUserData({
            ...userData, 
            [name]: value
        })
    }

    const onFormSubmitHandler = (event) =>{
        event.preventDefault();
        if(userData.password !== userData.repeatPassword){
            setError(["password doesn't match with repeat password"])
        }
        else{
            axios.post("http://localhost:8000/api/user", userData, {withCredentials : true})
                .then((result)=>{
                    if('err' in result.data){
                        setError(result.data.err)
                    }
                    else{
                        localStorage.setItem("user_id", result.data.user_id)
                        history.push('/')
                    }
                })
                .catch((err)=> {
                    const errorArr = [];
                    for(const key in err.response.data.error.errors){
                        errorArr.push(err.response.data.error.errors[key].message)
                    }
        
                    if(err.response.data.error.errmsg){
                        errorArr.push("This Email is registered")
                    }
                    setError(errorArr);
                })
        }
    }
    return(
    <div id = "reg-container">
        <FormControl id = "reg-form" class = "form-group" style= {{display: "flex", flexDirection: "column", justifyContent: "space-between", alignItems: "center", marginRight: "1vw", marginTop: "1vw"}}>
            {error.map((x, i) =>
                        <p key = {i} style={{color: "red", fontStyle: "bold"}}>{x}</p>       
            )}
            <TextField onChange = {onInputHandler} name = "name"   label="Name" style={{width: "100%"}}></TextField>
            <TextField onChange = {onInputHandler} type = "email" name = "email"   label="Email" style={{width: "100%"}}></TextField>
            <TextField onChange = {onInputHandler} type = "password" name = "password" label="password" style={{width: "100%"}}></TextField>
            <TextField onChange = {onInputHandler} type ="password" name = "repeatPassword" label="Repeatpassword" style={{width: "100%"}}></TextField>
            <div style = {{ width: "100%", display: "flex", flexDirection: "row", justifyContent: "space-evenly"}}>
            <Button onClick = {onFormSubmitHandler} style = {{width: "150px", height: "50px", backgroundColor: "orange"}} variant="contained"  href="#contained-buttons">Submit :)</Button>
            <Button onClick = {()=> {history.push("/")}} style = {{width: "150px", height: "50px", backgroundColor: "orange"}} variant="contained"  href="#contained-buttons">Go Back :(</Button>
            </div>
        </FormControl>
    </div>
    )
}
export default UserRegPage