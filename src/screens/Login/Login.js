import { Tabs, Grid, Tab, Paper, Typography, Box } from '@material-ui/core';
import React from 'react';
import { useState } from 'react';
import LoginComponent from './LoginComponent';
import  SignUpComponent  from './SignupComponent.js';
import { HOST } from "../../urls.js";
import axios from 'axios';

const Login = () => {
    
    // state variables
    const [activeTab, setActiveTab] = useState(0);

    const doLogin = (username, password) => {
        console.log(`${username} ${password}`);

        axios.post()
    }

    const doSignup = (userDetails) => {
        console.log(userDetails['name']);
    }

    // custom styles
    const paperStyle = {
        height: '70vh',
        width: 450,
        margin: "20px auto",
        padding: "20px"
    }

    const tabsStyle = {
        padding: 10
    }



    const TabPanel = (props) => {
        const { children, value, index, ...other } = props;
                  
        return (
          <Typography
            component="div"
            role="tabpanel"
            hidden={value !== index}
            id={`scrollable-auto-tabpanel-${index}`}
            aria-labelledby={`scrollable-auto-tab-${index}`}
            {...other}
          >
            <Box p={3}>{children}</Box>
          </Typography>
        );
      }


    const handleChange = (event, index) => {
        setActiveTab(index);
    }

    return (
        
        <Grid>

            <Paper variant="outlined" style={paperStyle} square>

                <Tabs value={activeTab} onChange={handleChange} variant="fullWidth" style={tabsStyle}>
                    <Tab index={0} label="Login" />

                    <Tab index={1} label="Signup" />
                </Tabs>

                <TabPanel value={activeTab} index={0}>
                    <LoginComponent  
                        doLogin={doLogin}
                    />    
                </TabPanel>

                <TabPanel value={activeTab} index={1}>
                    <SignUpComponent signup={doSignup}/>
                </TabPanel>
            </Paper>

        </Grid>
    )
}

export default Login;