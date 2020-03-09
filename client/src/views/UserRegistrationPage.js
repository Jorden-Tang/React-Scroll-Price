import React , {useState} from 'react'
import {useHistory} from 'react-router-dom'
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl'
import Button from '@material-ui/core/Button'
import "../static/css/UserRegPage.css"
import axios from 'axios'

const UserRegPage = (props) => {
    return(
    <div id = "reg-container">
        <FormControl id = "reg-form" class = "form-group" style= {{display: "flex", flexDirection: "column", justifyContent: "center", marginRight: "1vw", marginTop: "1vw"}}>
            <TextField  name = "name"   label="Name" />
            <TextField  name = "email"   label="Email" />
            <TextField  name = "password" label="password"></TextField>
            <TextField  name = "password" label="Repeat password"></TextField>
            <Button style = {{width: "100px", height: "200px"}} variant="contained" style={{backgroundColor: "orange"}} href="#contained-buttons">Submit</Button>
        </FormControl>
    </div>
    )
}
export default UserRegPage