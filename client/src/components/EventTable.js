import React, {useState, useEffect} from 'react'
import Table from 'react-bootstrap/Table'
import axios from 'axios'
import "../static/css/EventTable.css"

const EventTable = (props) =>{
    
    const [events, setEvents] = useState([]);
    const [eventFilter, setEventFilter] = useState("all");

    useEffect(()=>{
        axios.get("http://localhost:8000/api/event/index", {withCredentials: true})
            .then((result)=>{
                setEvents(result.data.result);
            })
            .catch(console.log)
            // setEventFilter(props.selectedEventType);
    }, [])


    
    const onFilterChange = (type) =>{
        setEventFilter(type)
    }

    return(
        <>
        <div id = "event_party_body_header">
            <div id = "ht" class = "boss_button"  value = {'ht'}  onClick ={() => {onFilterChange('ht')}} >HT</div>
            <div id = "zak" class = "boss_button" value = 'zak'  onClick ={() => {onFilterChange('zak')}}>ZAK</div>
            <div id = "cwk" class = "boss_button" value = 'cwk' onClick ={() => {onFilterChange('cwk')}}>CWK</div>
            <div id = "scar" class = "boss_button" value = 'scar' onClick ={() => {onFilterChange('scar')}}>SCAR</div>
            <div id = "nt" class = "boss_button"   value = 'nt'  onClick ={() => {onFilterChange('nt')}}>NT</div>
            <div id = "toad" class = "boss_button" value = 'toad' onClick ={() => {onFilterChange('toad')}}>TOAD</div>
            <div id = "krex" class = "boss_button" value = 'krex' onClick ={() => {onFilterChange('krex')}}>KREX</div>
            <div id = "jiao" class = "boss_button" value = 'jiao' onClick ={() => {onFilterChange('jiao')}}>JIAO</div>
        </div>
        <Table size="sm"  striped  hover variant = "dark">
            <thead>
                <tr>
                    <th>Host</th>
                    <th>Event Type</th>
                    <th>Host Time</th>
                    <th>Buyer Spots</th>
                </tr>
            </thead>
            <tbody>
                {events.filter(e => (e.eventType === eventFilter || eventFilter === "all")).map((v,i)=>[
                    <tr>
                        <td>{v.hostIGN}</td>
                        <td>{v.eventType}</td>
                        <td>{v.startTime}</td>
                        <td>{v.buyer.length}</td>
                    </tr>
                ])}
                <tr>

                </tr>

            </tbody>
        </Table>

        </>
    
    )
}

export default EventTable