import React from 'react'
import {useHistory} from 'react-router-dom'

const NotFound = (props) =>{

    let history = useHistory();
    return(
        <>
        <h2>Opps... either u entered the wrong link, or the event you try to join already being deleted</h2>
        <button onClick = {(e) => {history.push('/event')}}>Go Back To Event PAGE</button>
        </>
    )
}

export default NotFound