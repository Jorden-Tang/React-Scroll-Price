import React from 'react'
import Button from '@material-ui/core/Button'
import auth from '../auth/auth'
import {useHistory} from 'react-router-dom'

const LogOutButton = (props) => {
    const history = useHistory();

    function onClickHandler(e){
        e.preventDefault();
        auth.logout();
        history.push("/")
    }
    return(
        <Button onClick = {onClickHandler} variant="contained" style={{backgroundColor: "orange"}} href="#contained-buttons">Log Out</Button>
    )
}
export default LogOutButton
