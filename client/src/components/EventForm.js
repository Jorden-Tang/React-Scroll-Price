
import { FormControl , TextField, Grid} from '@material-ui/core';
import React from 'react'
import "../static/css/EventForm.css"
const EventForm = (props) => {


    return(
        <FormControl id = "event_form_container" > 
            <TextField
                id="datetime-local"
                label="Next appointment"
                type="datetime-local"
                defaultValue="2017-05-24T10:30"
                InputLabelProps={{
                shrink: true,
                }}
            />
        </FormControl>
    )
}
export default EventForm;