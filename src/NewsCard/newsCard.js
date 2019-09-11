import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { PlayCircleOutline } from '@material-ui/icons';
import Typography from '@material-ui/core/Typography';
import './newsCard.css';

const NewsCard = (props) => {
    return (
        <Card className='newsCard'>
            <CardActionArea>
                <CardMedia className='newsCard-image'
                    image={props.image}
                    title="News Title"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {props.title.length > 50 ? props.title.slice(0, 50) + '...' : props.title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {props.description.length > 100 ? props.description.slice(0, 100) + '...' : props.description}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <a href={props.url} className='findout-More' size="small" color="primary">
                    <PlayCircleOutline className='my-icon'/>   Find out more
                </a>
            </CardActions>
        </Card>
    );
}

export default NewsCard;