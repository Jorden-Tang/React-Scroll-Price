import React, {useState, useEffect} from 'react'
import auth from '../auth/auth'
import NavBar from '../components/NavBar'
import EventTable from '../components/EventTable'
import LogOutButton from '../components/LogOutButton'
import UserLoginForm from '../components/UserLoginForm'
import EventForm from '../components/EventForm'
import '../static/css/EventPartyPage.css'
import JoinedEventsTable from '../components/JoinedEventsTable'
import HostedEventsTable from'../components/HostedEventsTable'

const EventPartyPage = (props) =>{
    useEffect(()=>{
        auth.checkExpireToken();
    }, [])

    return(
        <div id="event_party_container" >
            {auth.isAuth() ?  
            <div style= {{position: "fixed", height: "90px",backgroundColor: "rgba(224, 219, 219, 0.5)", display: "flex", flexDirection: "row", alignItems: "center" ,width: "100%"}}>
                <NavBar/>
                <a id = "create_event_button" href = "#event_form_container">Create Event</a> 
                <LogOutButton></LogOutButton>
            </div>
            : <UserLoginForm></UserLoginForm>}
       
            <div id = "event_party_body">
                <div id = "event_party_table_form_container">
                    <div id = "events_table">
                        <EventTable></EventTable>
                        <HostedEventsTable></HostedEventsTable>
                        <JoinedEventsTable></JoinedEventsTable>
                    </div>
                    <EventForm> </EventForm>
                </div>
            </div>
        </div>



    )
}
export default EventPartyPage;
