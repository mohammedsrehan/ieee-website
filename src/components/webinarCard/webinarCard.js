import { Card, CardContent, CardMedia, Typography } from '@material-ui/core';
import React from 'react';

import './style.css'

const WebinarCard = ({title, speakerName, speakerDetails, eventDescription, date, image}) => {
    console.log(image);
    return (
        <div>
            <Card className='card' raised={true}>
                <CardMedia 
                    className='image'
                    image={image}
                    title='webinar'
                />
                <CardContent className='content'>
                    <Typography variant="h5">
                        {title}
                    </Typography>
                    <div className='speaker-details'>
                        <Typography variant="h5">
                            {speakerName}
                        </Typography>
                        <Typography variant="body2">
                            {speakerDetails}
                        </Typography>
                    </div>
                    <Typography variant="body2">
                        {eventDescription}
                    </Typography>
                </CardContent>
            </Card>
        </div>
    );
};

export default WebinarCard;