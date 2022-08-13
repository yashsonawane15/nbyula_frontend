import React, { useEffect, useState } from "react";
import { Card, CardHeader, CardContent, Typography, Button, ButtonBase } from "@material-ui/core";

const JobListingCard = ({ jobListing, applyToJob }) => {

    const subheader = "Last Date: " + jobListing.lastDate
    const [color, setColor] = useState("green");

    useEffect( () => {

    }, [jobListing])

    return  (

        <Card style={{backgroundColor: color}}>
            <CardHeader 
                title={ jobListing.title }
                subheader={ subheader }
                action={
                    <Button onClick={ () => { applyToJob(jobListing) } }>
                        Apply
                    </Button>
                }

                align="left"
            />

            <CardContent>
                <Typography align="left">
                    { jobListing.description }
                </Typography>
            </CardContent>
        </Card>
    )
}


export default JobListingCard;
