import React, {useState, useEffect} from 'react'
import TextField from '@material-ui/core/TextField'
import {useHistory} from 'react-router-dom'
import { useParams} from "react-router-dom";
import axios from 'axios'
import NotFoundPage from '../views/NotFoundPage'
import '../static/css/EventDetailPage.css'
import { orange } from '@material-ui/core/colors';
const EventDetailpage = (props) =>{
   
    let {event_id} = useParams();
    const history = useHistory();
    const [buyerName, setBuyerName] = useState("");
    const [eventData, setEventData] = useState(null);
    useEffect(()=>{
        axios.get("http://localhost:8000/api/event/" + event_id, {withCredentials: true})
            // .then((result)=>{setEventData(result.data.result)})
            .then((result) => {
                setEventData(result.data.result);
            })
            .catch(console.log)
    }, [])


    if(eventData === null){
        return(<NotFoundPage></NotFoundPage>)
    }

    const onBuyerJoinEvent = (e) =>{
        axios.put("http://localhost:8000/api/event/" + event_id + "/user/" + localStorage.getItem("user_id") + "/join", {buyerType: e.target.value, buyerIGN: buyerName }, {withCredentials: true})
            .then((result)=>{
                history.push("/event")
            })
            .catch(console.log)
    }


    const onBuyerNameInput =(e, i)=>{
        e.preventDefault();
        setBuyerName(e.target.value);
    }
    return(
        <div id = "event_detail_page_container">
            <div id = "event_detail_page_body">
                <button id = "go_back_event" onClick = {()=>{ history.push("/event")}}>
                    Go Back
                </button>
                <div class = "data_body">
                <label style = {{color: "orange"}}>Host IGN:</label>
                <span>{eventData.hostIGN}</span>
                </div>
                <div class = "data_body">
                <label style = {{color: "orange"}}>Time: </label>
                <span>{new Date(Date.parse(eventData.startTime)).toTimeString()}</span>
                </div>
                <div class = "data_body">
                </div>
                {eventData.buyers.filter(p => p.buyerIGN === "").map((v,i) => [
                    <div key = {i} class = "data_body">
                        <label style = {{color: "orange"}}>{"Buyer Spot:"}</label>
                        <span>{v.buyerType.toUpperCase()}</span>
                    <label style = {{color: "orange"}}>Buyer IGN </label>
                    <input type = "textfield" variant onChange = {(e)=>(onBuyerNameInput(e))} value = {buyerName}></input>
                        <button value = {v.buyerType} onClick = {onBuyerJoinEvent}>RESERVE</button>
                    </div>
                ])}
                <div class ="data_body" style = {{}}>
                    <label style = {{color: "orange"}}>Description:</label>
                </div>
                <div id = "description"> <span >{eventData.description}</span> </div>
            </div>
        </div>
    )
}
export default EventDetailpage;