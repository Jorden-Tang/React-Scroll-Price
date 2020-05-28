import React from 'react'
import auth from '../auth/auth'
import NavBar from '../components/NavBar'
import LogOutButton from '../components/LogOutButton'
import UserLoginForm from '../components/UserLoginForm'
import EventForm from '../components/EventForm'
import '../static/css/EventPartyPage.css'

const EventPartyPage = (props) =>{
    return(
        <div id="event_party_container" >
            {auth.isAuth() ?  
            <div style= {{height: "90px",backgroundColor: "rgba(224, 219, 219, 0.5)", display: "flex", flexDirection: "row", alignItems: "center", marginRight: "3%" ,width: "100%"}}>
                <NavBar/>
                <div style = {{width: "220px"}}/>
                <LogOutButton></LogOutButton>
            </div>
            : <UserLoginForm></UserLoginForm>}

            <div id = "event_party_body">
                <div id = "event_party_body_header">
                    <div id = "ht" class = "boss_button" >HT</div>
                    <div id = "zak" class = "boss_button" >ZAK</div>
                    <div id = "cwk" class = "boss_button" >CWK</div>
                    <div id = "scar" class = "boss_button" >SCAR</div>
                    <div id = "nt" class = "boss_button" >NT</div>
                    <div id = "toad" class = "boss_button" >TOAD</div>
                    <div id = "krex" class = "boss_button" >KREX</div>
                    <div id = "jiao" class = "boss_button" >JIAO</div>
                </div>
            
                <div id = "event_party_table_form_container">
                    <div id = "events_table">

                    </div>
                    <div id = "event_form">
                        <EventForm></EventForm>
                    </div>
                </div>
            </div>
        </div>



    )
}
export default EventPartyPage;
