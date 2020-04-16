import React ,{useState, useEffect}from 'react'
import Table from 'react-bootstrap/Table'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import UserLoginForm from '../components/UserLoginForm'
import NavBar from '../components/NavBar'
import auth from '../auth/auth'

import "../static/css/HomePage.css"
import axios from 'axios'
const HomePage = (props) => {
    const [scrollData, setScrollData] = useState({scrolls: []});
    const percentArray = [10, 30, 60, 70, 100];

    function sendApiRequest(data) {
        return axios.get("http://localhost:8000/api/scroll", {}, {withCredentials: true});
    }

    useEffect(()=>{
        sendApiRequest()
            .then((result)=>{
                setScrollData({scrolls: result.data.result});
            })
            .catch(console.log)
    }, [])
    if(scrollData.scrolls.length === 0){
        return(<p>Loading</p>)
    }
    
    return(
        <div className = "body">
        {auth.isAuth() ?  <NavBar/> : <UserLoginForm></UserLoginForm>}
        <div className = "header">
            <img className = "header_img" src = {require("../static/images/Mushroom.png")} alt = "mushmom"></img>
            <div style= {{display: "flex", flexDirection: "column", justifyContent: "space-around"} }>
                <h1>Fruit's Scroll Side</h1>
                <div id = "timeStampNote" style = {{fontSize: "2vw", display: "flex", justifyContent: "space-around"}} >
                <span><span style = {{color: "#ff0066"}}>Red</span>(OLD AF!)</span> 
                <span></span>
                <span><span style = {{color: "#66ff00"}}>Green</span>(Fressshhh!)</span>
                </div>
            </div>
            <img className = "header_img"  src = {require("../static/images/Slime.png")} alt = "slime"></img>
        </div>
        <Container fluid>
        <Row>
            {percentArray.map((percent)=> [
            <Col>
            <Table size="sm"  striped  hover variant = "dark">
                <thead>
                <h1>{percent}%</h1>
                    <tr>
                        <th>Equip</th>
                        <th>Stat</th>
                        <th>Min</th>
                        <th>Mid</th>
                        <th>Max</th>
                    </tr>
                </thead>
                <tbody>
                {(scrollData.scrolls).filter(scroll=> scroll.scrollSuccessRate === percent && scroll.scrollStat !== "misc").map((v, i) =>
               [
                <tr key = {i} style ={(Date.parse(v.updatedAt) < Date.now() - 14 * 24 * 60 * 60 * 1000) ? {color: "#ff0066", fontSize: "1rem", fontWeight: "600"} : {color: "#00ff66", fontSize: "1rem", fontWeight: "600"}}>
                <td>{v.scrollEquipment.toUpperCase()}</td>
                <td>{v.scrollStat.toUpperCase()}</td>
                {v.scrollPrice[0] < 1000000 ? <td>{(v.scrollPrice[0]/1000).toFixed(1) + "K"}</td> : <td>{(v.scrollPrice[0]/1000000).toFixed(1) + "M"}</td> }
                {v.scrollPrice[Math.floor((v.scrollPrice.length - 1)/2)] < 1000000 ? <td>{(v.scrollPrice[Math.floor((v.scrollPrice.length - 1)/2)]/1000).toFixed(1) + "K"}</td> : <td>{(v.scrollPrice[Math.floor((v.scrollPrice.length - 1)/2)]/1000000).toFixed(1) + "M"}</td> }
                {v.scrollPrice[v.scrollPrice.length - 1] < 1000000 ? <td>{(v.scrollPrice[v.scrollPrice.length - 1]/1000).toFixed(1) + "K"}</td> : <td>{(v.scrollPrice[v.scrollPrice.length - 1]/1000000).toFixed(1) + "M"}</td> }
                </tr>
               ]
            )}
                </tbody>
            </Table>
        </Col>
            ])}
            <Col>
                <Table size="sm"  striped  hover variant = "dark"> 
                    <thead>
                        <h1>Misc</h1>
                        <tr>
                            <th>Equip</th>
                            <th>Stat</th>
                            <th>Min</th>
                            <th>Mid</th>
                            <th>Max</th>
                        </tr>
                    </thead>
                    <tbody>
                        {(scrollData.scrolls).filter(scroll=> scroll.scrollStat == "misc").map((v, i) =>
                            [
                                <tr key = {i} style ={(Date.parse(v.updatedAt) < Date.now() - 14 * 24 * 60 * 60 * 1000) ? {color: "#ff0066", fontSize: "1rem", fontWeight: "600"} : {color: "#00ff66", fontSize: "1rem", fontWeight: "600"}}>
                                <td>{v.scrollEquipment.toUpperCase()}</td>
                                <td>{v.scrollStat.toUpperCase()}</td>
                                {v.scrollPrice[0] < 1000000 ? <td>{(v.scrollPrice[0]/1000).toFixed(1) + "K"}</td> : <td>{(v.scrollPrice[0]/1000000).toFixed(1) + "M"}</td> }
                                {v.scrollPrice[Math.floor((v.scrollPrice.length - 1)/2)] < 1000000 ? <td>{(v.scrollPrice[Math.floor((v.scrollPrice.length - 1)/2)]/1000).toFixed(1) + "K"}</td> : <td>{(v.scrollPrice[Math.floor((v.scrollPrice.length - 1)/2)]/1000000).toFixed(1) + "M"}</td> }
                                {v.scrollPrice[v.scrollPrice.length - 1] < 1000000 ? <td>{(v.scrollPrice[v.scrollPrice.length - 1]/1000).toFixed(1) + "K"}</td> : <td>{(v.scrollPrice[v.scrollPrice.length - 1]/1000000).toFixed(1) + "M"}</td> } 
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