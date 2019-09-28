import React from 'react';
import { Paper, Collapse } from '@material-ui/core';
import 'components/Category.scss';

export default function Category(props) {

  return (
    <Paper id='category' onMouseEnter={() => props.setShow(props.name)} onMouseLeave={() => props.setShow(undefined)}>
      <div className="title">
        <p>{props.name}</p>
      </div>
      <Collapse className="collapse" in={props.show === props.name}>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris dignissim.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris dignissim.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris dignissim.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris dignissim.</p>
      </Collapse>
    </Paper>
  );
}