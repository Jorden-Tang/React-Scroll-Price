import React, {useState, useEffect} from 'react'
import Table from 'react-bootstrap/Table'
import Pagination from 'react-bootstrap/Pagination'
import PageItem from 'react-bootstrap/PageItem'
import axios from 'axios'
import "../static/css/EventTable.css"

const EventTable = (props) =>{
    const [allEvents, setAllEvents] = useState([]);
    const [events, setEvents] = useState([]);
    const itemPerPage = 13;
    const [pageItemArray, setPageItemArray] = useState([]);
    const [active, setActive] = useState(1);
    const [dataIndexRange, setDataIndexRange] = useState({start: 0, end: itemPerPage - 1});
    useEffect(()=>{
        axios.get("http://localhost:8000/api/event/index", {withCredentials: true})
            .then((result)=>{
                setEvents(result.data.result);
                setAllEvents(result.data.result);
                onTotalPageChange(result.data.result.length)
            })
            .catch(console.log)           
    }, [])

    useEffect(()=>{
        onTotalPageChange(events.length)
    }, [events])

    const onTotalPageChange = (data_length) =>{
        let tempArray = [];
        let page_length  = data_length / itemPerPage ;
        if(data_length % itemPerPage > 0){
            page_length += 1;
        }
        for (let number = 1; number <=  page_length ; number++) {
            tempArray.push(number);  
        }
        setPageItemArray(tempArray);
    }

    const onFilterChange = (type) =>{
       setDataIndexRange({start: 0, end: itemPerPage - 1})
       setEvents(allEvents.filter(e => e.eventType === type))
    }

    const changePage = (e) =>{
        e.preventDefault();
        setActive(e.target.value)
        setDataIndexRange({start: ((e.target.value - 1) * itemPerPage) , end: (e.target.value * itemPerPage) - 1 })
        // setEvents(events)
    }

    const formatedDate = (d) =>{
        return d.getMonth() + '/' + d.getDate() + ' ' + d.getHours() % 12 + ':' + d.getMinutes() + (d.getHours() > 12 ? 'PM' : 'AM');
    }

    return(
        <div id = "event_table_container">
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

        <div id = "event_pagination">
    <button style = {{width: "30px", height: "30px", backgroundColor: "orange", color:"black"}} value = {1} onClick = {changePage}> {'<<'} </button>
                {pageItemArray.map((v,i) =>[
                        <button style = {{width: "30px", height: "30px", backgroundColor: "orange", color:"black"}} value = {v} onClick = {changePage}>{v}</button>    
                ])}
                <button style = {{width: "30px", height: "30px", backgroundColor: "orange", color:"black",}} value = {pageItemArray[pageItemArray.length - 1]} onClick = {changePage}> >> </button>
        </div>

        <div style = {{display: "flex", flexDirection: "row"}}>
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
                {events.slice(dataIndexRange.start, dataIndexRange.end + 1).map((v,i)=>[
                    <tr>
                        <td>{v.hostIGN}</td>
                        <td>{v.eventType}</td>
                        <td>{formatedDate(new Date(v.startTime))}</td>
                        <td>{v.buyers.length}</td>
                    </tr>
                ])}
                <tr>
                </tr>
            </tbody>
        </Table>
        </div>

        
        </div>
    )
}

export default EventTable