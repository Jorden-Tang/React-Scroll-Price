import  React, {useState, useEffect} from 'react'
import Table from 'react-bootstrap/Table'
import axios from 'axios'
import '../static/css/HostedEventsTable.css'

const HostedEventsTable = (props) =>{


    
    const [hostedEvents, setHostedEvents] = useState([]);

    //fetch hosted events data
    useEffect(() => {
        axios.get("http://localhost:8000/api/user/" + localStorage.getItem('user_id') + "/hosted_events", {withCredentials: true})
            .then((result)=>{setHostedEvents(result.data.result)})
            .catch(console.log)
    }, []);

    return (
        <div id = "hosted_events_table_container">
            <h1>Hosted Runs</h1>
            <Table size ="sm" striped hover variant ="dark">
                <thead>
                    <th>EVENT TYPE</th>
                    <th>HOST TIME</th>
                    <th>SPOTS</th>
                    <th>ACTION</th>
                </thead>
                <tbody>
                    {hostedEvents.map((v,i)=>[
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
                            <button class = "join_button">Cancel</button><button>Update</button></td>
                        </tr>
                    ])}
                </tbody>
            </Table>
        </div>
    )
}
export default HostedEventsTable