import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: '#2c2c2d',
        position: 'fixed',
   left: 0,
   bottom: 0,
        textAlign: 'center',
        color: 'white',
        fontSize: '18px',
        width: "100%"
    }
}));
function Footer() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <p>Created by AslamBaba v7</p>
        </div>
  );
}

export default Footer
