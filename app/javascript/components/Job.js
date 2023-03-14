import React from "react";
import { Box, Card, CardContent, Typography, ImageListItem } from "@material-ui/core"

const Job = (props) => {
    const { photo, company, title, skills } = props

    return (
        <Box>
            <Card width='80%'>
                <CardContent>
                    <ImageListItem>
                        <img src={photo} alt="company" width="100" height="100" />
                    </ImageListItem>
                    <Typography gutterBottom variant='h3' component='dov'>
                        {company}
                    </Typography>
                    <Typography variant='h4'>
                        {title}
                    </Typography>
                    <Typography>
                        {skills}
                    </Typography>

                </CardContent>

            </Card>

        </Box>
    )

}

export default Job