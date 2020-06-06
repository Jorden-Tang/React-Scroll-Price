import  React, {useState, useEffect} from 'react'
import '../static/css/JoinedEventsTable.css'
import Table from 'react-bootstrap/Table'

const JoinedEventsTable = (props) =>{

    const [joinedEvents, setJoinedEvents] = useState([]);

    //fetch hosted events data
    useEffect(() => {
        let host_id = localStorage.getItem('user_id')
    }, []);
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
                    <tr>
                        <td>Zak</td>
                        <td>05/55 11:10AM</td>
                        <td>3</td>
                        <td><button>Detail</button> <button>Leave</button></td>
                    </tr>
                </tbody>
            </Table>
        </div>
    )
}
export default JoinedEventsTable