import React from 'react'
import {useHistory} from 'react-router-dom'
import Button from '@material-ui/core/Button'

import "../static/css/NavBar.css"

const NavBar = (props) =>{
    const history = useHistory();
    return(
        <div id = "NavBar_container">
            <div class = "nav_bar_link_body">
            <Button class="nav_bar_link" variant="contained"  onClick = {()=>{ history.push("/")}}>
                PRICE GUIDE
            </Button>
            <Button class="nav_bar_link" variant="contained"  onClick = {()=>{ history.push("/event")}}>
                EVENT PARTY
            </Button>
            <Button class="nav_bar_link" variant="contained"   onClick = {()=>{window.open("https://maplelegends.com/")}}>
                ML WEBSITE
            </Button>
            <Button class="nav_bar_link" variant="contained"   onClick = {()=>{window.open("https://maplelegends.com/lib/")}}>
                ML DATABASE
            </Button>
            </div>
            
        </div>
    )
}
export default NavBar