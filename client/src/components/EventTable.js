import React, {useState, useEffect} from 'react'
import Table from 'react-bootstrap/Table'
import axios from 'axios'
import "../static/css/EventTable.css"
import TextField from '@material-ui/core/TextField'
import EventDetailPage from '../views/EventDetailPage'
import {Link} from 'react-router-dom'
import {useHistory} from 'react-router-dom'


const EventTable = (props) =>{
    const history = useHistory();
    const [allEvents, setAllEvents] = useState([]);
    const [events, setEvents] = useState([]);
    const itemPerPage = 10;
    const [pageItemArray, setPageItemArray] = useState([]);
    const [active, setActive] = useState(1);
    const [dataIndexRange, setDataIndexRange] = useState({start: 0, end: itemPerPage - 1});
    const [searchBeginDate, setSearchBeginDate] = useState(new Date(Date.parse(getFormattedDate(0))))
    const [searchEndDate, setSearchEndDate] = useState(new Date(Date.parse(getFormattedDate(1))))
    const [bossType, setBossType] = useState('')

    useEffect(()=>{
        axios.get("http://localhost:8000/api/event/index", {withCredentials: true})
            .then((result)=>{
                setEvents(result.data.result.filter(v => v.buyerCount > 0));
                setAllEvents(result.data.result.filter(v => v.buyerCount > 0));
                onTotalPageChange(result.data.result.length)
            })
            .catch(console.log)
    }, [])

    //change pagination when filters are being applied (different data)
    useEffect(()=>{
        onTotalPageChange(events.length)
    }, [events])

    function getFormattedDate(offsetByDay) {
        var date = new Date(Date.now() + offsetByDay * 1000 * 60 * 60 * 24);
        let  currentHours = date.getHours();
        currentHours = ("0" + currentHours).slice(-2);
        let  currentMonth = date.getMonth() + 1;
        currentMonth = ("0" + currentMonth).slice(-2);
        let   currentMin = date.getMinutes();
        currentMin = ("0" + currentMin).slice(-2);
        let  currentDate = date.getDate();
        currentDate = ("0" + currentDate).slice(-2);
        var str = date.getFullYear() + "-" + currentMonth + "-" + currentDate + "T" +  currentHours + ":" + currentMin
        return str;
    }

    const onSearchBeginDateChange = (e) => {
        e.preventDefault();
        let date = new Date(Date.parse(e.target.value));
        setSearchBeginDate(date);
        onFilterChange(bossType, date, searchEndDate);

    }

    const onSearchEndDateChange = (e) => {
        e.preventDefault();

        let date = new Date(Date.parse(e.target.value));
        setSearchEndDate(date);
        onFilterChange(bossType, searchBeginDate, date);

    }

    const onBossTypeChange = (e) =>{
        e.preventDefault();
        setBossType(e.target.value);
        onFilterChange(e.target.value, searchBeginDate, searchEndDate);
    }


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

    const onFilterChange = (type, begin, end) =>{
       setDataIndexRange({start: 0, end: itemPerPage - 1})
       setEvents(allEvents.filter(v => v.eventType.includes(type) && (new Date(v.startTime) >= begin && new Date(v.startTime) <= end)));
    }


    const changePage = (e) =>{
        e.preventDefault();
        setActive(e.target.value)
        setDataIndexRange({start: ((e.target.value - 1) * itemPerPage) , end: (e.target.value * itemPerPage) - 1 })
    }

    const formatedDate = (d) =>{
        return (d.getMonth() + 1) % 12 + '/' + d.getDate() + ' ' + d.getHours() % 12 + ':' + d.getMinutes() + (d.getHours() > 12 ? 'PM' : 'AM');
    }

    const onJoinParty = (e, event_id) =>{
        // e.preventDefault();
       console.log(event_id);
    }
    return(
        <div id = "event_table_container">
        <div id = "event_party_body_header">
            <button id = "allBoss" class = "boss_button"  value = ''  onClick ={onBossTypeChange} >All</button>
            <button id = "ht" class = "boss_button"  value = 'ht'  onClick ={onBossTypeChange} >HT</button>
            <button id = "zak" class = "boss_button" value = 'zak'  onClick ={onBossTypeChange}>ZAK</button>
            <button id = "cwk" class = "boss_button" value = 'cwk' onClick ={onBossTypeChange}>CWK</button>
            <button id = "scar" class = "boss_button" value = 'scar' onClick ={onBossTypeChange}>SCAR</button>
            <button id = "nt" class = "boss_button"   value = 'nt'  onClick ={onBossTypeChange}>NT</button>
            <button id = "toad" class = "boss_button" value = 'toad' onClick ={onBossTypeChange}>TOAD</button>
            <button id = "krex" class = "boss_button" value = 'krex' onClick ={onBossTypeChange}>KREX</button>
            <button id = "jiao" class = "boss_button" value = 'jiao' onClick ={onBossTypeChange}>JIAO</button>
        </div>
        <div id = "event_table_action_bar">
            <div id = "event_pagination">
                <button style = {{width: "30px", height: "30px", backgroundColor: "orange", color:"black"}} value = {1} onClick = {changePage}> {'<<'} </button>
                    {pageItemArray.map((v,i) =>[
                            <button style = {{width: "30px", height: "30px", backgroundColor: "orange", color:"black"}} value = {v} onClick = {changePage}>{v}</button>    
                    ])} 
                    <button style = {{width: "30px", height: "30px", backgroundColor: "orange", color:"black",}} value = {pageItemArray[pageItemArray.length - 1]} onClick = {changePage}> >> </button>

            </div>
            <div style={{width: "100%", display: "flex",flexWrap: "wrap", flexDirection: "row", justifyContent: "space-evenly"}}>
            <TextField  onChange = {onSearchBeginDateChange} id="datetime-local" label="BEGIN" type="datetime-local" defaultValue={getFormattedDate(0)} InputLabelProps={{ shrink: true}}  InputProps={{style: {backgroundColor: "rgba(0,0,0, 0.3)", color:"white"}}}/>
            <TextField  onChange = {onSearchEndDateChange} id="datetime-local" label="END" type="datetime-local" defaultValue={getFormattedDate(1)} InputLabelProps={{ shrink: true}}  InputProps={{style: {backgroundColor: "rgba(0,0,0, 0.3)", color:"white"}}}/>
            </div>
        </div>
        <Table style = {{fontFamily: '"Balsamiq Sans", cursive, Pacifico'}} size="sm"  striped  hover variant = "dark">
            <thead>
                <tr>
                    <th>HOST</th>
                    <th>EVENT TYPE</th>
                    <th>HOST TIME</th>
                    <th>SPOTS</th>
                    <th>ACTIONS</th>
                </tr>
            </thead>
            <tbody>
                {events.slice(dataIndexRange.start, dataIndexRange.end + 1).map((v,i)=>[
                    <>
                    <tr key = {i}>
                        <td>{v.hostIGN}</td>
                        <td>{v.eventType.toUpperCase()}</td>
                        <td>{formatedDate(new Date(v.startTime))}</td>
                        <td>{v.buyerCount}</td>
                        <td style = {{display: "flex", justifyContent: "center"}}>
                            <div class = "detail_button">Detail
                                <span class = "event_description_tip">{v.description}</span>
                            </div>
                            <button class = "join_button" onClick = {(e) => {history.push('/event/' + v._id)}}>Join</button>
                        </td>
                    </tr>
                    </>
                ])}
                <tr>
                </tr>
            </tbody>
        </Table>
        </div>
    )
}

export default EventTable