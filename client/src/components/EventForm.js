
import { FormControl , TextField, Grid} from '@material-ui/core';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button'
import React, {useState, useEffect}from 'react'
import axios from 'axios'
import "../static/css/EventForm.css"
const EventForm = (props) => {
    const total_buyer = [

        {
            value:  0,
            label: '0',
        },
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
      const [buyerAmount, setBuyerAmount] = useState(0);
      const [eventType, setEventType] = useState("");
      const [hostTime, setHostTime] = useState(getFormattedDate());
      const [description, setDescription] = useState("")
      const [errorArray, setErrorArray] = useState([])

      const handleSubmit = (event) =>{
        event.preventDefault();
        let eventData = {
                            host_id: localStorage.getItem("user_id"), 
                            startTime: hostTime,
                            hostIGN: hostIGN,
                            description: description,
                            buyers: new Array(buyerAmount),
                            eventType: eventType,
                        }
        axios.post("http://localhost:8000/api/event", eventData, {withCredentials: true})
            .then((result) =>{
                // setHostIGN("");
                setBuyerAmount(0);
                // setEventType("");
                setHostTime(getFormattedDate());
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
        setBuyerAmount(event.target.value);
      };

      const handleEventTypeChange = (event) => {
        setEventType(event.target.value);
      };

      const handleTimeChange = (event) =>{
        event.preventDefault();
        let date = new Date(Date.parse(event.target.value));
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

      function getFormattedDate() {
        var date = new Date(Date.now());
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

    return(
        <>
        <FormControl id = "event_form_container" >
            {errorArray.map((err,i) =>
                <p key = {i} style = {{color: "red"}}>{err}</p>
            )}
            <TextField value = {hostIGN} onChange = {handleHostIGNChange} style = {{width: "90%"}} id="standard-basic" label="Host IGN"  InputLabelProps={{ shrink: true}}/>
            <div style = {{display: "flex", flexDirection : "row", justifyContent: "space-around", width: "100%"}}>
            <TextField style = {{width: "40%"}} select label="# of Buyer" value = {buyerAmount} onChange={handleBuyerChange} helperText="Select # of buyer">
                {total_buyer.map((option) => (
                    <MenuItem value = {buyerAmount} label = "" key={option.value} value={option.value}>
                    {option.label}
                    </MenuItem>
                ))}
            </TextField>

            <TextField value = {eventType} style = {{width: "40%"}} select label="Event Type" onChange={handleEventTypeChange} helperText="Select Event Type">
                {all_event_type.map((option) => (
                    <MenuItem label = "" key={option.value} value={option.value}>
                    {option.label}
                    </MenuItem>
                ))}
            </TextField>
            </div>
            <TextField onChange = {handleTimeChange} style = {{width: "90%"}} id="datetime-local" label="Next appointment" type="datetime-local" defaultValue={getFormattedDate()} InputLabelProps={{ shrink: true}}/>
            <TextField onChange = {handleDescriptionChange} multiline rows ="4" style = {{width: "90%", height: "100px"}} id="outlined-basic" label="Detail" variant="outlined" InputLabelProps={{ shrink: true}} />

           <Button onClick = {handleSubmit} style = {{width: "90%", height: "50px"}} variant="contained" color="primary"> Create Event </Button>
        </FormControl>
        </>
    )
}
export default EventForm;