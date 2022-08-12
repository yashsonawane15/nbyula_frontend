import React, { Fragment, useState } from "react";
import { Container, Grid, Typography, AppBar, Button, ButtonGroup } from "@material-ui/core";
import { useEffect } from "react";
import { useReducer } from "react";
import actions from "../../store/authStore.js";
import { useSelector, useDispatch } from "react-redux";
import AppliedJobCard from "./AppliedJobCard";


const ApplicantDashboard = () => {
    const dispatch = useDispatch();

    // const token = useSelector( (state) => state.authStore.token);
    // const id = useSelector( (state) => state.auth.id);

    const [appliedJobs, setAppliedJobs] = useState([]);

    const getAppliedJobs = () => {
        let jobs = [
            {
                id: 1,
                title: "Job1",
                description: "This is job 1. It is very tough.",
                status: "Active"
            },
            {
                id: 2,
                title: "Job2",
                description: "This is job 2. It is very tough.",
                status: "Active"
            }
        ]

        setAppliedJobs(jobs);
    }

    useEffect( () => {
        getAppliedJobs()
    }, []);

    console.log(appliedJobs);
    return (
        <Fragment>
            <AppBar position="relative" color="secondary">
                <Grid align="right">
                    <ButtonGroup>
                        <Button>View jobs</Button>
                        <Button>Logout</Button>
                    </ButtonGroup>
                </Grid>
            </AppBar>

            <Container maxWidth="lg" padding="100px">
                <Grid container direction="column" spacing={3} >
                    <Grid item>
                        <Typography variant="h3" align="left" gutterBottom>
                            Your jobs
                        </Typography>
                    </Grid>
                    {
                        appliedJobs.map( (appliedJob) => (
                            <Grid item key={appliedJob.id}>
                                <AppliedJobCard job={appliedJob} />
                            </Grid>
                        ) )
                    }
                </Grid>
            </Container>
        </Fragment>
        
    );
}


export default ApplicantDashboard;
