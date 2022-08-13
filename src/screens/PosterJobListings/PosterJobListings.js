import React from "react";
import { Container, Grid, Typography, AppBar, Button, ButtonGroup } from "@material-ui/core";
import JobListingCard from "./JobListingCard";



const PosterJobListings = () => {

    const [jobListings, setJobListings] = useState([]);

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