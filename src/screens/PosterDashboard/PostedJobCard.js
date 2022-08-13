import React from "react";
import { Card, CardHeader, CardContent, Typography, Button, ButtonGroup } from "@material-ui/core";



const PostedJobCard = ({jobListing, viewApplications, closeJobListing }) => {

    const subheader = "This is the subheader"

    return (
        <Card>
            <CardHeader 
                title={ jobListing.title }
                subheader={ subheader }
                action={
                    <ButtonGroup>
                        <Button onClick={ () => closeJobListing(jobListing) }>
                            Close job
                        </Button>
                        <Button onClick={ () => { viewApplications(jobListing) } }>
                           View Applications
                        </Button>
                    </ButtonGroup>
                    
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

export default PostedJobCard;

