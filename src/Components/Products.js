import React from 'react';
import Menu from './Menu';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        maxWidth: 445,
        margin: '20px 20px',
        border: '1px solid black'
    },
    media: {
        height: 140,
    },
    vbuttonc: {
        textAlign: 'center',
        width: '100%'
    },
    vbutton: {
        backgroundColor: 'black',
        color: 'white',
        textDecoration: 'none',
    }
});

function Products() {
    const classes = useStyles();

    async function Data() {
        const api = await fetch('../Database/database.json');
        const apij = await api.json;
        console.log(apij);
    }
    Data();

    return (
        <div>
            <Menu />
            <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        image="air-force-1-07-shoe-6jXPDp.jpg"
                        title="Contemplative Reptile"
                    />
                    <CardContent>
                        <Typography variant="body2" color="textSecondary" component="h1">
                            <b>Nike Air Force 107 Shoe</b>
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions className={classes.vbuttonc}>
                    <Button size="small" color="primary" className={classes.vbutton}>
                        View
                    </Button>
                </CardActions>
            </Card>
        </div>
    )
}

export default Products;