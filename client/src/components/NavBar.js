import React, {useState} from 'react'
import {useHistory} from 'react-router-dom'
import LogOutButton from '../components/LogOutButton'
import Button from '@material-ui/core/Button'
import "../static/css/NavBar.css"

const NavBar = (props) =>{
    const history = useHistory();
    return(
        <div id = "NavBar_container">
            <div style = {{width: "380px", display: "flex", justifyContent: "space-between"}}>
            <Button variant="contained" style={{backgroundColor: "orange"}}  onClick = {()=>{ history.push("/dashboard")}}>
                Dashboard
            </Button>
            <Button variant="contained" style={{backgroundColor: "orange"}}  onClick = {()=>{window.open("https://maplelegends.com/")}}>
                MapleLegend
            </Button>
            <Button variant="contained" style={{backgroundColor: "orange"}}  onClick = {()=>{window.open("https://maplelegends.com/lib/")}}>
                Database
            </Button>
            </div>
            <LogOutButton></LogOutButton>
        </div>
    )
}
export default NavBar