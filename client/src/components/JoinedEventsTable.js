import  React, {useState, useEffect} from 'react'
import '../static/css/JoinedEventsTable.css'
import Table from 'react-bootstrap/Table'

const JoinedEventsTable = (props) =>{

    
    return (
        <div id = "joined_events_table_container">
            <h1>Joined Runs</h1>
            <Table size ="sm" striped hover variant ="dark">
                <thead>
                    <th>EVENT TYPE</th>
                    <th>HOST TIME</th>
                    <th>BUYER SPOTS</th>
                    <th>Detail</th>
                </thead>
                <tbody>
                    <tr>
                        <td>Zak</td>
                        <td>05/55 11:10AM</td>
                        <td>3</td>
                        <td><button>Detail</button></td>
                    </tr>
                    <tr>
                        <td>Zak</td>
                        <td>05/55 11:10AM</td>
                        <td>3</td>
                        <td><button>Detail</button></td>
                    </tr>
                    <tr>
                        <td>Zak</td>
                        <td>05/55 11:10AM</td>
                        <td>3</td>
                        <td><button>Detail</button></td>
                    </tr>
                    <tr>
                        <td>Zak</td>
                        <td>05/55 11:10AM</td>
                        <td>3</td>
                        <td><button>Detail</button></td>
                    </tr>
                </tbody>
            </Table>
        </div>
    )
}
export default JoinedEventsTable