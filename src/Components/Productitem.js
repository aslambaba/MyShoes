import React from 'react';
import Menu from './Menu';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import {useParams} from "react-router-dom";
import data from './../Database/data.json';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  yoo: {
    overflow: 'hidden'
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
  price: {
      fontSize: '25px',
      fontWeight: 'bold',
  },
  desc: {
      margin: '20px 0px',
      fontSize: '16px'
  },
  addbtn: {
      width: '100%',
      padding: '6px 20px'
  }
}));
function Productitem() {
    const classes = useStyles();
    const { name } = useParams();
    
    return (
        <div className={classes.yoo}>
            <Menu />
            <div className={classes.root}>
                <Paper className={classes.paper}>
                    <Grid container spacing={2}>
                        <Grid item>
                            <ButtonBase className={classes.image}>
                                <img className={classes.img} alt="complex" src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/ndbgikrmsa0ejcdmkvpg/air-force-1-07-shoe-6jXPDp.jpg" />
                            </ButtonBase>
                        </Grid>
                        <Grid item xs={12} sm container>
                            <Grid item xs container direction="column" spacing={2}>
                                <Grid item xs>
                                    <Typography gutterBottom variant="h4">
                                        {data[name].name}
                                    </Typography>
                                    <Typography variant="subtitle1" color="textSecondary" className={classes.price}>
                                        $19.00
                                     </Typography>
                                    <Typography variant="body2" gutterBottom className={classes.desc}>
                                        {data[name].des}
                                    </Typography>
                                    <button className={classes.addbtn}>Add to Cart</button>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Paper>
            </div>
        </div>
    )
}

export default Productitem;