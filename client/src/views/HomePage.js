import React ,{useState, useEffect}from 'react'
import Table from 'react-bootstrap/Table'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import "../static/css/HomePage.css"
import axios from 'axios'
const HomePage = (props) => {
    const [scrollData, setScrollData] = useState({scrolls: []});

    function sendApiRequest(data) {
        return axios.get("http://localhost:8000/api/scroll", {}, {withCredentials: true});
    }

    useEffect(()=>{
        sendApiRequest()
            .then((result)=>{
                setScrollData({scrolls: result.data.result});
            })
            .catch(console.log("WTF"))
    }, [])
    if(scrollData.scrolls.length === 0){
        return(<p>Loading</p>)
    }
    return(
        <div className = "body">
        <div className = "header">
            <img className = "header_img" src = {require("../static/images/Mushroom.png")}></img>
            <h1>Fruit's Scroll Side</h1>
            <img className = "header_img"  src = {require("../static/images/Slime.png")}></img>
        </div>
        <Container fluid>
        <Row>
            <Col>
                <Table size="sm"  striped  hover variant = "dark"> 
                    <thead>
                        <h1>60%</h1>
                        <tr>
                            <th>Equip</th>
                            <th>Stat</th>
                            <th>Min</th>
                            <th>Avg</th>
                            <th>Max</th>
                        </tr>
                    </thead>
                    <tbody>
            {scrollData.scrolls.map((v, i) =>
                   [
                    <tr key = {i}>
                    <td>{v.scrollEquipment}</td>
                    <td>{v.scrollStat}</td>
                    <td>{Math.min(...v.scrollPrice)}</td>
                    <td>{0}</td>
                    <td>{Math.max(...v.scrollPrice)}</td>
                    </tr>
                   ]
             )}
                    </tbody>
                </Table>
            </Col>
        </Row>
        </Container>
        </div>
    )
}
export default HomePage