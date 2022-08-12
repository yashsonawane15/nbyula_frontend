import React, { useState } from 'react';
import { FormControl, Input, InputLabel, Grid, Button } from '@material-ui/core';

const SignUpComponent = ({ signup }) => {
    
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    return (

        <Grid container direction={"column"} spacing={3}>
            <Grid item>
                <FormControl fullWidth required>
                    <InputLabel htmlFor="username" > Your new username </InputLabel>
                    <Input id="username" onChange={ e => setUsername(e.target.value) }  required />
                </FormControl>
            </Grid>

            <Grid item>
                <FormControl fullWidth required>
                    <InputLabel htmlFor="name">Your name</InputLabel>
                    <Input id="name" onChange={ e => setName(e.target.value) } required  />
                </FormControl>
            </Grid>

            <Grid item>
                <FormControl fullWidth required>
                    <InputLabel htmlFor="email" >Your email</InputLabel>
                    <Input id="email" type="email" onChange={ e => setEmail(e.target.value) } required />
                </FormControl>
            </Grid>

            <Grid item>
                <FormControl fullWidth required>
                    <InputLabel htmlFor="password">Your password</InputLabel>
                    <Input id="password" type="password" onChange={ e => setPassword(e.target.value) } required  />
                </FormControl>
            </Grid>

            <Button variant="contained" onClick={ () => signup({username, email, password, name}) } color="primary" >
                signup
            </Button>
        </Grid>

    )
}

export default SignUpComponent;