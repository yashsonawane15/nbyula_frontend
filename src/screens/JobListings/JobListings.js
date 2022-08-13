import React, { Fragment, useEffect, useState } from "react";
import { Container, Grid, Typography, AppBar, Button, ButtonGroup } from "@material-ui/core";
import JobListingCard from "./JobListingCard";



const JobListings = () => {

    const [jobListings, setJobListings] = useState([]);

    const getJobListings = () => {
        console.log("rerendering");

        let jobListings = [
            {
                id: 1,
                title: "Job1",
                description: "This is job 1. It is very tough.",
                postedBy: "Poster1",
                posterEmail: "poster.1@gmail.com",
                posterPhone: "9090909090",
                lastDate: "12/07/2022"
            },
            {
                id: 2,
                title: "Job2",
                description: "This is job 2. It is very tough.",
                postedBy: "Poster2",
                posterEmail: "poster.2@gmail.com",
                posterPhone: "9090909090",
                lastDate: "16/09/2022"
            }
        ]

        setJobListings(jobListings);
    }

    const applyToJob = (jobListing) => {

        //apply to job
    }


    useEffect( () => {
        getJobListings()
    }, []);


    return (

        <Fragment>

            <AppBar position="relative">
                <Grid align="right">
                    <ButtonGroup>
                        <Button>View jobs</Button>
                        <Button>Logout</Button>
                    </ButtonGroup>
                </Grid>
            </AppBar>

            <Container maxWidth="lg">

                <Grid container direction="column" spacing={3} >
                        <Grid item>
                            <Typography variant="h3" align="left" gutterBottom>
                                Your jobs
                            </Typography>
                        </Grid>
                        {
                            jobListings.map( (jobListing) => (
                                <Grid item key={jobListing.id}>
                                    <JobListingCard jobListing={jobListing}  rerender={getJobListings} applyToJob={applyToJob} />
                                </Grid>
                            ) )
                        }
                </Grid>

            </Container>
        </Fragment>

    )
}



export default JobListings;

