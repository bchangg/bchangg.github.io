import React from 'react';
import { Paper, Collapse } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    width: '10rem',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  }
})

export default function Category(props) {
  const classes = useStyles();

  return (
    <Paper className={classes.root} onClick={() => props.show === props.name ? props.setShow(undefined) : props.setShow(props.name)}>
      <div>
        <p>{props.name}</p>
      </div>
      <Collapse in={props.show === props.name}>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris dignissim.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris dignissim.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris dignissim.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris dignissim.</p>
      </Collapse>
    </Paper>
  );
}