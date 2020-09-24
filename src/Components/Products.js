import React from 'react';
import Menu from './Menu';
import Footer from './Footer';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import data from './../Database/data.json';
import {
    Link,
    useRouteMatch
} from "react-router-dom";
const useStyles = makeStyles({
    body: {
        textAlign: 'center'
    },
    root: {
        maxWidth: '40%',
        margin: '20px 20px',
        border: '1px solid black',
        display: 'inline-block',
        width: '100%',
        textAlign: 'center',
    },
    media: {
        height: 240,
    },
    vbuttonc: {
        textAlign: 'center',
        width: '100%',
        display: 'inline-block',
        padding: '0px 0px'
    },
    vbutton: {
        backgroundColor: 'black',
        color: 'white',
        textDecoration: 'none',
        width: '100%',
        "&:hover": {
            backgroundColor: '#bf1111'
        }
    },
});

function Products() {
    const classes = useStyles();

    let {url} = useRouteMatch();

    return (
        <div className={classes.body}>
            <Menu />
            {Object.keys(data).map((obj) => {
                return (
                    <Card className={classes.root}>
                        <CardActionArea>
                            <CardMedia
                                className={classes.media}
                                image={data[obj].image}
                            />
                            <CardContent>
                                <Typography variant="body2" color="textSecondary" component="h1">
                                    <b>{data[obj].name}</b>
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions className={classes.vbuttonc}>
                            <Link to={`${url}/productitems/`+obj}>
                                <Button className={classes.vbutton}>
                                    View
                                </Button>
                            </Link>
                        </CardActions>
                    </Card>
                )
            })}
            <Footer />
        </div>
    )
}

export default Products;