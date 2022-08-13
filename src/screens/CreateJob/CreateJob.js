import { MenuItem, Select } from "@material-ui/core";
import React, { useEffect, useState, useSyncExternalStore } from "react";
import { Button, FormControl, Grid, Input, InputLabel, Paper } from "@material-ui/core";




const CreateJob = () => {


    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [lastDate, setLastDate] = useState(new Date());
    const [location, setLocation] = useState("");
    const [contactPhone, setContactPhone] = useState("");
    const [contactEmail, setContactEmail] = useState("");
    const [locations, setLocations] = useState([]);


    const paperStyle = {
        height: '80vh',
        width: 450,
        margin: "20px auto",
        padding: "20px"
    }

    const getLocations = () => {
        return ["Bangalore", "Berlin"];
    }

    useEffect( () => {
        setLocations(getLocations());
    }, []);


    const addJobListing = () => {
        //do it
    } 


    return (
        <Paper variant="outlined" style={paperStyle} square>
            <Grid container direction="column" spacing={3}>
                <Grid item>
                        <FormControl fullWidth required>
                        <p align="left">Title</p>
                                {/* <InputLabel htmlFor="title" >Username</InputLabel> */}
                                <Input id="title" onChange={ (event) => { setTitle(event.target.value) } } />
                        </FormControl>
                </Grid>

                <Grid item>
                    <FormControl fullWidth required>
                    <p align="left">Description</p>
                        {/* <InputLabel htmlFor="description">Password</InputLabel> */}
                        <Input id="description" required onChange={ (event) => { setDescription(event.target.value) } }  />
                    </FormControl>
                </Grid>

                <Grid item>
                    <FormControl fullWidth required>
                        <p align="left">Last date</p>
                        <Input id="lastDate" onChange={ (e) => setLastDate(e.target.value) } type="date" />
                    </FormControl>
                </Grid>

                <Grid item>
                    <p align="left">Location</p>
                    <Select
                        label="Location"
                        onChange = { (e) => setLocation(e.target.value) }
                        fullWidth
                        align="left"
                    >
                        {
                            locations.map( (location) => (
                                <MenuItem value={location}>{location}</MenuItem>
                            ) )    
                        }
                    </Select>
                </Grid>

                <Grid item>
                        <FormControl fullWidth required>
                        <p align="left">Contact Phone Number</p>
                                {/* <InputLabel htmlFor="title" >Username</InputLabel> */}
                                <Input id="phone" onChange={ (event) => { setContactPhone(event.target.value) } } />
                        </FormControl>
                </Grid>

                <Grid item>
                        <FormControl fullWidth required>
                        <p align="left">Contact Email</p>
                                {/* <InputLabel htmlFor="title" >Username</InputLabel> */}
                                <Input id="email" onChange={ (event) => { setContactEmail(event.target.value) } }  type="email" />
                        </FormControl>
                </Grid>

                <Grid item>
                    <Button variant="contained" onClick={ (event) => { addJobListing() } } color="primary" fullWidth>
                        Post
                    </Button>
                </Grid>
            </Grid>
        </Paper>
    )

}



export default CreateJob;
