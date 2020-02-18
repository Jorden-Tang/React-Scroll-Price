import React from 'react'
import Table from 'react-bootstrap/Table'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import "../static/css/HomePage.css"
const HomePage = (props) => {
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
                        <tr>
                            <td>glove</td>
                            <td>W.A</td>
                            <td>1,500,000</td>
                            <td>2,000,000</td>
                            <td>3,000,000</td>
                        </tr>
                        <tr>
                            <td>glove</td>
                            <td>W.A</td>
                            <td>1,500,000</td>
                            <td>2,000,000</td>
                            <td>3,000,000</td>
                        </tr>
                    </tbody>
                </Table>
            </Col>
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
                        <tr>
                            <td>glove</td>
                            <td>W.A</td>
                            <td>1,500,000</td>
                            <td>2,000,000</td>
                            <td>3,000,000</td>
                        </tr>
                        <tr>
                            <td>glove</td>
                            <td>W.A</td>
                            <td>1,500,000</td>
                            <td>2,000,000</td>
                            <td>3,000,000</td>
                        </tr>
                    </tbody>
                </Table>
            </Col>
        
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
                        <tr>
                            <td>glove</td>
                            <td>W.A</td>
                            <td>1,500,000</td>
                            <td>2,000,000</td>
                            <td>3,000,000</td>
                        </tr>
                        <tr>
                            <td>glove</td>
                            <td>W.A</td>
                            <td>1,500,000</td>
                            <td>2,000,000</td>
                            <td>3,000,000</td>
                        </tr>
                    </tbody>
                </Table>
            </Col>
        
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
                        <tr>
                            <td>glove</td>
                            <td>W.A</td>
                            <td>1,500,000</td>
                            <td>2,000,000</td>
                            <td>3,000,000</td>
                        </tr>
                        <tr>
                            <td>glove</td>
                            <td>W.A</td>
                            <td>1,500,000</td>
                            <td>2,000,000</td>
                            <td>3,000,000</td>
                        </tr>
                    </tbody>
                </Table>
            </Col>
        
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
                        <tr>
                            <td>glove</td>
                            <td>W.A</td>
                            <td>1,500,000</td>
                            <td>2,000,000</td>
                            <td>3,000,000</td>
                        </tr>
                        <tr>
                            <td>glove</td>
                            <td>W.A</td>
                            <td>1,500,000</td>
                            <td>2,000,000</td>
                            <td>3,000,000</td>
                        </tr>
                    </tbody>
                </Table>
            </Col>
        
        
        </Row>
        </Container>
        </div>
    )
}
export default HomePage