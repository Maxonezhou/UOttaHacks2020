import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export default function ContainedButtons() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Button variant="contained" onClick={()=> window.location="/yourpatentsregion"}>Region</Button>
      <Button variant="contained" color="primary" onClick={()=> window.location="/yourpatentsregionmarket"}>
        Market
      </Button>
      <Button variant="contained" color="secondary" onClick={()=> window.location="/yourpatentsregionmarketdrug"}>
        Medicine
      </Button>

      <Button variant="contained" onClick={()=> window.location="/yourpatents"}>Clear Search</Button>

    </div>
  );
}
