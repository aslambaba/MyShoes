import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        backgroundColor: '#2c2c2d',
        height: 70,
        left: 0,
        right: 0,
        top: 0,
        textAlign: 'center',
        lineHeight: '65px',
        color: 'white',
        fontSize: '18px'
    }
}));
function Footer() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <p>Created by AslamBaba</p>
        </div>
  );
}

export default Footer
