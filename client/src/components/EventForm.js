
import { FormControl , TextField, Grid} from '@material-ui/core';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button'
import React, {useState, useEffect}from 'react'
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
            value: 'Horn Tail',
            label: 'ht',
        },
        {
            value: 'CWKPQ',
            label: 'cwk',
        },
        {
            value: 'Zakum',
            label: 'zak',
        },
        {
            value: 'Scar',
            label: 'scar',
        },
        {
            value: 'Krexel',
            label: 'krex',
        },
        {
            value: 'Jiao Ceng',
            label: 'jiao',
        },
        {
            value: 'Neo Tokyo',
            label: 'nt',
        },
        {
            value: 'Toad',
            label: 'toad',
        },

  
      ];

      const [buyerAmount, setBuyerAmount] = useState(0);
      const [eventType, setEventType] = useState();


      const handleSubmit = (event) =>{
        event.preventDefault();
        
      }

      const handleBuyerChange = (event) => {
        setBuyerAmount(event.target.value);
      };


      const handleEventTypeChange = (event) => {
        setEventType(event.target.value);
      };
    

    return(
        <FormControl id = "event_form_container" >
            <TextField style = {{width: "90%"}} id="standard-basic" label="Host IGN"  InputLabelProps={{ shrink: true}}/>
            <div style = {{display: "flex", flexDirection : "row", justifyContent: "space-around", width: "100%"}}>
            <TextField style = {{width: "40%"}} select label="# of Buyer" value={buyerAmount} onChange={handleBuyerChange} helperText="Select # of buyer">
                {total_buyer.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                    {option.label}
                    </MenuItem>
                ))}
            </TextField>

            <TextField style = {{width: "40%"}} select label="Event Type" value={eventType} onChange={handleEventTypeChange} helperText="Select Event Type">
                {all_event_type.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                    {option.label}
                    </MenuItem>
                ))}
            </TextField>
            </div>
            <TextField style = {{width: "90%"}} id="datetime-local" label="Next appointment" type="datetime-local" defaultValue="2017-05-24T10:30" InputLabelProps={{ shrink: true}}/>
            <TextField  multiline rows ="4" style = {{width: "90%", height: "100px"}} id="outlined-basic" label="Detail" variant="outlined" InputLabelProps={{ shrink: true}} />

           <Button onClick = {handleSubmit} style = {{width: "90%", height: "50px"}} variant="contained" color="primary"> Create Event </Button>
        </FormControl>
    )
}
export default EventForm;