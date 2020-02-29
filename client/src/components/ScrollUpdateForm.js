import React, {useState, useEffect}from 'react'
import "../static/css/ScrollUpdateForm.css"
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select'
import  MenuItem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl'
import Button from '@material-ui/core/Button'
import InputLabel from '@material-ui/core/InputLabel'
import axios from 'axios'
import {navigate} from '@reach/router'


const ScrollUpdateForm = (props) =>{
    const [data, setData] = useState({
        scrolls: []
    }); 
    const onInputHandler = (e, i) =>{
        e.preventDefault();
        // console.log(e.target
        let a = data.scrolls.slice(); //creates the clone of the state
        a[i][(e.target.name)] = e.target.value;
        setData({scrolls: a});
    }

    const handleEnter = (e) =>{
        if(e.key === "Enter"){
            addOneScroll(e);
        }
    }

    const removeEntry = (e, i)=>{
        e.preventDefault();
        data.scrolls.splice(i,1);
        
        setData({scrolls: data.scrolls})

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
        <body style = {{display: "flex", width: "100vw", height: "auto", flexDirection: "column"}}>
            {data.scrolls.map((v, i) =>
                [
                    <div key = {i} style = {{width: "100vw", height: "50px", display: "flex", flexDirection: "row"}}>
                    <FormControl>
                        <InputLabel id="equip"  >Equip</InputLabel>
                        <Select className ="Select" labelId ="equip"  name = "scrollEquipment"  onChange = {(e) => {onInputHandler(e, i)}}>
                            <MenuItem value={"1hsword"}>1hsword</MenuItem>
                            <MenuItem value={"1haxe"}>1haxe</MenuItem>
                            <MenuItem value={"1hbw"}>1hbw</MenuItem>
                            <MenuItem value={"2hsword"}>2hsword</MenuItem>
                            <MenuItem value={"2haxe"}>2haxe</MenuItem>
                            <MenuItem value={"2hbw"}>2hbw</MenuItem>
                            <MenuItem value={"onyx"}>Onyx</MenuItem>
                            <MenuItem value={"bow"}>bow</MenuItem>
                            <MenuItem value={"bottom"}>bottom</MenuItem>
                            <MenuItem value={"xbow"}>xbow</MenuItem>
                            <MenuItem value={"cape"}>cape</MenuItem>
                            <MenuItem value={"claw"}>claw</MenuItem>
                            <MenuItem value={"chaos"}>chaos</MenuItem>
                            <MenuItem value={"clean1"}>clean1</MenuItem>
                            <MenuItem value={"clean20"}>clean20</MenuItem>
                            <MenuItem value={"dagger"}>dagger</MenuItem>
                            <MenuItem value={"earring"}>earring</MenuItem>
                            <MenuItem value={"eye"}>eye</MenuItem>
                            <MenuItem value={"face"}>face</MenuItem>
                            <MenuItem value={"staff"}>staff</MenuItem>
                            <MenuItem value={"shield"}>shield</MenuItem>
                            <MenuItem value={"spear"}>spear</MenuItem> 
                            <MenuItem value={"shoes"}>shoes</MenuItem>
                            <MenuItem value={"pole"}>pole</MenuItem>
                            <MenuItem value={"glove"}>glove</MenuItem>
                            <MenuItem value={"gun"}>gun</MenuItem>
                            <MenuItem value={"wand"}>wand</MenuItem>
                            <MenuItem value={"knuckle"}>knuckle</MenuItem>
                            <MenuItem value={"overall"}>overall</MenuItem>
                            <MenuItem value={"top"}>top</MenuItem>
                            <MenuItem value={"xbow"}>xbow</MenuItem>
                            <MenuItem value={"pet"}>pet</MenuItem>
                            
            

                        </Select>
                    </FormControl>
            
                    <FormControl>
                        <InputLabel id="stat"  >Stat</InputLabel>
                        <Select className ="Select" labelId ="stat"  name = "scrollStat"  onChange = {(e) => {onInputHandler(e, i)}}>
                            <MenuItem value={"misc"}>misc</MenuItem>
                            <MenuItem value={"wa"}>wa</MenuItem>
                            <MenuItem value={"ma"}>ma</MenuItem>
                            <MenuItem value={"int"}>int</MenuItem>
                            <MenuItem value={"dex"}>dex</MenuItem>
                            <MenuItem value={"str"}>str</MenuItem>
                            <MenuItem value={"luck"}>luck</MenuItem>
                            <MenuItem value={"acc"}>acc</MenuItem>
                            <MenuItem value={"avoid"}>avoid</MenuItem>
                            <MenuItem value={"speed"}>speed</MenuItem>
                            <MenuItem value={"jump"}>jump</MenuItem>
                            <MenuItem value={"def"}>def</MenuItem>
                            <MenuItem value={"mdef"}>mdef</MenuItem>
                            <MenuItem value={"hp"}>hp</MenuItem>   
                            <MenuItem value={"mp"}>mp</MenuItem>
                        </Select>
                    </FormControl>

                    <FormControl>
                    <InputLabel id="demo-simple-select-filled-label"  >Percent</InputLabel>
                    <Select className ="Select" labelId="demo-simple-select-filled-label" name = "scrollSuccessRate"   label="%"  onChange = {(e) => {onInputHandler(e, i)}}>
                        
                        <MenuItem value={10}>10</MenuItem>
                        <MenuItem value={30}>30</MenuItem>
                        <MenuItem value={60}>60</MenuItem>
                        <MenuItem value={70}>70</MenuItem>
                        <MenuItem value={100}>100</MenuItem>
                        <MenuItem value={1}>1</MenuItem>
                        <MenuItem value={20}>20</MenuItem>
                    </Select>
                    </FormControl>
                    <FormControl>
                        <TextField  onKeyDown={handleEnter} name = "scrollPrice"  label="Price"  onChange = {(e) => {onInputHandler(e, i)}}/>
                    </FormControl>
                    <Button style={{width:"100px", fontSize: "1.5rem"}} variant="contained" color="secondary" href="#contained-buttons" onClick = {(e)=> {removeEntry(e, i)}}>-</Button>
       
                </div>
                ]
             )}
             <div>
            <Button style={{width:"100px", fontSize: "1.5rem"}} variant="contained" color="primary" href="#contained-buttons" onClick = {addOneScroll}>+</Button>
            <Button style={{width:"100px", fontSize: "1.5rem"}} onClick ={onSubmitHandler} variant="contained" color="primary" href="#contained-buttons">Submit</Button>
            </div>
        </body>
        </>
    )
}
export default ScrollUpdateForm
