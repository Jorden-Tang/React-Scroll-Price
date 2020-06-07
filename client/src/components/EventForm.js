
import { FormControl , TextField} from '@material-ui/core';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button'
import React, {useState, useEffect}from 'react'
import axios from 'axios'
import "../static/css/EventForm.css"
const EventForm = (props) => {
    const total_buyer = [
        {
            value: 1,
            label: '1',
        },
        {
            value: 2,
            label: '2',
          },
        {
            value: 3,
            label: '3',
        },
        {
            value: 4,
            label: '4',
        },
        {
            value: 5,
            label: '5',
        },
      ];


      const all_event_type = [
        {
            label: '',
            value: '',
        }
        ,
        {
            label: 'Horn Tail',
            value: 'ht',
        },
        {
            label: 'CWKPQ',
            value: 'cwk',
        },
        {
            label: 'Zakum',
            value: 'zak',
        },
        {
            label: 'Scar',
            value: 'scar',
        },
        {
            label: 'Krexel',
            value: 'krex',
        },
        {
            label: 'Jiao Ceng',
            value: 'jiao',
        },
        {
            label: 'Neo Tokyo',
            value: 'nt',
        },
        {
            label: 'Toad',
            value: 'toad',
        },
      ];
      const [hostIGN , setHostIGN] = useState("")
      const [buyerCount, setBuyerCount] = useState(1);
      const [eventType, setEventType] = useState("");
      const [hostTime, setHostTime] = useState(Date.now());
      const [description, setDescription] = useState("")
      const [errorArray, setErrorArray] = useState([])
      const [buyerArray, setBuyerArray] = useState([{buyerType: "", buyerIGN: "", buyerID: "" }])

      const handleSubmit = (event) =>{
        event.preventDefault();
        let eventData = {
                            host_id: localStorage.getItem("user_id"), 
                            startTime: hostTime,
                            hostIGN: hostIGN,
                            description: description,
                            buyerCount: buyerCount,
                            eventType: eventType,
                            buyers: buyerArray,
                        }
        axios.post("http://localhost:8000/api/event", eventData, {withCredentials: true})
            .then((result) =>{
                // setHostIGN("");
                setBuyerCount(1);
                // setEventType("");
                setHostTime(Date.now());
                setDescription("");
                setErrorArray([]);
            })
            .catch((err) => {
                let tempArray = []
                for(const key in err.response.data.error.errors){
                    tempArray.push(err.response.data.error.errors[key].message)
                }
                setErrorArray(tempArray);
            })

      }

      const handleBuyerChange = (event) => {
        event.preventDefault();
        setBuyerCount(event.target.value);
        let temp = [];
        for(let i = 0; i < event.target.value; i++){
            temp.push({buyerType:'', buyerIGN:'', buyerID: ''})
        }
        setBuyerArray(temp);
      };

      const handleEventTypeChange = (event) => {
        setEventType(event.target.value);
      };

      const handleTimeChange = (event) =>{
        event.preventDefault();
        let date = Date.parse(event.target.value);
        setHostTime(date);
        // console.log(hostTime)
      }

      const handleHostIGNChange = (event) =>{
        event.preventDefault();
        setHostIGN(event.target.value);
        // console.log(hostIGN);
      }

      const handleDescriptionChange = (event)=>{
        event.preventDefault();
        setDescription(event.target.value);
      }

      function getFormattedDate(time_in_mili) {
        var date = new Date(time_in_mili);
        let  currentHours = date.getHours();
        currentHours = ("0" + currentHours).slice(-2);
        let  currentMonth = date.getMonth() + 1;
        currentMonth = ("0" + currentMonth).slice(-2);
        let   currentMin = date.getMinutes();
        currentMin = ("0" + currentMin).slice(-2);
        let  currentDate = date.getDate();
        currentDate = ("0" + currentDate).slice(-2);
        var str = date.getFullYear() + "-" + currentMonth + "-" + currentDate + "T" +  currentHours + ":" + currentMin
        return str;
      }

      const handleBuyerTypeChange =(e, i)=>{
        e.preventDefault();
        let a = buyerArray.slice();
        a[i][(e.target.name)] = e.target.value;
        setBuyerArray(a);       

        // setBuyerArray(tempArray);
      }

    return(
        <>
        <FormControl id = "event_form_container" >
            <a id = "event_form_exit" href = "#!">❎</a>
            {errorArray.map((err,i) =>
                <p key = {i} style = {{color: "red"}}>{err}</p>
            )}
            <TextField value = {hostIGN} onChange = {handleHostIGNChange} style = {{width: "90%"}} id="standard-basic" label="Host IGN"  InputLabelProps={{ shrink: true}}/>
            <TextField style = {{width: "90%"}} select label="# of Buyer" value = {buyerCount} onChange={handleBuyerChange} helperText="Select # of buyer">
                {total_buyer.map((option) => (
                    <MenuItem value = {buyerCount} label = "" key={option.value} value={option.value}>
                    {option.label}
                    </MenuItem>
                ))}
            </TextField>
            <div style = {{display:"flex", flexDirection: "row", width :"100%", wrap: "wrap"}}></div>
            {buyerArray.map((p, i)=>(
                <TextField name = "buyerType" onChange = {(event) => {handleBuyerTypeChange(event, i)}}  style = {{width: "200px", height: "35px", marginLeft: "10px"}} label="Buyer Type: Ex: helmet" value = {p.buyerType} >{p.buyerType}</TextField>
            ))}   
        

            <TextField  style = {{width: "90%"}} select label="Event Type" onChange={handleEventTypeChange} helperText="Select Event Type">
                {all_event_type.map((option) => (
                    <MenuItem label = "" key={option.value} value={option.value}>
                    {option.label}
                    </MenuItem>
                ))}
            </TextField>
            <TextField onChange = {handleTimeChange} style = {{width: "90%"}} id="datetime-local" label="Next appointment" type="datetime-local" value = {getFormattedDate(hostTime)} defaultValue={getFormattedDate(Date.now())} InputLabelProps={{ shrink: true}}/>
            <TextField onChange = {handleDescriptionChange} multiline rows ="4" style = {{width: "90%", height: "100px"}} id="outlined-basic" label="Detail" variant="outlined" InputLabelProps={{ shrink: true}} />
           <Button onClick = {handleSubmit} style = {{width: "90%", height: "50px"}} variant="contained" color="primary"> Submit </Button>
        </FormControl>
        </>
    )
}
export default EventForm;