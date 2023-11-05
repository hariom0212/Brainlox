import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { BsFillLockFill, BsFillUnlockFill } from 'react-icons/bs';
import "../css/customCard.css";

function CourseCard({title, difficulty,status}) {
    return (
        <div className='card-container'>
            <Card>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="200"
                    image="/images/pythonBg.jpg"
                    alt=""
                />
                <CardContent>
                    <Typography gutterBottom noWrap={true} variant="body1" component="div">
                        {title.replace("Questions","Program")}
                    </Typography>
                    <div className='cardDetails'>
                        <Typography variant="subtitle1" color="text.secondary">
                            {difficulty}
                        </Typography>
                        <Typography variant="subtitle1" color="text.secondary">
                            {status === "Locked" ? <BsFillLockFill /> : <BsFillUnlockFill />}
                        </Typography>      
                    </div>    
                </CardContent>
            </CardActionArea>
        </Card>
        </div>
        
    )
}

export default CourseCard;