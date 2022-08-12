import React from "react";
import { Card, CardHeader, CardContent, Typography } from "@material-ui/core";


const AppliedJobCard = (props) => {

    const job = props.job;
    const cardSubheader = "Status: " + job.status

    return (

        <Card variant="outlined">
            <CardHeader 
                title = {job.title}
                subheader={ cardSubheader }
                align="left"
            />

            <CardContent align="left">
                <Typography>
                    {job.description}
                </Typography>
            </CardContent>
        </Card>
    );
}

export default AppliedJobCard;
