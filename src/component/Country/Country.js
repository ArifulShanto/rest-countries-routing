import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { Link } from 'react-router-dom';

const Country = (props) => {
    console.log(props.country);
    return (
        <Card sx={{ maxWidth: 345}}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="140"
                    image={props.country.flags.png}
                    alt={props.country.name.common}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {props.country.name.common}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        <Link to="/about">About {props.country.name.common}</Link>
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">
                    Details
                </Button>
            </CardActions>
        </Card>
    );
};

export default Country;