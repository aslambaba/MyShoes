import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
    Link
} from "react-router-dom";
const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        backgroundColor: '#2c2c2d',
        height: 70,
        top: '10px',
        textAlign: 'center',
        lineHeight: '65px'
    },
    links: {
        color: 'white',
        margin: '0px 10px',
        fontSize: '21px',
        textDecoration: 'none',
    }
}));
function Menu() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Link className={classes.links} to='/' >Home</Link>
            <Link className={classes.links} to='Products' >Products</Link>
            <Link className={classes.links} to='About' >About Us</Link>
        </div>
  );
}

export default Menu
