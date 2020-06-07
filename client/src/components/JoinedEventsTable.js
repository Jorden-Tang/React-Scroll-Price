import  React, {useState, useEffect} from 'react'
import '../static/css/JoinedEventsTable.css'
import axios from 'axios'
import Table from 'react-bootstrap/Table'

const JoinedEventsTable = (props) =>{

    const [joinedEvents, setJoinedEvents] = useState([]);

    //fetch hosted events data
    useEffect(() => {
        "/api/user/:id/joined_events"
        axios.get("http://localhost:8000/api/user/" + localStorage.getItem('user_id') + "/joined_events", {withCredentials: true})
            .then((result)=> {setJoinedEvents(result.data.result)})
            .catch(console.log)
        let host_id = localStorage.getItem('user_id')
        
    }, []);

    const onBuyerLeave = (e) => {
        e.preventDefault();
        axios.get("http://localhost:8000/api/user/" + localStorage.getItem('user_id') +"/event/" + e.target.value +"/leave_party", {withCredentials: true})
            .then((result)=>{
                setJoinedEvents(joinedEvents.filter(v => v._id !== result.data.left_event_id))
            })
            .catch(console.log)

    }
    return (
        <div id = "joined_events_table_container">
            <h1>Joined Runs</h1>
            <Table size ="sm" striped hover variant ="dark">
                <thead>
                    <th>EVENT TYPE</th>
                    <th>HOST TIME</th>
                    <th>SPOTS</th>
                    <th>ACTION</th>
                </thead>
                <tbody>
                    {joinedEvents.map((v,i)=>[
                        <tr>
                            <td>{v.eventType}</td>
                            <td>{new Date( Date.parse(v.startTime)).toLocaleString()}</td>
                            <td>{v.buyerCount}</td>
                            <td>
                            <div class = "detail_button" style = {{display: "inline"}}>Detail
                                    <span class = "event_description_tip">{v.buyers.map((p, j)=> [
                                        <div>
                                            <span>{p.buyerType + ": "}</span>
                                            <span>{p.buyerIGN}</span>
                                        </div>
                                    ])}</span>
                            </div>
                            <button class = "join_button" value = {v._id} onClick= {onBuyerLeave}>Leave</button></td>
                        </tr>
                    ])}
                </tbody>
            </Table>
        </div>
    )
}
export default JoinedEventsTable