import { React, useState } from 'react';
import { Button, FormControl, Grid, Input, InputLabel } from "@material-ui/core";


const LoginComponent = ({ doLogin }) => {


    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    return (
        <Grid container direction="column" spacing={3}>
           <Grid item>
                <FormControl fullWidth required>
                        <InputLabel htmlFor="username-input" >Username</InputLabel>
                        <Input id="username-input" onChange={ (event) => { setUsername(event.target.value) } } />
                </FormControl>
           </Grid>

            <Grid item>
                <FormControl fullWidth required>
                    <InputLabel htmlFor="password-input">Password</InputLabel>
                    <Input id="password-input" required onChange={ (event) => { setPassword(event.target.value) } }  />
                </FormControl>
            </Grid>

            <Grid item>
                <Button variant="contained" onClick={ (event) => { doLogin(username, password) } } color="primary" fullWidth>
                    login
                </Button>
            </Grid>
        </Grid>
    )
}

export default LoginComponent;