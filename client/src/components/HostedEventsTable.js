import  React, {useState, useEffect} from 'react'
import Table from 'react-bootstrap/Table'
import '../static/css/HostedEventsTable.css'

const HostedEventsTable = (props) =>{

    
    return (
        <div id = "hosted_events_table_container">
            <h1>Hosted Runs</h1>
            <Table size ="sm" striped hover variant ="dark">
                <thead>
                    <th>EVENT TYPE</th>
                    <th>HOST TIME</th>
                    <th>BUYER SPOTS</th>
                    <th>ACTION</th>
                </thead>
                <tbody>
                    <tr>
                        <td>Zak</td>
                        <td>05/55 11:10AM</td>
                        <td>3</td>
                        <td><button>Update</button></td>
                    </tr>
                </tbody>
            </Table>
        </div>
    )


}
export default HostedEventsTable