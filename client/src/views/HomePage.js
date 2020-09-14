import React ,{useState, useEffect}from 'react'
import Table from 'react-bootstrap/Table'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import UserLoginForm from '../components/UserLoginForm'
import NavBar from '../components/NavBar'
import auth from '../auth/auth'
import LogOutButton from '../components/LogOutButton'
import TextField from '@material-ui/core/TextField'
import "../static/css/HomePage.css"
import axios from 'axios'
const HomePage = (props) => {
    const [scrollData, setScrollData] = useState({scrolls: []});
    const [keyWord, setKeyword] = useState("");
    const percentArray = [10, 30, 60, 70, 100];

    function sendApiRequest(data) {
        return axios.get("http://localhost:8000/api/scroll", {}, {withCredentials: true});
    }

    function sendApiDeleteRequest(id) {
        return axios.post("http://localhost:8000/api/scroll/" + id + "/delete", {}, {withCredentials: true});
    }

    const onInputSearchHandler = (e) =>{
        e.preventDefault();
        setKeyword(e.target.value);
    }
    
    useEffect(()=>{
        auth.checkExpireToken();
        sendApiRequest()
            .then((result)=>{
                setScrollData({scrolls: result.data.result});
            })
            .catch(console.log)
    }, [])
    if(scrollData.scrolls.length === 0){
        return(<p>Loading</p>)
    }

    const onDeleteRow = (e) =>{
        e.preventDefault();
        sendApiDeleteRequest(e.target.value);
        let temp = scrollData.scrolls.filter(s => s._id !== e.target.value);
        setScrollData({scrolls: temp});
    }
    
    return(
        <div className = "body">
            <div style = {{width: "100vw", height: "auto", position: "sticky", top: "0", zIndex:"11"}}>
            {auth.isAuth() ?  
            <div style= {{height: "90px",backgroundColor: "rgba(224, 219, 219, 0.5)", display: "flex", flexDirection: "row", alignItems: "center"}}>
                <NavBar/>
                <TextField id="filled-basic" label="Search By Equip or Stat" variant="filled"  onChange = {onInputSearchHandler} color="secondary"/>
                <LogOutButton></LogOutButton>
            </div>
            : <UserLoginForm></UserLoginForm>}
            </div>
            
        <div class= "header">
            <img className = "header_img" src = {require("../static/images/Mushroom.png")} alt = "mushmom"></img>
            <div style= {{display: "flex", flexDirection: "column", justifyContent: "space-around"} }>
                <h1>Fruit's Scroll Side</h1>
                <div id = "timeStampNote" style = {{fontSize: "2vw", display: "flex", justifyContent: "space-around"}} >
                <span><span style = {{color: "#ff0066"}}>Red</span>[old]</span> 
                <span></span>
                <span><span style = {{color: "#66ff00"}}>Green</span>[less than 1 week]</span>
                </div>
            </div>
            <img className = "header_img"  src = {require("../static/images/Slime.png")} alt = "slime"></img>
        </div>
        

        <div class = "scroll_price_wrapper">
            {percentArray.map((percent)=> [
                <div class = "item" >
                <div class = {`percent_header percent_header_${percent}`}>{percent}%</div>
                <Table size="sm" striped  hover variant = "dark" >
                    <thead>
                        <tr>
                            <th>Equip</th>
                            <th>Stat</th>
                            <th>Min</th>
                            <th>Mid</th>
                            <th>Max</th>
                        </tr>
                    </thead>
                    <tbody>
                    {(scrollData.scrolls).filter(scroll=> scroll.scrollSuccessRate === percent && scroll.scrollStat !== "misc" && (scroll.scrollEquipment.includes(keyWord.toLowerCase()) || scroll.scrollStat.includes(keyWord.toLowerCase()) )).map((v, i) =>
                [
                    <tr class = "price_row" key = {i} style ={(Date.parse(v.updatedAt) < Date.now() - 14 * 24 * 60 * 60 * 1000) ? {color: "#ff0066"} : {color: "#00ff66"}}>
                    <td>{v.scrollEquipment.toUpperCase()}</td>
                    <td>{v.scrollStat.toUpperCase()}</td>
                    {v.scrollPrice[0] < 1000000 ? <td>{(v.scrollPrice[0]/1000).toFixed(1) + "K"}</td> : <td>{(v.scrollPrice[0]/1000000).toFixed(1) + "M"}</td> }
                    {v.scrollPrice[Math.floor((v.scrollPrice.length - 1)/2)] < 1000000 ? <td>{(v.scrollPrice[Math.floor((v.scrollPrice.length - 1)/2)]/1000).toFixed(1) + "K"}</td> : <td>{(v.scrollPrice[Math.floor((v.scrollPrice.length - 1)/2)]/1000000).toFixed(1) + "M"}</td> }
                    {v.scrollPrice[v.scrollPrice.length - 1] < 1000000 ? <td>{(v.scrollPrice[v.scrollPrice.length - 1]/1000).toFixed(1) + "K"}</td> : <td>{(v.scrollPrice[v.scrollPrice.length - 1]/1000000).toFixed(1) + "M"}</td> }
                    {auth.isAdminAuth() ?  <td><button value = {v._id} onClick =  {(e, i) => {onDeleteRow(e,i)}}>Delete</button> </td> : <></>}
                    </tr>
                ]
                )}
                    </tbody>
                </Table>
            </div>
            ])}
             <div  class = "item">
             <div class = "percent_header">Misc</div>
                <Table size="sm"  striped  hover variant = "dark"> 
                    
                    <thead>
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
                                <tr class = "price_row" key = {i} style ={(Date.parse(v.updatedAt) < Date.now() - 21 * 24 * 60 * 60 * 1000) ? {color: "#ff0066"} : {color: "#00ff66"}}>
                                <td>{v.scrollEquipment.toUpperCase()}</td>
                                <td>{v.scrollStat.toUpperCase()}</td>
                                {v.scrollPrice[0] < 1000000 ? <td>{(v.scrollPrice[0]/1000).toFixed(1) + "K"}</td> : <td>{(v.scrollPrice[0]/1000000).toFixed(1) + "M"}</td> }
                                {v.scrollPrice[Math.floor((v.scrollPrice.length - 1)/2)] < 1000000 ? <td>{(v.scrollPrice[Math.floor((v.scrollPrice.length - 1)/2)]/1000).toFixed(1) + "K"}</td> : <td>{(v.scrollPrice[Math.floor((v.scrollPrice.length - 1)/2)]/1000000).toFixed(1) + "M"}</td> }
                                {v.scrollPrice[v.scrollPrice.length - 1] < 1000000 ? <td>{(v.scrollPrice[v.scrollPrice.length - 1]/1000).toFixed(1) + "K"}</td> : <td>{(v.scrollPrice[v.scrollPrice.length - 1]/1000000).toFixed(1) + "M"}</td> } 
                                {auth.isAdminAuth() ?  <td> <button value = {v._id} onClick =  {onDeleteRow}>Delete</button> </td>  : <td></td>}
                                </tr>
                            ]
                        )}
                    </tbody>
                </Table>
            </div>
        </div>
        </div>
    )
}
export default HomePage