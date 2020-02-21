import React, {useState, useEffect}from 'react'
import "../static/css/AdminPage.css"
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl'
import Button from '@material-ui/core/Button'
import axios from 'axios'
import {navigate} from '@reach/router'


const AdminPage = (props) =>{
    const [data, setData] = useState({
        scrolls: []
    }); 
    const onInputHandler = (e, i) =>{
        e.preventDefault();
        // console.log(e.target)
        let a = data.scrolls.slice(); //creates the clone of the state
        a[i][(e.target.name)] = e.target.value;
        setData({scrolls: a});
    }

    function sendApiRequest(data) {
        return axios.post("http://localhost:8000/api/scroll", data, {withCredentials: true});
    }

    const onSubmitHandler = (e) =>{
        e.preventDefault()
        data.scrolls.forEach(function(item, index){
            console.log(item)
            sendApiRequest(item)
                .then(console.log)
                .catch(console.log)
        })
        setData({scrolls: []})
    }
    const addOneScroll = (e) =>{
        e.preventDefault();
        setData({scrolls: [...data.scrolls, {scrollEquipment: "", scrollStat : "", scrollSuccessRate: "", scrollPrice: ""}]})
    }
    return(
        <>
        <h1>Weclome Almighty Admin</h1>
        <body style = {{display: "flex"}}>
            <FormControl  class = "form-group" style = {{width: "50%", height: "auto"}}>
            {data.scrolls.map((v, i) =>
                   [
                    <div key = {i} style = {{width: "100%", display: "flex", flexDirection: "row"}}>
                    <TextField name = "scrollEquipment"   label="Equip" onChange = {(e) => {onInputHandler(e, i)}}/>
                    <TextField  name = "scrollStat"   label="Stat" onChange = {(e) => {onInputHandler(e, i)}} />
                    <TextField  name = "scrollSuccessRate"   label="%"  onChange = {(e) => {onInputHandler(e, i)}}/>
                    <TextField  name = "scrollPrice"  label="Price"  onChange = {(e) => {onInputHandler(e, i)}}/>
                </div>
                   ]
             )}
            <Button variant="contained" color="primary" href="#contained-buttons" onClick = {addOneScroll}>+</Button>
            <Button onClick ={onSubmitHandler} variant="contained" color="primary" href="#contained-buttons">Submit</Button>
            </FormControl>
        </body>
        </>
    )
}
export default AdminPage