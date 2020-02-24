import React, {useState, useEffect}from 'react'
import "../static/css/ScrollUpdateForm.css"
import TextField from '@material-ui/core/Select';
import Select from '@material-ui/core/Select'
import  MenuItem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl'
import Button from '@material-ui/core/Button'
import InputLabel from '@material-ui/core/InputLabel'
import axios from 'axios'
import {navigate} from '@reach/router'


const ScrollUpdateForm = (props) =>{
    const [data, setData] = useState({
        scrolls: [{scrollEquipment: "", scrollStat : "", scrollSuccessRate: "", scrollPrice: ""}]
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
        data.scrolls.forEach( async function(item, index){
            await sendApiRequest(item)
                .then(()=>{})
                .catch()
        })
        setData({scrolls: []})
    }
    const addOneScroll = (e) =>{
        e.preventDefault();
        setData({scrolls: [...data.scrolls, {scrollEquipment: "", scrollStat : "", scrollSuccessRate: "", scrollPrice: ""}]})
    }
    return(
        <>
        <body style = {{display: "flex"}}>
            <FormControl  class = "form-group" style = {{width: "50%", height: "auto"}}>
            {data.scrolls.map((v, i) =>
                [
                    <div key = {i} style = {{width: "100%", display: "flex", flexDirection: "row"}}>
                    <Select name = "scrollEquipment"   label="Equip" onChange = {(e) => {onInputHandler(e, i)}}>
                        <MenuItem value={"1hsword"}>1hsword</MenuItem>
                        <MenuItem value={"1haxe"}>1haxe</MenuItem>
                        <MenuItem value={"1hbw"}>1hbw</MenuItem>
                        <MenuItem value={"2hsword"}>2hsword</MenuItem>
                        <MenuItem value={"2haxe"}>2haxe</MenuItem>
                        <MenuItem value={"2hbw"}>2hbw</MenuItem>
                        <MenuItem value={"bow"}>bow</MenuItem>
                        <MenuItem value={"xbow"}>xbow</MenuItem>
                        <MenuItem value={"claw"}>claw</MenuItem>
                        <MenuItem value={"dagger"}>dagger</MenuItem>
                        <MenuItem value={"spear"}>spear</MenuItem>
                        <MenuItem value={"pole"}>pole</MenuItem>
                        <MenuItem value={"wand"}>wand</MenuItem>
                        <MenuItem value={"staff"}>staff</MenuItem>
                        <MenuItem value={"knuckle"}>knuckle</MenuItem>
                        <MenuItem value={"gun"}>gun</MenuItem>
                        <MenuItem value={"overall"}>overall</MenuItem>
                        <MenuItem value={"top"}>top</MenuItem>
                        <MenuItem value={"bottom"}>bottom</MenuItem>
                        <MenuItem value={"glove"}>glove</MenuItem>
                        <MenuItem value={"shoes"}>shoes</MenuItem>
                        <MenuItem value={"cape"}>cape</MenuItem>
                        <MenuItem value={"shield"}>shield</MenuItem>
                    </Select>

                    <Select  name = "scrollStat"   label="Stat" onChange = {(e) => {onInputHandler(e, i)}} />
                    <InputLabel>Percent</InputLabel>
                    <Select  name = "scrollSuccessRate"   label="%"  onChange = {(e) => {onInputHandler(e, i)}}>
                        <MenuItem value={10}>10</MenuItem>
                        <MenuItem value={30}>30</MenuItem>
                        <MenuItem value={60}>60</MenuItem>
                        <MenuItem value={70}>70</MenuItem>
                        <MenuItem value={100}>100</MenuItem>
                        <MenuItem value={1}>1</MenuItem>
                        <MenuItem value={20}>20</MenuItem>
                    </Select>
                    <InputLabel>Percent</InputLabel>
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
export default ScrollUpdateForm