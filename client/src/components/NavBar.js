import React from 'react'
import {useHistory} from 'react-router-dom'
import LogOutButton from '../components/LogOutButton'
import Button from '@material-ui/core/Button'
import "../static/css/NavBar.css"

const NavBar = (props) =>{
    const history = useHistory();
    return(
        <div id = "NavBar_container">
            <div class = "nav_bar_link_body">
            <Button class="nav_bar_link" variant="contained"  onClick = {()=>{ history.push("/dashboard")}}>
                BOSS PARTY
            </Button>
            <Button class="nav_bar_link" variant="contained"   onClick = {()=>{window.open("https://maplelegends.com/")}}>
                MAPLELEGEND
            </Button>
            <Button class="nav_bar_link" variant="contained"   onClick = {()=>{window.open("https://maplelegends.com/lib/")}}>
                ML DATABSE
            </Button>
            </div>
            <LogOutButton></LogOutButton>
        </div>
    )
}
export default NavBar