import React from 'react';
import { Paper, Collapse } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import 'components/Category.scss';

const useStyles = makeStyles({
  root: {
    width: '10rem',
  },
  title: {
    display: 'flex',
    justifyContent: 'center',
  },
})

export default function Category(props) {
  const classes = useStyles();

  return (
    <Paper id='main' onMouseEnter={() => props.setShow(props.name)} onMouseLeave={() => props.setShow(undefined)}>
      <div className={classes.title}>
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